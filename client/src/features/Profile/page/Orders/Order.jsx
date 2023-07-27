import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userApi from "../../../../api/userApi";
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
  Modal,
  Rating,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import { Col, Container, Row, Toast } from "react-bootstrap";
import DrawIcon from "@mui/icons-material/Draw";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
export const Order = () => {
  useEffect(() => {
    document.tilte = "Your orders";
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (tourId) => {
    setOpen(true);
    setTour(tourId);
  };
  const handleClose = () => setOpen(false);

  const [ordered, setOrdered] = useState([]);
  const [tour, setTour] = useState();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await userApi.getUserOrder(currentUserAccessToken);
      setOrdered(res.data.transactions);
    };
    fetchData();
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordered.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      rating: 0,
      content: "",
    },
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      await userApi.createFeedback(
        tour,
        {
          star: data.rating,
          content: data.content,
        },
        currentUserAccessToken
      );
      toast.success("Tạo feedback thành công");
      reset;
      handleClose();
    } catch (error) {
      toast.error("Tạo feedback lỗi");
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <Container
      fluid
      style={{
        minHeight: "75vh",
      }}
    >
      <Row>
        <Col>
          <div className="title fs-2">Order của bạn</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Hình ảnh</TableCell>
                  <TableCell align="center">Tên tour</TableCell>
                  <TableCell align="center">Tên người đặt</TableCell>
                  <TableCell align="center">Địa chi email liên hệ</TableCell>
                  <TableCell align="center">Số điện thoại liên hệ</TableCell>
                  <TableCell align="center">Địa chỉ liên hệ</TableCell>
                  <TableCell align="center">Số người lớn</TableCell>
                  <TableCell align="center">Số trẻ em</TableCell>
                  <TableCell align="center">Số em bé</TableCell>
                  <TableCell align="center">Số tiền đã thanh toán</TableCell>
                  <TableCell align="center">Ngày đi</TableCell>
                  <TableCell align="center">Địa chỉ khởi hành</TableCell>
                  <TableCell align="center">Feedback</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? ordered.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : ordered
                ).map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{index}</TableCell>
                    <TableCell>
                      <img
                        src={row.TourDepartureDay.tourInfo.thumbnail}
                        style={{ width: "100px", height: "100px" }}
                        className="rounded"
                        alt={row.TourDepartureDay.tourInfo.thumbnailNail}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ width: "200px" }}>
                      {row.TourDepartureDay.tourInfo.name}
                    </TableCell>
                    <TableCell align="center">{row.fullName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phoneNumber}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.adultQty}</TableCell>
                    <TableCell align="center">{row.childQty}</TableCell>
                    <TableCell align="center">{row.babyQty}</TableCell>
                    <TableCell align="center">$ {row.amountPaid}</TableCell>
                    <TableCell align="center">
                      {
                        departureDays.find(
                          (item) => item.id === row.TourDepartureDay.dayStartId
                        ).dayStart
                      }
                    </TableCell>
                    <TableCell align="center">
                      {row.TourDepartureDay.startPlace}
                    </TableCell>
                    <TableCell>
                      {moment(
                        departureDays.find(
                          (item) => item.id === row.TourDepartureDay.dayStartId
                        ).dayStart
                      ).isBefore(new Date()) && row.status !== false ? (
                        <Button
                          variant="contained"
                          endIcon={<DrawIcon />}
                          onClick={() =>
                            handleOpen(row.TourDepartureDay.tourId)
                          }
                        >
                          Viết feedback
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          endIcon={<DrawIcon />}
                          disabled
                        >
                          Viết feedback
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {row.status ? "Accepted" : "Cancel"}
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={13}>Bạn chưa đặt tour</TableCell>
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
                    colSpan={13}
                    count={ordered.length}
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
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Viết cảm nghĩ của mình về trải nghiệm của bạn trong những ngày qua
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <Rating
                  name={field.name}
                  value={Number(field.value)}
                  onChange={field.onChange}
                  defaultValue={0}
                />
              )}
            />
            <Controller
              name="content"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Đánh giá của người dùng"
                  variant="filled"
                  fullWidth
                  className="my-4"
                />
              )}
            />
            <Button variant="contained" type="submit">
              Post đánh giá
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};
