import React from "react";
import { Routes, Route } from "react-router-dom";
import Hompage from "../container/HomePage/Hompage";
const Home = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default Home;
