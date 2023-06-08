import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const AdminContactFeature = () => {
  useEffect(() => {
    document.title = "Contacts Manager";
  }, []);
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AdminContactFeature;
