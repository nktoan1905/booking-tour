// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "./components/Footer/Footer";
import FeedBack from "./components/FeedBack/FeedBack";
import Banner from "./components/Banner/Banner";
import TravelGuilde from "./components/TravelGuilde/TravelGuilde";
import FavoriteDestination from "./components/FavoriteDestination/FavoriteDestination";
import ServiceProvide from "./components/ServiceProvide/ServiceProvide";
import Header from "./components/Header/Header";
import TourInContry from "./components/TourInCountry/TourInContry";
import TourInOutCountry from "./components/TourInOurCountry/TourInOurCountry";

const Hompage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Banner></Banner>
      <FavoriteDestination></FavoriteDestination>
      <TourInContry></TourInContry>
      <TourInOutCountry></TourInOutCountry>
      <TravelGuilde></TravelGuilde>
      <ServiceProvide></ServiceProvide>
      <FeedBack></FeedBack>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Hompage;
