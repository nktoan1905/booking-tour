import React from "react";
import { Outlet } from "react-router-dom";

const OrderAdminFeature = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default OrderAdminFeature;
