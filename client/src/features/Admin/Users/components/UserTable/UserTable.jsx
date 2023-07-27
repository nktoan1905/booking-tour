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
import { Button, TableHead } from "@mui/material";
import moment from "moment";
import dayjs from "dayjs";
import ModalUpdateUser from "../ModalUpdateUser/ModalUpdateUser";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import userApi from "../../../../../api/userApi";
import { useSelector } from "react-redux";

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

export default function UserTable({ rows }) {
  const [tableRows, setTableRows] = React.useState(rows);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setTableRows(rows);
  }, [rows]);
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = (data) => {
    setOpen(true);
    setValue(data);
  };
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const handleClose = () => setOpen(false);
  const handleDeleteUser = async (userId) => {
    await userApi.deleteUser(currentUserAccessToken, userId);
  };
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const UserRole = Object.freeze({
    ADMIN: 1,
    EMPLOYEE: 2,
    MEMBERS: 3,
    SLIVER_MEMBER: 4,
    GOLDEN_MEMBER: 5,
  });
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const roleRender = (roleId) => {
    switch (roleId) {
      case UserRole.ADMIN:
        return "Admin";
      case UserRole.EMPLOYEE:
        return "Employee";
      case UserRole.MEMBERS:
        return "Member";
      case UserRole.SLIVER_MEMBER:
        return "Sliver member";
      case UserRole.GOLDEN_MEMBER:
        return "Golden member";
      default:
        break;
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: "50px" }}>ID</TableCell>
            <TableCell style={{ minWidth: "50px" }}>Avatar</TableCell>
            <TableCell style={{ minWidth: "200px" }}>Full name</TableCell>
            <TableCell style={{ minWidth: "100px" }}>Gender</TableCell>
            <TableCell style={{ minWidth: "100px" }}>Gmail</TableCell>
            <TableCell style={{ minWidth: "250px" }}>Address</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Phone number</TableCell>
            <TableCell style={{ minWidth: "150px" }}>Birth day</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell style={{ minWidth: "140px" }}>Created day</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
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
              <TableCell align="center">
                <img
                  src={row.avatar}
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                ></img>
              </TableCell>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.gender === true ? "Nam" : "Nữ"}</TableCell>
              <TableCell style={{ minWidth: "250px" }}>{row.email}</TableCell>
              <TableCell style={{ minWidth: "250px" }}>
                {row.address || "Chưa có"}
              </TableCell>
              <TableCell>{row.phoneNumber || "Chưa có"}</TableCell>
              <TableCell align={"center"}>
                {dayjs(row.dob).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell>{roleRender(row.roleId)}</TableCell>
              <TableCell align="center">
                {row.status === true ? "Active" : "Inactive"}
              </TableCell>
              <TableCell>{moment(row.createdAt).fromNow()}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleOpen(row)}
                  disabled={row.roleId === 1}
                >
                  <EditIcon></EditIcon>
                </Button>
                <Button
                  disabled={row.roleId === 1}
                  color="error"
                  onClick={() => handleDeleteUser(row.id)}
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
      <ModalUpdateUser
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        value={value}
      ></ModalUpdateUser>
    </TableContainer>
  );
}
