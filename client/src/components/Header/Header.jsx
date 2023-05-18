import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Person2Icon from "@mui/icons-material/Person2";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { logOutUser } from "../../redux/apiRequest/authApiRequest";
import { toast } from "react-toastify";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dataUser = useSelector((state) => state.auth.login.currentUser);
  const accessToken = dataUser?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickOpenMenu = () => {
    setIsOpenMenu((current) => !current);
  };
  const dataTravel = [
    {
      id: 12,
      title: "Tour Miền Bắc",
      locationTitle: [
        {
          id: 1,
          title: "Du Lịch Hải Phòng",
          link: "/tour/hai-phong",
        },
        {
          id: 2,
          title: "Du Lịch Hà Nội",
          link: "/tour/ha-noi",
        },
        {
          id: 3,
          title: "Du Lịch Hà Nội",
          link: "/tour/ha-noi",
        },
        {
          id: 4,
          title: "Du Lịch Hà Nội",
          link: "/tour/ha-noi",
        },
        {
          id: 5,
          title: "Du Lịch Hà Nội",
          link: "/tour/ha-noi",
        },
      ],
    },
    {
      id: 22,
      title: "Tour Miền Trung",
      locationTitle: [
        {
          id: 6,
          title: "Du Lịch Huế",
          link: "/tour/hue",
        },
        {
          id: 7,
          title: "Du Lịch Quảng Trị",
          link: "/tour/quang-tri",
        },
        {
          id: 8,
          title: "Du Lịch Quảng Bình",
          link: "/tour/quang-binh",
        },
        {
          id: 9,
          title: "Du Lịch Đà Nẵng",
          link: "/tour/da-nang",
        },
        {
          id: 10,
          title: "Du Lịch Quảng Nam",
          link: "/tour/quang-nam",
        },
      ],
    },
    {
      id: 23,
      title: "Tour Miền Tây Nam Bộ",
      locationTitle: [
        {
          id: 11,
          title: "Du Lịch Phú Quốc",
          link: "/tour/phu-quốc",
        },
        {
          id: 12,
          title: "Du Lịch Tiền Giang",
          link: "/tour/tien-giang",
        },
        {
          id: 14,
          title: "Du Lịch Cần Thơ",
          link: "/tour/can-tho",
        },
        {
          id: 15,
          title: "Du Lịch Vĩnh Long",
          link: "/tour/vinh-long",
        },
        {
          id: 16,
          title: "Du Lịch Sóc Trăng",
          link: "/tour/soc-trang",
        },
      ],
    },
    {
      id: 24,
      title: "Tour Miền Đông Nam Bộ",
      locationTitle: [
        {
          id: 17,
          title: "Du Lịch Đồng Nai",
          link: "/tour/dong-nai",
        },
        {
          id: 18,
          title: "Du Lịch Bà Rịa - Vũng Tàu",
          link: "/tour/ba-ria-vung-tau",
        },
        {
          id: 19,
          title: "Du Lịch Côn Đảo",
          link: "/tour/con-dao",
        },
        {
          id: 20,
          title: "Du Lịch Hồ Chí Minh",
          link: "/tour/ho-chi-minh",
        },
        {
          id: 21,
          title: "Du Lịch Tây Ninh",
          link: "/tour/tay-ninh",
        },
      ],
    },
  ];
  const handleLogout = async () => {
    await logOutUser(dispatch, navigate, toast, accessToken);
  };
  return (
    <header className="header">
      <div className="header-row container" role="navigation" aria-label="Main">
        <div className="header-left">
          <div className="logo">
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Travel
              </Link>
            </h1>
          </div>
        </div>
        <div className="header-right">
          <ul className="main-menu">
            <li className="menu-item">
              <NavLink to="/">Trang Chủ</NavLink>
            </li>

            <li className="menu-item mega-menu">
              <a href="#">Du lịch +</a>
              <div
                className="mega-menu-wrapper slideInUp"
                style={{ zIndex: 10000 }}
              >
                {dataTravel &&
                  dataTravel.map((ok) => (
                    <div className="mega-menu-col" key={ok.id}>
                      <h5>{ok.title}</h5>
                      <ul className="mega-sub-menu">
                        {ok.locationTitle.map((value) => (
                          <li>
                            <Link to={value.link} key={value.id}>
                              {value.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </li>
            <li className="menu-item dropdown">
              <NavLink to="/tin-tuc">Tin Tức +</NavLink>
              <div className="sub-menu-wrapper slideInUp">
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/tin-tuc/tin-tuc-du-lich">Tin Tức Du Lịch</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/tin-tuc/cam-nang-du-lich">Cẩm Nang Du Lịch</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/tin-tuc/kinh-nghiem-du-lich">Kinh Nghiệm Du Lịch</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <NavLink to="/lien-he">Liên Hệ</NavLink>
            </li>
            {dataUser ? (
              <li className="menu-item dropdown">
                <NavLink to="/me/profile">Hi, {dataUser.user.fullName}</NavLink>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    {dataUser.user.roleId === 1 ||
                    dataUser.user.roleId === 2 ? (
                      <li className="menu-item">
                        <Link to="/admin/dashboard">
                          <AdminPanelSettingsIcon></AdminPanelSettingsIcon>{" "}
                          Admin Dashboard
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    <li className="menu-item">
                      <Link to="/me/profile">
                        <Person2Icon></Person2Icon> Thông tin cá nhân
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/feedback">
                        <ChatBubbleIcon></ChatBubbleIcon> Đánh giá của quý Khách
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/ordered">
                        <BookmarkBorderIcon></BookmarkBorderIcon> Đơn đặt chỗ
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/favorite-tour">
                        <FavoriteIcon></FavoriteIcon>Tour đã yêu thích
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/" onClick={handleLogout}>
                        <ExitToAppIcon></ExitToAppIcon> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <React.Fragment>
                <li className="menu-item">
                  <NavLink to="/auth/dang-nhap">Đăng Nhập</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/auth/dang-ky">Đăng Ký</NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
          <a
            id="hamburger-icon"
            className="mobile-toggler"
            aria-label="Mobile Menu"
            onClick={handleClickOpenMenu}
          >
            <i
              className={`${!isOpenMenu ? "fas fa-bars" : "fas fa-xmark"}`}
            ></i>
          </a>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${isOpenMenu ? "" : "hidden"} slideInDown`}
        >
          <ul>
            <li className="menu-item">
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li className="menu-item mega-menu">
              <a href="#">Mega menu +</a>
              <div className="mega-menu-wrapper" style={{ zIndex: 10000 }}>
                {dataTravel &&
                  dataTravel.map((ok) => (
                    <div className="mega-menu-col" key={ok.id}>
                      <h5>{ok.title}</h5>
                      <ul className="mega-sub-menu">
                        {ok.locationTitle.map((value) => (
                          <li>
                            <Link to={value.link} key={value.id}>
                              {value.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </li>

            <li className="menu-item dropdown">
              <NavLink to="/tin-tuc">Tin tức +</NavLink>
              <div className="sub-menu-wrapper">
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/tin-tuc/tin-tuc-du-lich">Tin Tức Du Lịch</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/tin-tuc/cam-nang-du-lich">Cẩm Nang Du Lịch</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/tin-tuc/kinh-nghiem-du-lich">Kinh Nghiệm Du Lịch</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <NavLink to="/lien-he">Liên Hệ</NavLink>
            </li>
            {dataUser ? (
              <li className="menu-item dropdown">
                <NavLink to="/me/profile">Hi, {dataUser.user.fullName}</NavLink>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/me/profile">
                        <Person2Icon></Person2Icon> Thông tin cá nhân
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/feedback">
                        <ChatBubbleIcon></ChatBubbleIcon> Đánh giá của quý Khách
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/ordered">
                        <BookmarkBorderIcon></BookmarkBorderIcon> Đơn đặt chỗ
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/me/favorite-tour">
                        <FavoriteIcon></FavoriteIcon>Tour đã yêu thích
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/logut">
                        <ExitToAppIcon></ExitToAppIcon> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <React.Fragment>
                <li className="menu-item">
                  <NavLink to="/auth/dang-nhap">Đăng Nhập</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/auth/dang-ky">Đăng Ký</NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
