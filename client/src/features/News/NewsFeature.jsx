import React from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import { Outlet } from "react-router-dom";

const NewsFeature = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export default NewsFeature;
