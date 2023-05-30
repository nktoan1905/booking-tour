// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Footer = () => {
  const footer = [
    {
      id: 1,
      content: "Booking tour",
      email: "abcd@example.com",
      sdt: "001923012",
      diachi: "example",
    },
  ];
  const mxh = [
    {
      id: 1,
      name: "facebook",
      color: "#3f64ab",
      icon: "fab fa-facebook-f",
      link: "http://facebook.com/",
    },
    {
      id: 2,
      name: "instagram",
      color:
        "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%",
      icon: "fab fa-instagram",
      link: "http://www.instagram.com/accounts/login/?next=/schemecolor_official/",
    },
    {
      id: 3,
      name: "twitter",
      color: "#1d9ceb",
      icon: "fab fa-twitter",
      link: "http://facebook.com/",
    },
  ];
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div id="footer" className="bg-dark">
      <footer className="page-footer font-small blue pt-4 container ">
        <div className="container-fluid text-md-left">
          <div className="row">
            {footer.map((ok) => (
              <div className="col-md-6 mt-md-0 mt-3" key={ok.id}>
                <h5 className="text-uppercase text-danger">Footer Content</h5>
                <p>{ok.content}</p>
                <h5 className="text-uppercase text-danger mt-3">
                  Thông tin liên hệ
                </h5>
                <p>
                  <strong>Email: </strong>
                  <i>{ok.email}</i>
                </p>
                <p>
                  <strong>Số điện thoại: </strong>
                  <i>+{ok.sdt}</i>
                </p>
                <p>
                  <strong>Địa chỉ: </strong>
                  <i>{ok.diachi}</i>
                </p>
              </div>
            ))}
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-light text-decoration-none">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-light text-decoration-none">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-light text-decoration-none">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Khuyến mãi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh ">
              <h5 className="text-uppercase text-danger ">Mạng xã hội</h5>
              {mxh.map((ok) => (
                <div key={ok.id} onClick={() => redirectTo(ok.link)}>
                  <div
                    className="icon_footer mt-2"
                    style={{
                      background: `${ok.color}`,
                      cursor: "pointer",
                    }}
                  >
                    <i className={`${ok.icon}`}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <Link to="#">Công ty thương mại Việt Nam Travel.</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
