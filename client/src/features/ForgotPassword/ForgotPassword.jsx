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
import { resetPasswordUser } from "../../redux/apiRequest/authApiRequest";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const theme = createTheme();
const ForgotPassword = () => {
  useEffect(() => {
    document.title = "Quên mật khẩu";
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

    if (email === "") {
      setEmailError({ status: true, message: "Please enter your email" });
    } else {
      await resetPasswordUser(dispatch, navigate, toast, email);
      setEmailError({ status: false, message: "" });
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
          Quên mật khẩu
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            error={emailError.status}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nhập Email bạn đã đăng ký"
            name="email"
            autoComplete="email"
            helperText={emailError.message}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Gửi
          </Button>
          <Grid container>
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

export default ForgotPassword;
