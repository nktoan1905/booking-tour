import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  updateUserPassword,
  updateUserProfile,
} from "../../../../redux/api/userApiHandler";
import "./style.css";
import axios from "axios";
import { getImagePublicId } from "../../../../Helper/StringHelper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "700px",
  bgcolor: "background.paper",
  border: "2px solid #ccc",
  boxShadow: 24,
  p: 4,
};
const schema = yup
  .object({
    oldPassword: yup.string().required("Old password is required"),
    newPassword: yup.string().required("New password is required"),
    newPasswordConfirm: yup
      .string()
      .required("New password confirm is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  })
  .required();

const ProfileDetail = () => {
  const dataUser = useSelector((state) => state.auth.login.currentUser?.user);
  const dataUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  const [sex, setSex] = useState(dataUser?.gender);
  const [dob, setDob] = useState(dataUser?.dob);

  const [image, setImage] = useState(
    dataUser.avatar
      ? dataUser.avatar
      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [imageSelected, setImageSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClickUpdateBtn = () => {
    navigate("/me/profile/update");
  };

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await updateUserPassword(
      dispatch,
      dataUserAccessToken,
      data.newPassword,
      data.oldPassword,
      toast
    );
    handleClose();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  useEffect(() => {
    document.title = "Profile";
  }, []);

  // update avatar
  const uploadImage = async () => {
    var newImageLink;
    if (dataUser.avatar) {
      const publicId = getImagePublicId(dataUser.avatar);
      const cloudName = "dlu4c764b";
      const timestamp = Math.round(new Date().getTime() / 1000);
      const apiKey = "645973345167519";
      const apiSecret = "IrM4EOrDTXOYf6gvMOFREDIqJRY";
      const signature = CryptoJS.SHA1(
        `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
      ).toString();
      const deleteUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
      await axios.post(deleteUrl, {
        public_id: publicId,
        timestamp: timestamp,
        api_key: apiKey,
        signature: signature,
      });
    }
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kifxio8y");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/dlu4c764b/image/upload",
        formData,
        { params: { folder: "avatar" } }
      )
      .then((res) => {
        newImageLink = res.data.url;
        setImage(newImageLink);
      });
    await updateUserProfile(dispatch, dataUserAccessToken, navigate, toast, {
      avatar: newImageLink,
    });
  };
  return (
    <Container className=" mt-5" style={{ height: "100vh" }}>
      <Row>
        <Col sm={10}>
          <h1>Thông tin cá nhân</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <div className="text-center">
            <img
              src={image}
              className="avatar  img-thumbnail img-circle"
              alt="avatar"
            />
            <h6 className="text-break">Upload a different photo...</h6>
            <input
              type="file"
              className="text-center center-block file-upload"
              onChange={(e) => setImageSelected(e.target.files[0])}
            />
            <Button variant="contained" className="mt-3" onClick={uploadImage}>
              Cập nhật ảnh
            </Button>
          </div>
          <hr />
          <br />
          <Button fullWidth variant="contained" onClick={handleOpen}>
            Thay đổi mật khẩu
          </Button>
        </Col>
        <Col sm={9}>
          <Row>
            <Box noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Họ và tên khách hàng"
                    defaultValue={dataUser?.fullName}
                    disabled
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    disabled
                    fullWidth
                    label="Địa chỉ email"
                    defaultValue={dataUser?.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Địa chỉ"
                    defaultValue={dataUser?.address}
                    disabled
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    defaultValue={dataUser?.phoneNumber}
                    disabled
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Select
                    defaultValue={sex}
                    fullWidth
                    disabled
                    label="Giới tính"
                  >
                    <MenuItem value={1}>Nam</MenuItem>
                    <MenuItem value={0}>Nữ</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <DatePicker
                    label="Ngày tháng năm sinh"
                    defaultValue={dayjs(dob)}
                    format="DD/MM/YYYY"
                    disabled
                  ></DatePicker>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleOnClickUpdateBtn}
                endIcon={<ArrowForwardIcon />}
              >
                Cập nhật
              </Button>
            </Box>
          </Row>
        </Col>
      </Row>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title-change-password"
        aria-describedby="model-body-change-password"
      >
        <Box sx={style}>
          <Typography
            id="modal-title-change-password"
            variant="h6"
            component="h2"
          >
            Cập nhật mật khẩu
          </Typography>
          <Typography
            id="model-body-change-password"
            sx={{ mt: 2 }}
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
            noValidate
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="oldPassword"
              label="Nhập mật khẩu cũ"
              name="oldPassword"
              error={!!errors["oldPassword"]}
              helperText={
                errors["oldPassword"] ? errors["oldPassword"].message : ""
              }
              {...register("oldPassword")}
            />
            <TextField
              margin="normal"
              required
              type="password"
              fullWidth
              id="newPassword"
              label="Nhập mật khẩu mới"
              name="newPassword"
              error={!!errors["newPassword"]}
              helperText={
                errors["newPassword"] ? errors["newPassword"].message : ""
              }
              {...register("newPassword")}
            />
            <TextField
              margin="normal"
              required
              type="password"
              fullWidth
              id="newPasswordConfirm"
              label="Xác nhận lại mật khẩu"
              name="newPasswordConfirm"
              error={!!errors["newPasswordConfirm"]}
              helperText={
                errors["newPasswordConfirm"]
                  ? errors["newPasswordConfirm"].message
                  : ""
              }
              {...register("newPasswordConfirm")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cập nhật mẩu khẩu
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default ProfileDetail;
