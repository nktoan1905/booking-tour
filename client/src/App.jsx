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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllContactType(dispatch);
    getAllNews(dispatch);
    getAllNewsCategories(dispatch);
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
            path="/me/profile"
            element={
              <CommonLayout>
                <ProfileFeature />
              </CommonLayout>
            }
          >
            <Route index element={<ProfileDetail />}></Route>
            <Route path="update" element={<ProfileEdit />}></Route>
          </Route>
        </Route>
        <Route path="/contact" element={<ContactFeature />}></Route>

        <Route path="/news" element={<NewsFeature></NewsFeature>}>
          <Route path=":newsCategoryId" element={<ListNewsPage />} />
          <Route path=":newsCategoryId/:newsId" element={<NewsDetailPage />} />
        </Route>
        <Route
          element={<PrivateRoute isAdmin={true} redirectPath="/not-found" />}
        >
          <Route path="/admin" element={<AdminLayout />}>
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
            </Route>
          </Route>
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
