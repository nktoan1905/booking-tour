import { useState } from "react";
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
import AdminErrorPage from "./features/Admin/Error/AdminErrorPage";

function App() {
  const [count, setCount] = useState(0);

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
        <Route path="/news"></Route>

        <Route
          element={<PrivateRoute isAdmin={true} redirectPath="/not-found" />}
        >
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<UsersFeature />}>
              <Route index element={<ListUsers></ListUsers>}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="/not-found" element={<Error />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
