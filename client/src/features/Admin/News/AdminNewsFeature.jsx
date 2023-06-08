import React from "react";
import { Outlet } from "react-router-dom";

const AdminNewsFeature = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AdminNewsFeature;
