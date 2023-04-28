import React from "react";
import Header from "../container/HomePage/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../container/HomePage/components/Footer/Footer";

const UserLayout = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default UserLayout;
