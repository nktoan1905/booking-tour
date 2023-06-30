import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AdminTourFeature = () => {
  useEffect(() => {
    document.title = "Tour manager";
  }, []);
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AdminTourFeature;
