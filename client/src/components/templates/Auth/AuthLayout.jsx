// eslint-disable-next-line no-unused-vars
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./style.css";
import { toast } from "react-toastify";

const theme = createTheme();
const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", position: "relative" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/flat-tourists-ready-holiday_23-2149059981.jpg?w=1380&t=st=1684395596~exp=1684396196~hmac=ce2dd444be1be6cbb637968db95294331b99f30bae93bcffe1ce930445613323)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            objectFit: "cover"
          }}
        />
        <Outlet></Outlet>
        <Button
          sx={{
            position: "absolute",
            top: "50px",
            left: "50px",
            border: "none",
            color: "#764ba2"
          }}
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => {
            navigate("/");
          }}
        >
          Trở về trang chủ
        </Button>
      </Grid>
    </ThemeProvider>
  );
};

export default AuthLayout;
