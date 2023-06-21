import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../../../redux/api/userApiHandler";
import { toast } from "react-toastify";
const ProfileEdit = () => {
  const dataCurrent = useSelector((state) => state.auth.login.currentUser);
  const dataUser = dataCurrent.user;
  const [sex, setSex] = useState(dataUser?.gender);
  const [dob, setDob] = useState(dataUser?.dob);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSex(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      fullName: data.get("fullName"),
      address: data.get("address"),
      phoneNumber: data.get("phoneNumber"),
      gender: sex,
      dob: dob,
    };
    await updateUserProfile(
      dispatch,
      dataCurrent.accessToken,
      navigate,
      toast,
      newData
    );
  };
  return (
    <div className="container mt-5" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-sm-10 ">
          <h1>Cập nhật thông tin người dùng</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="text-center">
            <img
              src={dataUser.avatar}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input
              type="file"
              className="text-center center-block file-upload"
              disabled
            />
          </div>
          <hr />
          <br />
        </div>
        <div className="col-sm-9">
          <div className="row">
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Họ và tên khách hàng"
                    autoFocus
                    defaultValue={dataUser?.fullName}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    disabled
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    defaultValue={dataUser?.email}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Địa chỉ"
                    type="text"
                    id="address"
                    defaultValue={dataUser?.address}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Số điện thoại"
                    type="text"
                    id="phoneNumber"
                    defaultValue={dataUser?.phoneNumber}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="sex">Giới tính</InputLabel>
                    <Select
                      labelId="sex"
                      name="sex"
                      id="sex"
                      defaultValue={sex}
                      onChange={handleChange}
                      fullWidth
                      label="abc"
                    >
                      <MenuItem value={1}>Nam</MenuItem>
                      <MenuItem value={0}>Nữ</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <DatePicker
                    label="Ngày tháng năm sinh"
                    defaultValue={dayjs(dob)}
                    name="dob"
                    id="dob"
                    onChange={(newValue) => setDob(newValue)}
                    format="DD/MM/YYYY"
                  ></DatePicker>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 3 }}
                >
                  Cập nhật
                </Button>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 3 }}
                  onClick={() => navigate("/me/profile")}
                >
                  Quay lại
                </Button>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
