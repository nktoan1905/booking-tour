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
import authApi from "../../axios/authApi";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest/authApiRequest";
import { toast } from "react-toastify";

const theme = createTheme();
const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  });
  const [passowrdError, setPasswordError] = useState({
    status: false,
    message: "",
  });
  const [emailError, setEmailError] = useState({
    status: false,
    message: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const passowrd = data.get("password");
    if (email === "") {
      setEmailError({ status: true, message: "Email is required" });
    } else {
      setEmailError({ status: false, message: "" });
    }
    if (passowrd === "") {
      setPasswordError({ status: true, message: "Password is required" });
    } else {
      setPasswordError({ status: false, message: "" });
    }
    if (passowrdError.status === false && emailError.status === false) {
      await loginUser(
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        dispatch,
        navigate,
        toast
      );
      setPasswordError({ status: false, message: "" });
    }
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            error={emailError.status}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Địa chỉ email"
            name="email"
            autoComplete="email"
            helperText={emailError.message}
            autoFocus
          />
          <TextField
            margin="normal"
            error={passowrdError.status}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={passowrdError.message}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/quen-mat-khau" variant="body2">
                Quên mật khẩu
              </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/dang-ky" variant="body2">
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
