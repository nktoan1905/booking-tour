// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link as Linkrt } from "react-router-dom";
import { Link } from "react-scroll";
import { Menu, Dropdown, Drawer, message, Badge, Avatar } from "antd";
import logo from "./../../../../assets/your-logo.png";
import "./style.css";
const Header = () => {
  const [user, setUser] = useState({ role: "admin" });
  const checkthongbao = 0;
  const phanquyen = () => {
    var check = user.role;
    if (check) {
      if (check === "user") {
        return false;
      } else {
        return true;
      }
    }
  };
  const showDrawer = () => {
    if (user) {
      setUser({
        ...user,
        visible: true,
      });
    } else {
      message.error("Bạn cần phải đăng nhập trước!");
    }
  };
  const logout = () => {};
  const ss = (
    <Menu>
      {!user && (
        <Menu.Item key="0">
          <Linkrt to="/dangnhap">Đăng nhập</Linkrt>
        </Menu.Item>
      )}
      <Menu.Item key="2">
        <span onClick={showDrawer}>Xem thông tin</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Linkrt to="/thongtin/0">Xem lịch sử</Linkrt>
      </Menu.Item>
      {user ? (
        phanquyen() ? (
          <Menu.Item key="3">
            <Linkrt to="/admin" className="nav-link">
              Quản lý admin
            </Linkrt>
          </Menu.Item>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <Menu.Divider />
      {user && (
        <Menu.Item key="1">
          <span onClick={logout}>Đăng xuất</span>
        </Menu.Item>
      )}
    </Menu>
  );
  const dropdownItem = (
    <Menu>
      <Menu.Item key="1">
        <Linkrt>Tin mới</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt>Tin mới</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt>Cẩm nang du lịch</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt>Kinh nghiệm du lịch</Linkrt>
      </Menu.Item>
    </Menu>
  );
  return (
    <div id="menu">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <Linkrt className="navbar-brand" to="/">
          <img alt="logo" src={logo} className="img-logo" />
        </Linkrt>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link
                className="nav-link"
                activeclassName="active"
                to="banner"
                spy={"true"}
                smooth={"true"}
                offset={-70}
                duration={500}
              >
                Trang chủ<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeclassName="active"
                to="tour"
                spy={"true"}
                smooth={"true"}
                offset={-70}
                duration={500}
              >
                Du lịch
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                activeclassName="active"
                to="dichvu"
                spy={"true"}
                smooth={"true"}
                offset={-70}
                duration={500}
              >
                Dịch vụ
              </Link>
            </li> */}
            <li className="nav-item">
              <Dropdown overlay={dropdownItem} trigger={["click"]}>
                <Link
                  className="nav-link"
                  activeclassName="active"
                  to="news"
                  spy={"true"}
                  smooth={"true"}
                  offset={-70}
                  duration={500}
                >
                  Tin tức
                </Link>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeclassName="active"
                to="news"
                spy={"true"}
                smooth={"true"}
                offset={-70}
                duration={500}
              >
                Liên hệ
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Dropdown overlay={ss} trigger={["click"]}>
                <span className="nav-link">
                  <Avatar
                    size="small"
                    src={
                      "https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg"
                    }
                  ></Avatar>
                </span>
              </Dropdown>
            </li>
          </ul>
          {/* <Dropdown trigger={["click"]}>
            {checkthongbao === 0 ? (
              <Badge>
                <i className="fas fa-bell"></i>
              </Badge>
            ) : (
              <Badge dot>
                <i className="fas fa-bell"></i>
              </Badge>
            )}
          </Dropdown> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
