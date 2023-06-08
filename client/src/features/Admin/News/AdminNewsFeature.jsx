import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AdminNewsFeature = () => {
  useEffect(() => {
    document.title = "News Manager";
  }, []);
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AdminNewsFeature;
