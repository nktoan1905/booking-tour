import React from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import { Outlet } from "react-router-dom";
const AuthFeature = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export default AuthFeature;
