import React, { useEffect } from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import Banner from "./components/Banner/Banner";
import FavoriteDestination from "./components/FavoriteDestination/FavoriteDestination";
import FeedBack from "./components/FeedBack/FeedBack";
import ServiceProvide from "./components/ServiceProvide/ServiceProvide";
import TravelGuilde from "./components/TravelGuide/TravelGuilde";
import SearchTourForm from "../../components/SearchTourForm/SearchTourForm";
import TourInCountry from "./components/TourInCountry/TourInCountry";
import { useDispatch } from "react-redux";
import { getAllContactType } from "../../redux/api/contactApiHandler";
import { getAllNews, getAllNewsCategories } from "../../redux/api/newsApiHandler";
import { getAllCites, getAllCountries } from "../../redux/api/cityAndCountryApiHandler";
import { getAllDepartureDay, getAllDepartureDaysAndTours } from "../../redux/api/departureDayApiHandler";
import { getAllPromotions } from "../../redux/api/promotionApiHandler";
import { getAllServices } from "../../redux/api/serviceApiHandler";
import { getAllTours } from "../../redux/api/tourApiHandler";
import TourOurCountry from "./components/TourOurCountry/TourOurCountry";

const HomePage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getAllContactType(dispatch);
  //   getAllNews(dispatch);
  //   getAllNewsCategories(dispatch);
  //   getAllCites(dispatch);
  //   getAllCountries(dispatch);
  //   getAllDepartureDay(dispatch);
  //   getAllDepartureDaysAndTours(dispatch);
  //   getAllPromotions(dispatch);
  //   getAllServices(dispatch);
  //   getAllTours(dispatch);
  // }, []);
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <CommonLayout>
      <Banner></Banner>
      <SearchTourForm></SearchTourForm>
      {/* <FavoriteDestination></FavoriteDestination> */}
      <TourInCountry></TourInCountry>
      <TourOurCountry></TourOurCountry>
      <ServiceProvide></ServiceProvide>
      <TravelGuilde></TravelGuilde>
      {/* <FeedBack></FeedBack> */}
    </CommonLayout>
  );
};

export default HomePage;
