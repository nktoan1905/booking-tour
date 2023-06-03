import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getAllAdmins, getAllEmployees, getAllUsers } from "../../../redux/api/userApiHandler";

const UsersFeature = () => {
  useEffect(() => {
    document.title = "User Manager";
  }, []);

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default UsersFeature;
