import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Button from "react-bootstrap/Button";
import moment from "moment";
import { getRoleName } from "../../../../../Helper/RoleHelper";
import ModalCreatePromotion from "../../components/ModalCreatePromotion/ModalCreatePromotion";
import ModalUpdatePromotion from "../../components/ModalUpdatePromotion/ModalUpdatePromotion";
import { deletePromotion } from "../../../../../redux/api/promotionApiHandler";
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

const ListPromotion = () => {
  const lists = useSelector((state) => state.promotions.promotions.promotions);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lists.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleOnDelete = async (id) => {
    await deletePromotion(dispatch, toast, id, currentUserAccessToken);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "1000px" }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "40px" }} align="center">
              ID
            </TableCell>
            <TableCell style={{ width: "300px" }} align="center">
              Name
            </TableCell>
            <TableCell style={{ width: "50px" }} align="center">
              Discount
            </TableCell>
            <TableCell style={{ width: "100px" }} align="center">
              For object
            </TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Created at</TableCell>
            <TableCell align="center">Action</TableCell>
            {currentUser.roleId === 1 ? (
              <TableCell align="center">
                <Button variant="primary" size="sm" onClick={handleOpenCreate}>
                  +
                </Button>
              </TableCell>
            ) : (
              <React.Fragment />
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? lists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : lists
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.promotion}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {getRoleName(row.forObject)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.status ? "Active" : "Inactive"}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {moment(row.createdAt).format("L")}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {currentUser.roleId === 1 ? (
                  <React.Fragment>
                    <Button
                      variant="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleOpenUpdate(row)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleOnDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </React.Fragment>
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
              count={lists.length}
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
      <ModalCreatePromotion open={openCreate} handleClose={handleCloseCreate} />
      <ModalUpdatePromotion
        open={openUpdate}
        handleClose={handleCloseUpdate}
        value={value}
      />
    </TableContainer>
  );
};

export default ListPromotion;
