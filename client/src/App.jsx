import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import CommonLayout from "./components/Layout/CommonLayout";
import HomePage from "./features/HomePage/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import ProfileFeature from "./features/Profile/ProfileFeature";
import ProfileDetail from "./features/Profile/page/ProfileDetail/ProfileDetail";
import ProfileEdit from "./features/Profile/page/ProfileEdit/ProfileEdit";
import AuthFeature from "./features/Auth/AuthFeature";
import Register from "./features/Auth/page/Register/Register";
import ResetPassword from "./features/Auth/page/ResetPassword/ResetPassword";
import Login from "./features/Auth/page/Login/Login";
import Error from "./features/Error/Error";
import AdminLayout from "./components/Layout/AdminLayout";
import UsersFeature from "./features/Admin/Users/UsersFeature";
import ListUsers from "./features/Admin/Users/page/ListUsers/ListUsers";
import ContactFeature from "./features/Contact/ContactFeature";
import { useDispatch } from "react-redux";
import { getAllContactType } from "./redux/api/contactApiHandler";
import AdminContactFeature from "./features/Admin/Contact/AdminContactFeature";
import ListContacts from "./features/Admin/Contact/page/ListContact/ListContacts";
import { getAllNews, getAllNewsCategories } from "./redux/api/newsApiHandler";
import NewsFeature from "./features/News/NewsFeature";
import AdminNewsFeature from "./features/Admin/News/AdminNewsFeature";
import AdminListNews from "./features/Admin/News/page/AdminListNews";
import AddNews from "./features/Admin/News/page/AddNews";
import EditNews from "./features/Admin/News/page/EditNews";
import DetailNews from "./features/Admin/News/page/DetailNews";
import ListNewsPage from "./features/News/page/ListNewsPage";
import NewsDetailPage from "./features/News/page/NewsDetailPage";
import AdminTourFeature from "./features/Admin/Tours/page/AdminTourFeature";
import InfoManager from "./features/Admin/Tours/page/InfoManger/InfoManager";
import { getAllCategories } from "./redux/api/categoryApiHandler";
import {
  getAllCites,
  getAllCountries,
} from "./redux/api/cityAndCountryApiHandler";
import {
  getAllDepartureDay,
  getAllDepartureDaysAndTours,
} from "./redux/api/departureDayApiHandler";
import { getAllPromotions } from "./redux/api/promotionApiHandler";
import { getAllServices } from "./redux/api/serviceApiHandler";
import DashboardPage from "./features/Admin/Dashboard/DashboardPage";
import AddTour from "./features/Admin/Tours/page/AddTour/AddTour";
import { getAllTours } from "./redux/api/tourApiHandler";
import ToursDetail from "./features/Admin/Tours/page/TourDetail/ToursDetail";
import EditTour from "./features/Admin/Tours/page/EditTour/EditTour";
import ToursFeature from "./features/Tours/ToursFeature";
import SearchTourPage from "./features/Tours/pages/SearchTour/SearchTourPage";
import DetailTourPage from "./features/Tours/pages/DetailTour/DetailTourPage";
import AddInfo from "./features/Admin/Tours/page/AddInfo/AddInfo";
import Success from "./features/Paymemt/Success/Success";
import Cancel from "./features/Paymemt/Cancel/Cancel";
import BookingTour from "./features/Tours/pages/BookingTour/BookingTour";
import Payment from "./components/Payment/Payment";
import { Order } from "./features/Profile/page/Orders/Order";
import FeedbackAdmin from "./features/Admin/Feedbacks/FeedbackAdmin";
import OrderAdminFeature from "./features/Admin/Orders/OrderAdminFeature";
import ListTourOrder from "./features/Admin/Orders/page/ListTourOrder/ListTour";
import TourOrderDetail from "./features/Admin/Orders/page/TourOrderDetail/TourOrderDetail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await getAllContactType(dispatch);
      await getAllNews(dispatch);
      await getAllNewsCategories(dispatch);
      await getAllCategories(dispatch);
      await getAllCites(dispatch);
      await getAllCountries(dispatch);
      await getAllDepartureDay(dispatch);
      await getAllDepartureDaysAndTours(dispatch);
      await getAllPromotions(dispatch);
      await getAllServices(dispatch);
      await getAllTours(dispatch);
    };
    fetchData();
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth" element={<AuthFeature />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="reset-password" element={<ResetPassword />}></Route>
        </Route>
        <Route
          element={<PrivateRoute isAdmin={false} redirectPath="/auth/login" />}
        >
          <Route
            path="/me"
            element={
              <CommonLayout>
                <ProfileFeature />
              </CommonLayout>
            }
          >
            <Route path="profile" index element={<ProfileDetail />}></Route>
            <Route path="profile/update" element={<ProfileEdit />}></Route>
            <Route path="order" element={<Order />}></Route>
          </Route>
        </Route>
        <Route path="/contact" element={<ContactFeature />}></Route>
        <Route path="/news" element={<NewsFeature></NewsFeature>}>
          <Route path=":newsCategoryId" element={<ListNewsPage />} />
          <Route path=":newsCategoryId/:newsId" element={<NewsDetailPage />} />
        </Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
        <Route path="/tours" element={<ToursFeature />}>
          <Route
            path="search/:startPlaceId/:endPlaceId/:date/:duration/:inCountry"
            element={<SearchTourPage />}
          ></Route>

          <Route path=":tourId" element={<DetailTourPage />}></Route>
          <Route path=":tourId/booking" element={<BookingTour />}></Route>
          <Route path="checkout" element={<Payment />}></Route>
        </Route>
        // admin
        <Route
          element={<PrivateRoute isAdmin={true} redirectPath="/not-found" />}
        >
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />}></Route>
            <Route path="users" element={<UsersFeature />}>
              <Route index element={<ListUsers></ListUsers>}></Route>
            </Route>
            <Route path="contacts" element={<AdminContactFeature />}>
              <Route index element={<ListContacts></ListContacts>}></Route>
            </Route>
            <Route path="news" element={<AdminNewsFeature />}>
              <Route index element={<AdminListNews />}></Route>
              <Route path=":newsId" element={<DetailNews></DetailNews>}></Route>
              <Route path="add" element={<AddNews />}></Route>
              <Route path="edit/:newsId" element={<EditNews />}></Route>
            </Route>
            <Route path="tours" element={<AdminTourFeature></AdminTourFeature>}>
              <Route index element={<InfoManager></InfoManager>}></Route>
              <Route
                path=":tourId"
                element={<ToursDetail></ToursDetail>}
              ></Route>
              <Route
                path=":tourId/edit"
                element={<EditTour></EditTour>}
              ></Route>
              <Route
                path=":tourId/add-info"
                element={<AddInfo></AddInfo>}
              ></Route>

              <Route path="add" element={<AddTour />}></Route>
            </Route>
            <Route
              path="orders"
              element={<OrderAdminFeature></OrderAdminFeature>}
            >
              <Route index element={<ListTourOrder />} />
              <Route path=":depatureDayId" element={<TourOrderDetail />} />
            </Route>
            <Route path="feedbacks" element={<FeedbackAdmin />}></Route>
          </Route>
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
