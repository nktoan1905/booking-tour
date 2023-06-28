// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../../../redux/api/authApiHandler";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../../../redux/api/authApiHandler";

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required"),
  })
  .required();

const theme = createTheme();
const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await loginUser(data, dispatch, navigate, toast);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);


  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      elevation={6}
      square={"true"}
      style={{ height: "65vh" }}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Địa chỉ email"
            name="email"
            autoComplete="email"
            error={!!errors["email"]}
            helperText={
              errors["email"] ? errors["email"].message : ""
            }
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={!!errors["password"]}
            helperText={
              errors["password"] ? errors["password"].message : ""
            }
            {...register("password")}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, alignItems: "center" }}
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                to="/auth/reset-password"
                variant="body2"
                className="text-decoration-none"
              >
                Quên mật khẩu
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/auth/register"
                variant="body2"
                className="text-decoration-none"
              >
                {"Bạn không có tài khoản? Tạo tài khoản mới"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
