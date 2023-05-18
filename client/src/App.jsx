import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/Hompage/HomePage";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import AuthLayout from "./components/templates/Auth/AuthLayout";
import Error from "./features/Error/Error";
import News from "./features/News/News";
import ListNews from "./features/News/page/ListNews/ListNews";
import NewsDetail from "./features/News/page/NewsDetail/NewsDetail";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="dang-nhap" element={<Login />}></Route>
        <Route path="dang-ky" element={<Register />}></Route>
        <Route path="quen-mat-khau" element={<ForgotPassword />}></Route>
      </Route>
      <Route path="/tin-tuc" element={<News />}>
        <Route path=":newCategory" element={<ListNews />} />
        <Route path=":newCategory/:newsId" element={<NewsDetail></NewsDetail>}></Route>
      </Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
