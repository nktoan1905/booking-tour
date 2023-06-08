import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const AdminContactFeature = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AdminContactFeature;
