import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css";
import Banner from "./component/Banner/Banner";
import FeedBack from "./component/FeedBack/FeedBack";
import FavoriteDestination from "./component/FavoriteDestination/FavoriteDestination";
import ServiceProvide from "./component/ServiceProvide/ServiceProvide";
import TourInContry from "./component/TourInCountry/TourInCountry";
import TourInOutCountry from "./component/TourInOurCountry/TourInOurCountry";
import TravelGuilde from "./component/TravelGuide/TravelGuilde";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllNews } from "../../redux/apiRequest/newsApiRequest";
const HomePage = () => {
  useEffect(()=>{
    document.title = "Trang chủ"
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getAllNews(dispatch, navigate, toast);
  }, []);
  return (
    <React.Fragment>
      <Header></Header>
      <Banner></Banner>
      <FavoriteDestination></FavoriteDestination>
      <TourInContry></TourInContry>
      <TourInOutCountry></TourInOutCountry>
      <ServiceProvide></ServiceProvide>
      <TravelGuilde></TravelGuilde>
      <FeedBack></FeedBack>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default HomePage;
