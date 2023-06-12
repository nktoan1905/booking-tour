import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./adminStyle.css";
import {
  getAllAdmins,
  getAllEmployees,
  getAllUsers,
} from "../../redux/api/userApiHandler";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/api/authApiHandler";
import { toast } from "react-toastify";
import { getAllContactType, getAllContacts } from "../../redux/api/contactApiHandler";
import { getAllNews, getAllNewsCategories } from "../../redux/api/newsApiHandler";
const AdminLayout = () => {
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.roleId === 1) {
      getAllAdmins(dispatch, currentUserAccessToken);
      getAllEmployees(dispatch, currentUserAccessToken);
      getAllUsers(dispatch, currentUserAccessToken);
    }
    getAllContactType(dispatch);
    getAllNews(dispatch);
    getAllNewsCategories(dispatch);
    getAllContacts(dispatch, currentUserAccessToken);
  }, []);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOnClickOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleOnClickLogout = async () => {
    await logoutUser(currentUserAccessToken, dispatch, navigate, toast);
  };
  const menuSideBar = [
    {
      id: 1,
      name: "Dashboard",
      link: "/admin/",
      icon: "fas fa-user-secret",
      roleAllowed: [1, 2],
    },
    {
      id: 2,
      name: "Users",
      link: "/admin/users",
      icon: "fa-regular fa-user",
      roleAllowed: [1],
    },
    {
      id: 3,
      name: "Contacts",
      link: "/admin/contacts",
      icon: "fa-solid fa-phone",
      roleAllowed: [1, 2],
    },
    {
      id: 4,
      name: "News",
      link: "/admin/news",
      icon: "fa-solid fa-newspaper",
      roleAllowed: [1, 2],
    },
    {
      id: 5,
      name: "Tours",
      link: "/admin/tours",
      icon: "fa-solid fa-tent",
      roleAllowed: [1, 2],
    },
  ];

  return (
    <div className={`d-flex ${isOpenMenu ? "toggled" : ""}`} id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div
          className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom "
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <i className="fas fa-user-secret me-2"></i>
          Travel
        </div>
        <div className="list-group list-group-flush my-3">
          {menuSideBar.map((ok) => {
            if (ok.roleAllowed.includes(currentUser.roleId)) {
              return (
                <NavLink
                  key={ok.id}
                  to={ok.link}
                  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i className={`${ok.icon} me-2`}></i> {ok.name}
                </NavLink>
              );
            } else return "";
          })}
          <NavLink
            to="/auth/logout"
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <i className="fas fa-power-off me-2"></i>Logout
          </NavLink>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
              onClick={handleOnClickOpenMenu}
            ></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle second-text fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-2"></i>
                  {currentUser.fullName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/admin/me/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleOnClickLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
