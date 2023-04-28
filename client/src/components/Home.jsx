import React from "react";
import { Routes, Route } from "react-router-dom";
import Hompage from "../container/HomePage/Hompage";
import Login from "../container/Login/Login";
import Register from "../container/Register/Register";
const Home = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default Home;
