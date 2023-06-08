import * as React from "react";
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
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ModalContactDetail from "../ModalContactDetail/ModalContactDetail";
import ModalComfirm from "../../../../../components/ModalConfirm/ModalConfirm";
import { deleteContact } from "../../../../../redux/api/contactApiHandler";
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

export default function ContactTable({ rows }) {
  const [tableRows, setTableRows] = React.useState(rows);
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const handleOpen = (data) => {
    setOpen(true);
    setValue(data);
  };
  const handleClose = () => setOpen(false);

  const handleOpenModalConfirm = (itemId) => {
    setOpenModalConfirm(true);
    setValue(itemId);
  };
  const handleCloseModalConfirm = () => {
    setOpenModalConfirm(false);
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTableRows(rows);
  }, [rows]);
  //
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const handleOnDelete = async (contactId) => {
    await deleteContact(dispatch, toast, currentUserAccessToken, contactId);
    setValue("");
  };
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: "20px" }} align="center">
              ID
            </TableCell>
            <TableCell style={{ minWidth: "150px" }}>Full Name</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Email Address</TableCell>
            <TableCell style={{ minWidth: "125px" }}>Phone Number</TableCell>
            <TableCell style={{ minWidth: "150px" }} align="center">
              Company Name
            </TableCell>
            <TableCell align="center">Count Customer</TableCell>
            <TableCell style={{ minWidth: "300px" }}>Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell style={{ minWidth: "100px" }}>Created day</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        {tableRows.length === 0 ? (
          <TableBody>
            <TableCell align="center"  colSpan={12}>
              Không có dữ liệu
            </TableCell>
          </TableBody>
        ) : (
          <TableBody>
            {(rowsPerPage > 0
              ? tableRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableRows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell align="center">
                  {row.companyName ? row.companyName : "-------"}
                </TableCell>
                <TableCell align="center">
                  {row.countCustomer ? row.countCustomer : "-------"}
                </TableCell>
                <TableCell>{row.address ? row.address : "-------"}</TableCell>
                <TableCell>{row.status ? "Active" : "Done"}</TableCell>
                <TableCell>{moment(row.createdAt).fromNow()}</TableCell>
                <TableCell className="d-flex justify-content-around">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleOpen(row)}
                  >
                    <RemoveRedEyeIcon></RemoveRedEyeIcon>
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleOpenModalConfirm(row.id)}
                  >
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={11}
              count={rows.length}
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
      <ModalContactDetail
        value={value}
        open={open}
        handleClose={handleClose}
      ></ModalContactDetail>
      <ModalComfirm
        open={openModalConfirm}
        handleClose={handleCloseModalConfirm}
        title={"Xác nhận xóa"}
        deleteCallback={handleOnDelete}
        itemId={value}
      ></ModalComfirm>
    </TableContainer>
  );
}
