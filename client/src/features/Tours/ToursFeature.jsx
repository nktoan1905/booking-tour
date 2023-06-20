import React from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import { Outlet } from "react-router-dom";

const ToursFeature = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export default ToursFeature;
