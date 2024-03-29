import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { setOrderDetail } from "../../../../redux/slice/tourSlice";
import tourApi from "../../../../api/tourApi";

const BookingTour = () => {
  const { tourId } = useParams();
  const [slotLeft, setSlotLeft] = useState(0);
  const [userFlowings, setUserFlowings] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    userInfo: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    orderInfo: {
      adultQuantity: 0,
      childQuantity: 0,
      babyQuantity: 0,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toursDetail = useSelector((state) => state.tours.currentTour);
  useEffect(() => {
    if (toursDetail === null) {
      navigate("/not-found");
    }
  }, []);
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  const dayStart =
    departureDays &&
    departureDays.find((item) => item.id === toursDetail.dayStartId);
  const promotion =
    toursDetail &&
    toursDetail?.tourInfo.promotions.find((item) => item.forObject === 3);
  const disount = promotion
    ? (orderInfo.orderInfo.adultQuantity *
        toursDetail.tourInfo.adultPrice *
        promotion.promotion) /
      100
    : 0;
  const adultPrice =
    orderInfo.orderInfo?.adultQuantity * toursDetail?.tourInfo.adultPrice;
  const childPrice =
    orderInfo.orderInfo?.childQuantity * toursDetail?.tourInfo.childPrice;
  const babyPrice =
    orderInfo.orderInfo?.babyQuantity * toursDetail?.tourInfo.babyPrice;
  useEffect(() => {
    const fetchData = async (tourDepartureDayId) => {
      const res = await tourApi.getTheQuantityOrderedOfTourDepartureDay(
        tourDepartureDayId
      );
      const userFlowings = await tourApi.getAllFlowingByTourDepartureDay(
        tourDepartureDayId
      );
      setUserFlowings(userFlowings.data.data);
      setSlotLeft(toursDetail.tourInfo.amount - res.data.ordered);
    };
    fetchData(toursDetail.id);
  }, []);
  const handleCheckout = () => {
    if (
      !orderInfo?.userInfo?.fullName ||
      !orderInfo?.userInfo?.email ||
      !orderInfo?.userInfo?.phoneNumber
    ) {
      toast.error(
        "Các thông tin về họ và tên, email, số điện thoại không được để trống"
      );
      return;
    }
    if (orderInfo?.orderInfo?.adultQuantity === 0) {
      toast.error("Số lượng người lớn phải lớn hơn hoặc bằng 1");
      return;
    }

    dispatch(
      setOrderDetail({
        userInfo: orderInfo.userInfo,
        order: {
          orderInfo: orderInfo.orderInfo,
          toursDetail: toursDetail,
        },
        promotion: {
          promotion: promotion ? promotion : null,
          disount: disount,
        },
      })
    );
    navigate("/tours/checkout");
  };
  return (
    <section className="checkout-main order-tour">
      <Container>
        <Row>
          <div className="col-12 top">
            <div className="product">
              <div className="product-image">
                <div className="image">
                  <img
                    src={toursDetail?.tourInfo.thumbnail}
                    className="img-fluid"
                    alt={toursDetail?.tourInfo.thumbnailName}
                  />
                </div>
              </div>
              <div className="product-content">
                <div className="s-rate">
                  <span>9.98</span>
                  <div className="s-comment">
                    <h4>Rất tốt</h4>
                    <span>{userFlowings.length} quan tâm</span>
                  </div>
                </div>

                <p className="title">{toursDetail?.tourInfo.name}</p>
                <div className="entry">
                  <div className="entry-inner">
                    <span>
                      Khởi hành <b>{dayStart?.dayStart}</b>
                    </span>
                    <span>
                      Nơi khởi hành <b>{toursDetail?.startPlace}</b>
                    </span>
                    <span>
                      Số chỗ còn nhận <b>{slotLeft}</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12 left">
            <h2 className="d-none d-lg-block">Tổng quan về chuyến đi</h2>
            <h3>Thông tin liên lạc</h3>
            <div className="customer-contact mb-3">
              <Row>
                <Col md={6} className="my-3">
                  <TextField
                    label={"Họ và tên"}
                    variant="standard"
                    fullWidth
                    value={orderInfo?.userInfo?.fullName}
                    required
                    onChange={(event) =>
                      setOrderInfo((prevValues) => ({
                        orderInfo: { ...prevValues.orderInfo },
                        userInfo: {
                          ...prevValues.userInfo,
                          fullName: event.target.value,
                        },
                      }))
                    }
                  />
                </Col>
                <Col md={6} className="my-3">
                  <TextField
                    label={"Email"}
                    variant="standard"
                    fullWidth
                    value={orderInfo?.userInfo?.email}
                    required
                    onChange={(event) =>
                      setOrderInfo((prevValues) => ({
                        orderInfo: { ...prevValues.orderInfo },
                        userInfo: {
                          ...prevValues.userInfo,
                          email: event.target.value,
                        },
                      }))
                    }
                  />
                </Col>

                <Col md={6} className="my-3">
                  <TextField
                    label={"Số điện thoại"}
                    variant="standard"
                    fullWidth
                    value={orderInfo?.userInfo?.phoneNumber}
                    required
                    onChange={(event) =>
                      setOrderInfo((prevValues) => ({
                        orderInfo: { ...prevValues.orderInfo },
                        userInfo: {
                          ...prevValues.userInfo,
                          phoneNumber: event.target.value,
                        },
                      }))
                    }
                  />
                </Col>

                <Col md={6} className="my-3">
                  <TextField
                    label={<p className="inline-block">Địa chỉ</p>}
                    variant="standard"
                    fullWidth
                    onChange={(event) =>
                      setOrderInfo((prevValues) => ({
                        orderInfo: { ...prevValues.orderInfo },
                        userInfo: {
                          ...prevValues.userInfo,
                          address: event.target.value,
                        },
                      }))
                    }
                  />
                </Col>
              </Row>
            </div>
            <div className="customer">
              <h3>Hành khách</h3>
              <div className="change">
                <div className="change-title">
                  <h4>Người lớn</h4>
                  <p>&gt; 12 tuổi</p>
                </div>
                <div className="change-number">
                  <RemoveIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (prevValues.orderInfo.adultQuantity - 1 < 0) {
                          toast.error("Số lượng phải lớn hơn 0");
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              adultQuantity:
                                prevValues.orderInfo.adultQuantity - 1,
                            },
                          };
                      });
                    }}
                  ></RemoveIcon>
                  <span className="number">
                    {orderInfo?.orderInfo?.adultQuantity}
                  </span>
                  <AddIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (
                          prevValues.orderInfo.adultQuantity +
                            1 +
                            prevValues.orderInfo.childQuantity +
                            prevValues.orderInfo.babyQuantity >
                          slotLeft
                        ) {
                          toast.error(
                            `Số lượng người không vượt quá ${slotLeft}`
                          );
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              adultQuantity:
                                prevValues.orderInfo.adultQuantity + 1,
                            },
                          };
                      });
                    }}
                  ></AddIcon>
                </div>
              </div>
              <div className="change">
                <div className="change-title">
                  <h4>Trẻ em</h4>
                  <p>3 - 11 tuổi</p>
                </div>
                <div className="change-number">
                  <RemoveIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (prevValues.orderInfo.childQuantity - 1 < 0) {
                          toast.error("Số lượng phải lớn hơn 0");
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              childQuantity:
                                prevValues.orderInfo.childQuantity - 1,
                            },
                          };
                      });
                    }}
                  ></RemoveIcon>
                  <span className="number">
                    {orderInfo?.orderInfo?.childQuantity}
                  </span>
                  <AddIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (
                          prevValues.orderInfo.adultQuantity +
                            1 +
                            prevValues.orderInfo.childQuantity +
                            prevValues.orderInfo.babyQuantity >
                          slotLeft
                        ) {
                          toast.error(
                            `Số lượng người không vượt quá ${slotLeft}`
                          );
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              childQuantity:
                                prevValues.orderInfo.childQuantity + 1,
                            },
                          };
                      });
                    }}
                  ></AddIcon>
                </div>
              </div>
              <div className="change">
                <div className="change-title">
                  <h4>Em bé</h4>
                  <p>0 - 2 tuổi</p>
                </div>
                <div className="change-number">
                  <RemoveIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (prevValues.orderInfo.babyQuantity - 1 < 0) {
                          toast.error("Số lượng phải lớn hơn 0");
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              babyQuantity:
                                prevValues.orderInfo.babyQuantity - 1,
                            },
                          };
                      });
                    }}
                  ></RemoveIcon>
                  <span className="number">
                    {orderInfo?.orderInfo?.babyQuantity}
                  </span>
                  <AddIcon
                    className="btn-click"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOrderInfo((prevValues) => {
                        if (
                          prevValues.orderInfo.adultQuantity +
                            1 +
                            prevValues.orderInfo.childQuantity +
                            prevValues.orderInfo.babyQuantity >
                          slotLeft
                        ) {
                          toast.error(
                            `Số lượng người không vượt quá ${slotLeft}`
                          );
                          return prevValues;
                        } else
                          return {
                            userInfo: { ...prevValues.userInfo },
                            orderInfo: {
                              ...prevValues.orderInfo,
                              babyQuantity:
                                prevValues.orderInfo.babyQuantity + 1,
                            },
                          };
                      });
                    }}
                  ></AddIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 right">
            <div className="group-checkout">
              <div className="detail">
                <table>
                  <tbody>
                    <tr>
                      <td className="l1">Hành khách</td>
                      <td className="l2 text-right">
                        <div>
                          <i class="fa fa-users" id="AmoutPerson"></i>
                          {orderInfo?.orderInfo?.adultQuantity +
                            orderInfo?.orderInfo?.childQuantity +
                            orderInfo?.orderInfo?.babyQuantity}{" "}
                          người
                        </div>
                        <p class="add-more">
                          <p>
                            {orderInfo?.orderInfo?.adultQuantity} người lớn
                            <br></br>
                            {orderInfo?.orderInfo?.childQuantity} trẻ em
                            <br></br>
                            {orderInfo?.orderInfo?.babyQuantity} em bé
                          </p>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Người lớn</td>
                      <td className="t-price text-right">{`${orderInfo?.orderInfo?.adultQuantity} x ${toursDetail?.tourInfo.adultPrice} $`}</td>
                    </tr>
                    <tr>
                      <td>Trẻ em</td>
                      <td className="t-price text-right">{`${orderInfo?.orderInfo?.childQuantity} x ${toursDetail?.tourInfo.childPrice} $`}</td>
                    </tr>
                    <tr>
                      <td>Em bé</td>
                      <td className="t-price text-right">{`${orderInfo?.orderInfo?.babyQuantity} x ${toursDetail?.tourInfo.babyPrice} $`}</td>
                    </tr>
                    <tr>
                      <td>Giảm giá</td>
                    </tr>
                    <tr>
                      <td>Người lớn</td>
                      <td className="t-price text-right">
                        {promotion ? `${disount} $` : `0`}
                      </td>
                    </tr>
                    <tr className="total">
                      <td>Tổng cộng</td>
                      <td className="t-price text-right">
                        {`${adultPrice + childPrice + babyPrice - disount} $`}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-primary btn-order"
                  style={{ width: "100%" }}
                  onClick={handleCheckout}
                >
                  Đặt ngay
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BookingTour;
