import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tourApi from "../../../../../api/tourApi";
import { useSelector } from "react-redux";
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
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TableHead,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TourOrderDetail = () => {
  const { departureDayId } = useParams();

  const [tourOrderDetail, setTourOrderDetail] = useState({});
  const [transactions, setTransactions] = useState([]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const currentUser = useSelector((state) => state.auth.login.currentUser.user);
  useEffect(() => {
    const fetchData = async (departureDayId, accessToken) => {
      const res = await tourApi.getAllTransactionsByDepartureDayId(
        departureDayId,
        accessToken
      );
      setTourOrderDetail(res.data.transactions);
      setTransactions(res.data.transactions.transactions);
    };
    if (currentUserAccessToken && departureDayId) {
      fetchData(departureDayId, currentUserAccessToken);
    }
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const [transactionId, setTransactionId] = useState("");
  const handleOpen = (transactionId, status) => {
    setOpen(true);
    setTransactionId(transactionId);
    setStatus(status);
  };
  const handleClose = () => setOpen(false);

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleOnClickUpdateStatusTransaction = async () => {
    try {
      await tourApi.updateStatusTransaction(
        transactionId,
        { status: status },
        currentUserAccessToken
      );
      toast.success("Update thành công");
      setStatus("");
      setTransactionId("");
      const res = await tourApi.getAllTransactionsByDepartureDayId(
        departureDayId,
        currentUserAccessToken
      );
      setTourOrderDetail(res.data.transactions);
      setTransactions(res.data.transactions.transactions);
      handleClose();
    } catch (error) {
      toast.error("Update Failed");
    }
  };
  return (
    <Container fluid>
      <Row className="my-3">
        <Col>
          <div className="fs-2 fw-bold">Danh sách order</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">
                    Địa chỉ email tài khoản đặt
                  </TableCell>
                  <TableCell align="center">Họ và tên liên hệ</TableCell>
                  <TableCell align="center">Số điện thoại liên hệ</TableCell>
                  <TableCell align="center">Email liên hệ</TableCell>
                  <TableCell>Địa chỉ liên hệ</TableCell>
                  <TableCell align="center">Số người lớn</TableCell>
                  <TableCell align="center">Số trẻ em</TableCell>
                  <TableCell align="center">Số em bé</TableCell>
                  <TableCell align="center">Số tiền đã thanh toán</TableCell>
                  <TableCell align="center">Mã giao dịch</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell>Ngày đặt</TableCell>
                  {currentUser.roleId === 1 ? (
                    <TableCell align="center">Action</TableCell>
                  ) : (
                    ""
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? transactions.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : tourOrderDetail.transactions
                ).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index}</TableCell>
                    <TableCell>{row.User.email}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell align="center">{row.phoneNumber}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell align="center">{row.adultQty}</TableCell>
                    <TableCell align="center">{row.childQty}</TableCell>
                    <TableCell align="center">{row.babyQty}</TableCell>
                    <TableCell align="center">{`$ ${row.amountPaid}`}</TableCell>
                    <TableCell align="center">{row.paymentInfo}</TableCell>
                    <TableCell align="center">
                      {row.status ? "Accepted" : "Cancel"}
                    </TableCell>
                    <TableCell>{moment(row.createdAt).format("L")}</TableCell>
                    {currentUser.roleId === 1 ? (
                      <TableCell>
                        <Button
                          variant="contained"
                          onClick={() => handleOpen(row.id, row.status)}
                        >
                          Action
                        </Button>
                      </TableCell>
                    ) : (
                      ""
                    )}
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={12}></TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={12}
                    count={transactions.length}
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
          </TableContainer>
        </Col>
      </Row>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
          >
            Update Status
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Accepted</MenuItem>
                  <MenuItem value={0}>Cancel</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              fullWidth
              className="my-3"
              onClick={handleOnClickUpdateStatusTransaction}
            >
              Update
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default TourOrderDetail;
