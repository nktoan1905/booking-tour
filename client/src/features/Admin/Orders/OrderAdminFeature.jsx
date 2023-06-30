import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const OrderAdminFeature = () => {
  useEffect(() => {
    document.title = "Order manager";
  }, []);
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default OrderAdminFeature;
