import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css";
import { Button, Tab, Tabs } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import { Link as LinkScorll } from "react-scroll";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CommentGroup from "../../../../components/CommentGroup/CommentGroup";
import tourApi from "../../../../api/tourApi";
const createImageArray = (images, handleDragStart) => {
  return images.map((image, index) => (
    <img
      src={image.imageLink}
      alt={image.imageName}
      onDragStart={handleDragStart}
      role="presentation"
      key={index}
    />
  ));
};

const DetailTourPage = () => {
  const { tourId } = useParams();
  const tours = useSelector((state) => state.tours.tours?.tours);
  const tourDetail = tours.find((item) => item.id === Number(tourId));
  const [value, setValue] = React.useState(0);
  const [userFlowings, setUserFlowings] = useState([]);
  const [rating, setRating] = useState(9.8);
  const currentTour = useSelector((state) => state.tours.currentTour);
  const handleDragStart = (e) => e.preventDefault();
  const items = createImageArray(tourDetail.images, handleDragStart);
  const isLogin = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    document.title = tourDetail.name;
  }, []);
  const options = {
    responsive: {
      0: { items: 1 },
    },
    stagePadding: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    renderDotsOutside: true,
    autoPlay: true,
    autoPlayInterval: 3000,
    infinite: true,
    disableButtonsControls: true,
    disableDotsControls: false,
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (tourDepartureDayId) => {
      const userFlowings = await tourApi.getAllFlowingByTourDepartureDay(
        tourDepartureDayId
      );
      const res2 = await tourApi.getAllFeedbacksByTourId(tourId);
      const feedbacks = res2.data?.data;
      const rate = feedbacks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.star;
      }, 0);
      setRating((prevValues) => {
        return rate === 0
          ? prevValues
          : Math.round((rate * 2) / feedbacks.length);
      });
      setUserFlowings(userFlowings.data.data);
    };
    if (currentTour) {
      fetchData(currentTour.id);
    }
  }, []);
  return (
    <div className="tour-detail">
      <div className="entry-head">
        <section className="section-01">
          <Container>
            <Row>
              <Col md={6} className="left">
                <h1 className="title">{tourDetail.name}</h1>
                <div className="short-rating">
                  <div className="s-rate">
                    <span>{rating}</span>
                    <div className="s-comment">
                      Tuyệt vời <p>{userFlowings.length} quan tâm</p>
                    </div>
                  </div>
                  <div className="s-wishlist">
                    <FavoriteIcon></FavoriteIcon>
                    <label>{userFlowings.length}</label>
                  </div>
                </div>
              </Col>
              <Col md={6} className="right">
                <div className="group-add-cart float-end">
                  <Button
                    startIcon={<ShoppingCartIcon />}
                    variant="contained"
                    onClick={() =>
                      navigate(
                        `${
                          isLogin ? `/tours/${tourId}/booking` : "/auth/login"
                        }`
                      )
                    }
                  >
                    Đặt ngay
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-02">
          <Container>
            <Row>
              <Col lg={7} md={12} sm={12} className="left">
                <div className="image">
                  <img
                    src={
                      tourDetail.images[0]?.imageLink
                        ? tourDetail.images[0].imageLink
                        : "https://placehold.co/600x400"
                    }
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </Col>
              <Col lg={5} md={12} sm={12} className="right">
                <Row className="gy-4">
                  <Col md={12} sm={12} className="small">
                    <Row>
                      <Col className="col-6">
                        <div className="image">
                          <img
                            src={
                              tourDetail.images[1]?.imageLink
                                ? tourDetail.images[1].imageLink
                                : "https://placehold.co/600x400"
                            }
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </Col>
                      <Col className="col-6">
                        <div className="image">
                          <img
                            src={
                              tourDetail.images[2]?.imageLink
                                ? tourDetail.images[2].imageLink
                                : "https://placehold.co/600x400"
                            }
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12} sm={12} className="big">
                    <Col>
                      <div className="image">
                        <img
                          src={
                            tourDetail.images[3]?.imageLink
                              ? tourDetail.images[3].imageLink
                              : "https://placehold.co/600x400"
                          }
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <div className="tabs-panel">
        <Container>
          <Row>
            <Col>
              <Tabs value={value} aria-label="disabled tabs example" centered>
                <LinkScorll
                  to="tour-detail-content"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Tab label="Giới thiệu &amp; Hành trình" />
                </LinkScorll>
                <LinkScorll
                  to="tour-detail-note"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Tab label="Lưu ý" />
                </LinkScorll>
                <LinkScorll
                  to="tour-detail-service"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Tab label="Dịch vụ" />
                </LinkScorll>
                <LinkScorll
                  to="tour-detail-price"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Tab label="Giá" />
                </LinkScorll>
                <LinkScorll
                  to="tour-detail-image"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Tab label="Ảnh tour" />
                </LinkScorll>
              </Tabs>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12} id="tour-detail-content ">
              <h3 className="text-uppercase fs-3 fw-bold text-decoration-underline">
                Giới thiệu và hành trình
              </h3>
              <div className="" style={{ transform: "scale(0.95)" }}>
                {HTMLReactParser(tourDetail.tourDetail)}
              </div>
              <div className="more-detail mt-3">
                <div className="map">
                  <h4 className="map__title">Bản đồ</h4>
                  <div className="map__content">
                    {HTMLReactParser(tourDetail.map)}
                  </div>
                </div>
                <div className="trailer mt-3">
                  <h4 className="trailer__title">Trailer</h4>
                  <div className="trailer__content">
                    {HTMLReactParser(tourDetail.trailer)}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} id="tour-detail-note" className="mt-4">
              <h3 className="text-danger text-uppercase fs-3 fw-bold text-decoration-underline">
                Lưu ý
              </h3>
              <div className="" style={{ transform: "scale(0.95)" }}>
                {HTMLReactParser(tourDetail.note)}
              </div>
            </Col>
            <Col md={12} id="tour-detail-service">
              <h3 className="text-uppercase fs-3 fw-bold text-decoration-underline mb-3">
                Dịch vụ tour cung cấp
              </h3>
              <Row>
                {tourDetail.services.map((ok) => (
                  <div className="col-md-4" key={ok.id}>
                    <div className="icon">
                      <span className={ok.icon}></span>
                    </div>
                    <div className="content-dv">
                      <strong>{ok.name}</strong>
                      <p>{ok.description}</p>
                    </div>
                  </div>
                ))}
              </Row>
            </Col>
            <Col md={12} id="tour-detail-price">
              <h3 className="text-uppercase fs-3 fw-bold text-decoration-underline mb-3">
                Giá tour
              </h3>
              <div className="table-price">
                <table>
                  <tbody>
                    <tr>
                      <th className="l1">Loại khách</th>
                      <th className="l1">Giá tour</th>
                    </tr>
                    <tr>
                      <td className="l1">Người lớn (Từ 12 tuổi trở lên)</td>
                      <td className="t-price">{`${tourDetail.adultPrice} $`}</td>
                    </tr>
                    <tr>
                      <td className="l1">Trẻ em (Từ 5 - 11 tuổi)</td>
                      <td className="t-price">{`${tourDetail.childPrice} $`}</td>
                    </tr>
                    <tr>
                      <td className="l1">Em bé ( Dưới 2 tuổi )</td>
                      <td className="t-price">{`${tourDetail.babyPrice} $`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col md={12} id="tour-detail-image">
              <h3 className="text-uppercase fs-3 fw-bold text-decoration-underline mb-3">
                Hình ảnh tour
              </h3>
              <AliceCarousel
                mouseTracking
                items={items}
                {...options}
                controlsStrategy="alternate"
                responsive={responsive}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="comment my-3">
        <Row>
          <Col>
            <CommentGroup></CommentGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailTourPage;
