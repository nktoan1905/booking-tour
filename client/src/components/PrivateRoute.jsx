import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAdmin = false, redirectPath = "/auth/login" }) => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  } else if (
    isAdmin &&
    (currentUser?.user.roleId !== 1 && currentUser?.user.roleId !== 2)
  ) {
    return <Navigate to={redirectPath} replace />;
  } else {

    return <Outlet />;
  }
};

export default PrivateRoute;
