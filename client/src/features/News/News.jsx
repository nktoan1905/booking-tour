import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getAllNews } from "../../redux/apiRequest/newsApiRequest";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const News = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default News;
