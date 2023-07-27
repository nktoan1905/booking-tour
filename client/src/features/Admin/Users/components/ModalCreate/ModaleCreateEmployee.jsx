import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { DatePicker } from "@mui/x-date-pickers";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewEmloyee } from "../../../../../redux/api/userApiHandler";

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required"),
    fullName: yup.string().required("Full name ís required"),
    phoneNumber: yup.string().required("Phone number is required"),
    address: yup.string().required("Addres is required"),
    gender: yup.bool().required("abc"),
  })
  .required();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalCreateEmloyee = ({ open, handleClose, handleOpen }) => {
  const [dob, setDob] = useState(null);
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    const newEmployee = {
      ...data,
      dob: dayjs(dob).format("DD-MM-YYYY"),
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
    await createNewEmloyee(
      dispatch,
      newEmployee,
      toast,
      currentUserAccessToken
    );
    handleClose();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      setDob(null);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <React.Fragment>
      <Button
        className="mb-3"
        endIcon={<AddIcon></AddIcon>}
        onClick={handleOpen}
        variant="outlined"
      >
        Create new employee
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Create new employee
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 2 }}
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <Container className="mt-5 mb-5">
              <Row>
                <Col md={6}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Địa chỉ email"
                    name="email"
                    error={!!errors["email"]}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    {...register("email")}
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Mật khẩu"
                    name="password"
                    type="password"
                    error={!!errors["password"]}
                    helperText={
                      errors["password"] ? errors["password"].message : ""
                    }
                    {...register("password")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Họ và tên"
                    name="fullName"
                    error={!!errors["fullName"]}
                    helperText={
                      errors["fullName"] ? errors["fullName"].message : ""
                    }
                    {...register("fullName")}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col md={5} className="d-flex align-items-center">
                  <DatePicker
                    label="Ngày tháng năm sinh"
                    format="DD/MM/YYYY"
                    name="dob"
                    value={dob}
                    onChange={(newValue) => setDob(newValue)}
                  ></DatePicker>
                </Col>
                <Col md={3} className="d-flex align-items-center">
                  <FormControl fullWidth>
                    <InputLabel id="gender">Giới tính</InputLabel>
                    <Select
                      fullWidth
                      label="Giới tính"
                      labelId="gender"
                      name="gender"
                      defaultValue={true}
                      error={!!errors["gender"]}
                      helperText={
                        errors["gender"] ? errors["gender"].message : ""
                      }
                      {...register("gender")}
                    >
                      <MenuItem value={true}>Nam</MenuItem>
                      <MenuItem value={false}>Nữ</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col sm={8}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Số điện thoại"
                    name="phoneNumber"
                    error={!!errors["phoneNumber"]}
                    helperText={
                      errors["phoneNumber"] ? errors["phoneNumber"].message : ""
                    }
                    {...register("phoneNumber")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Địa chỉ"
                    name="address"
                    error={!!errors["address"]}
                    helperText={
                      errors["address"] ? errors["address"].message : ""
                    }
                    {...register("address")}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button type="submit" variant="contained">
                    Create
                  </Button>
                </Col>
              </Row>
            </Container>
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ModalCreateEmloyee;
