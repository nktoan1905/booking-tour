import React from "react";
import { Outlet } from "react-router-dom";

const ProfileFeature = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ProfileFeature;
