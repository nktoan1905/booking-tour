import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateCountry from "./ModalCreateCountry/ModalCreaterCountry";
import { deleteCountry } from "../../../../redux/api/cityAndCountryApiHandler";
import { toast } from "react-toastify";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const TableCountries = ({ data }) => {
  const currentUser = useSelector((state) => state.auth.login.currentUser.user);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => {
    setOpenCreate(true);
  };
  const handleCloseCreate = () => {
    setOpenCreate(false);
  };
  const [openUpdate, setOpenUpdate] = useState(false);
  const [value, setValue] = useState("");
  const handleOpenUpdate = (value) => {
    setOpenUpdate(true);
    setValue(value);
  };
  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleOnDelete = async (id) => {
    await deleteCountry(dispatch, toast, id, currentUserAccessToken);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "700px" }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "40px" }} align="center">
              ID
            </TableCell>
            <TableCell style={{ width: "200px" }} align="center">
              Name
            </TableCell>
            <TableCell style={{ width: "100px" }} align="center">
              Status
            </TableCell>
            <TableCell align="center">Created at</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">
              <Button variant="primary" size="sm" onClick={handleOpenCreate}>
                +
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">
                {row.status ? "Active" : "Inactive"}
              </TableCell>
              <TableCell align="center">
                {moment(row.createdAt).format("L")}
              </TableCell>
              <TableCell align="center">
                <Button variant="primary" size="sm" className="me-2 d-none">
                  Update
                </Button>
                {currentUser.roleId === 1 ? (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleOnDelete(row.id)}
                  >
                    Delete
                  </Button>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={7}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <ModalCreateCountry open={openCreate} handleClose={handleCloseCreate} />
    </TableContainer>
  );
};

export default TableCountries;
