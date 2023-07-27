import React, { useEffect, useState } from "react";
import userApi from "../../../api/userApi";
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
  Rating,
  Select,
  TableHead,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import "./style.css";
import { useForm } from "react-hook-form";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
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

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const FeedbackAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  useEffect(() => {
    const fetch = async () => {
      const res = await userApi.getAllFeedback(currentUserAccessToken);
      setFeedbacks(res.data.data);
    };
    fetch();
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - feedbacks.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const [currentData, setCurrentData] = useState({});
  const handleOpen = (value) => {
    setOpen(true);
    setCurrentData(value);
  };
  const handleClose = () => setOpen(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    try {
      await userApi.updateFeedBack(
        data,
        currentUserAccessToken,
        currentData.id
      );
      const res = await userApi.getAllFeedback(currentUserAccessToken);
      setFeedbacks(res.data.data);
      toast.success("Update thành công");
      handleClose();
    } catch (error) {
      toast.error("Update thất bại");
      handleClose();
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Thông tin tour</TableCell>
            <TableCell>Thông tin người Feeback</TableCell>
            <TableCell>Nội dung Feedback</TableCell>
            <TableCell>Star</TableCell>
            <TableCell>Loadhome</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? feedbacks.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : feedbacks
          ).map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">
                <div className="tour-info">
                  <img src={row.Tour.thumbnail} alt={row.Tour.thumbnailName} />
                  <span className="ms-3">{row.Tour.name}</span>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="user-info">
                  <img
                    src={
                      row.User.avatar
                        ? row.User.avatar
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    className=""
                  />
                  <span className="userName ms-3">{row.User.fullName}</span>
                </div>
              </TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>
                <Rating value={row.star} readOnly></Rating>
              </TableCell>
              <TableCell>{row.loadhome ? "Active" : "Inactive"}</TableCell>
              <TableCell>{row.status ? "Active" : "Inactive"}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleOpen(row)}>
                  Update
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
              colSpan={3}
              count={feedbacks.length}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update User Feedback
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <FormControl fullWidth className="mt-3">
              <InputLabel id="status">Load home</InputLabel>
              <Select
                fullWidth
                label="Status"
                labelId="Load home"
                name="loadhome"
                defaultValue={currentData?.loadhome ? 1 : 0}
                error={!!errors["loadhome"]}
                helpertext={
                  errors["loadhome"] ? errors["loadhome"].message : ""
                }
                {...register("loadhome")}
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="mt-3">
              <InputLabel id="status">Status</InputLabel>
              <Select
                fullWidth
                label="Status"
                labelId="status"
                name="status"
                defaultValue={currentData?.status}
                error={!!errors["status"]}
                helpertext={errors["status"] ? errors["status"].message : ""}
                {...register("status")}
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" className="mt-3">
              Update
            </Button>
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default FeedbackAdmin;
