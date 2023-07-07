import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/api/authApiHandler";

const Header = () => {
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderAdminOption = (roleId) => {
    if ((roleId === 1) | (roleId === 2)) {
      return (
        <React.Fragment>
          <NavDropdown.Divider />
          <Row>
            <Col
              as={Link}
              to="/admin"
              className="text-decoration-none text-black"
            >
              Admin
            </Col>
          </Row>
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  };
  const handleOnClickLogout = async () => {
    await logoutUser(currentUserAccessToken, dispatch, navigate, toast);
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Travel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="mx-3">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Trang chủ
            </Nav.Link>
            <NavDropdown title="Du Lịch" id="nav-dropdown">
              <Container style={{ minWidth: "900px" }}>
                <Row>
                  <Col xs={12} sm={6} lg={3}>
                    Column
                  </Col>
                  <Col xs={12} sm={6} lg={3}>
                    Column
                  </Col>
                  <Col xs={12} sm={6} lg={3}>
                    Column
                  </Col>
                  <Col xs={12} sm={6} lg={3}>
                    Column
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <NavDropdown title="Tin tức" id="nav-dropdown">
              <Container style={{ minWidth: "200px" }}>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/news/tin-tuc-du-lich"
                    className="text-decoration-none text-black"
                  >
                    Tin tức du lịch
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/news/cam-nang-du-lich"
                    className="text-decoration-none text-black"
                  >
                    Cẩm nang du lịch
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/news/kinh-nghiem-du-lich"
                    className="text-decoration-none text-black"
                  >
                    Kinh Nghiệm du lịch
                  </Col>
                </Row>
                <NavDropdown.Divider />
              </Container>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact">
              Liên hệ
            </Nav.Link>
          </Nav>
          {!currentUser ? (
            <Nav className="d-flex justify-content-start">
              <Nav.Link as={NavLink} to="/auth/login">
                Đăng nhập
              </Nav.Link>
              <Nav.Link as={NavLink} to="/auth/register">
                Đăng ký
              </Nav.Link>
            </Nav>
          ) : (
            <NavDropdown
              title={
                <div className="d-inline-flex justify-content-between align-items-center">
                  <img
                    src={
                      currentUser.avatar
                        ? currentUser.avatar
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    alt={currentUser.fullName}
                  />
                  <p className="text-white mb-0 ms-3">
                    {`Hello, ${currentUser.fullName}`}
                  </p>
                </div>
              }
              className="d-flex justify-content-start"
            >
              <Container style={{ minWidth: "200px" }}>
                {renderAdminOption(currentUser?.roleId)}
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/me/profile"
                    className="text-decoration-none text-black"
                  >
                    Profile
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/me/order"
                    className="text-decoration-none text-black"
                  >
                    Đơn đặt chỗ
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/me/feedbacks"
                    className="text-decoration-none text-black"
                  >
                    Đánh giá của quý khách
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    to="/me/saved"
                    className="text-decoration-none text-black"
                  >
                    Yêu thích đã lưu
                  </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                  <Col
                    as={Link}
                    className="text-decoration-none text-black"
                    onClick={handleOnClickLogout}
                  >
                    Logout
                  </Col>
                </Row>
                <NavDropdown.Divider />
              </Container>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
