import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ roleAllow = null, redirectPath = "/auth/login" }) => {
  // const currentUser = useSelector((state) => state.auth.login.currentUser);
  const currentUser = {
    user: {
      roleId: 1,
    },
  };
  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  } 
  return <Outlet />;
};

export default PrivateRoute;
