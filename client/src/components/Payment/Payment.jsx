import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import paymentApi from "../../api/paymentApi";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { Container, Row, Col } from "react-bootstrap";
import dayjs from "dayjs";
import moment from "moment";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const currentOrder = useSelector((state) => state.tours.orderDetail);
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  const cities = useSelector((state) => state.cityAndCountries.cites.cites);
  const day =
    departureDays &&
    departureDays.find(
      (item) => item.id === currentOrder?.order.toursDetail.dayStartId
    );
  console.log(currentOrder);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await paymentApi.getConfig(currentUserAccessToken);
      console.log(res.data.stripeApiKey);
      setStripePromise(loadStripe(res.data.stripeApiKey));
    };
    fetchApi();
  }, []);
  useEffect(() => {
    const amount =
      (currentOrder.order.toursDetail.tourInfo.adultPrice -
        currentOrder.promotion.disount) *
        currentOrder.order.orderInfo.adultQuantity +
      currentOrder.order.toursDetail.tourInfo.childPrice *
        currentOrder.order.orderInfo.childQuantity +
      currentOrder.order.toursDetail.tourInfo.babyPrice *
        currentOrder.order.orderInfo.babyQuantity;
    const fetchApi = async () => {
      const res = await paymentApi.payment(currentUserAccessToken, amount);
      console.log(res.data.client_secret);
      setClientSecret(res.data.client_secret);
    };
    fetchApi();
  }, []);

  return (
    <React.Fragment>
      <Container className="my-4" style={{ minHeight: "60vh" }}>
        <Row>
          <div className="col-8">
            <p className="pb-2 fw-bold">Order</p>
            <div className="table-responsive px-md-4 px-2 pt-3">
              {currentOrder && (
                <table className="table table-borderless">
                  <tbody>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="">
                            <img
                              className="pic rounded"
                              src={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnail
                              }
                              alt={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnailName
                              }
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div className="ps-3 d-flex flex-column justify-content">
                            <p className="fw-bold" style={{ width: "300px" }}>
                              {currentOrder.order.toursDetail.tourInfo.name}
                            </p>
                            <small className=" d-flex">
                              <span className=" text-muted">Ngày bắt đầu:</span>
                              <span className=" fw-bold">
                                {moment(day).format("DD-MM-YYYY")}
                              </span>
                            </small>
                            <small>
                              <span class=" text-muted">
                                Địa chỉ xuất phát:
                              </span>
                              <span class=" fw-bold">
                                {currentOrder.order.toursDetail.startPlace}
                              </span>
                            </small>
                            <small>
                              <span class=" text-muted">Xuất:</span>
                              <span class=" fw-bold">Người lớn</span>
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="text-danger">
                              {`$ ${
                                currentOrder.order.toursDetail.tourInfo
                                  .adultPrice - currentOrder.promotion.disount
                              }`}
                            </span>
                          </p>
                          <p className="text-muted text-decoration-line-through">
                            {`$ ${currentOrder.order.toursDetail.tourInfo.adultPrice}`}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="pe-3 text-muted">Quantity</span>
                          <span class="pe-3">
                            {currentOrder.order.orderInfo.adultQuantity}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="">
                            <img
                              className="pic rounded"
                              src={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnail
                              }
                              alt={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnailName
                              }
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div className="ps-3 d-flex flex-column justify-content">
                            <p className="fw-bold" style={{ width: "300px" }}>
                              {currentOrder.order.toursDetail.tourInfo.name}
                            </p>
                            <small className=" d-flex">
                              <span className=" text-muted">Ngày bắt đầu:</span>
                              <span className=" fw-bold">
                                {moment(day).format("DD-MM-YYYY")}
                              </span>
                            </small>
                            <small className="">
                              <span class=" text-muted">
                                Địa chỉ xuất phát:
                              </span>
                              <span class=" fw-bold">
                                {currentOrder.order.toursDetail.startPlace}
                              </span>
                            </small>
                            <small>
                              <span class=" text-muted">Xuất:</span>
                              <span class=" fw-bold">Trẻ em</span>
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="text-danger">
                              {`$ ${currentOrder.order.toursDetail.tourInfo.childPrice}`}
                            </span>
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="pe-3 text-muted">Quantity</span>
                          <span class="pe-3">
                            {currentOrder.order.orderInfo.childQuantity}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="">
                            <img
                              className="pic rounded"
                              src={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnail
                              }
                              alt={
                                currentOrder.order.toursDetail.tourInfo
                                  .thumbnailName
                              }
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div className="ps-3 d-flex flex-column justify-content">
                            <p className="fw-bold" style={{ width: "300px" }}>
                              {currentOrder.order.toursDetail.tourInfo.name}
                            </p>
                            <small className=" d-flex">
                              <span className=" text-muted">Ngày bắt đầu:</span>
                              <span className=" fw-bold">
                                {moment(day).format("DD-MM-YYYY")}
                              </span>
                            </small>
                            <small className="">
                              <span class=" text-muted">
                                Địa chỉ xuất phát:
                              </span>
                              <span class=" fw-bold">
                                {currentOrder.order.toursDetail.startPlace}
                              </span>
                            </small>
                            <small>
                              <span class=" text-muted">Xuất:</span>
                              <span class=" fw-bold">Em bé</span>
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="text-danger">
                              {`$ ${currentOrder.order.toursDetail.tourInfo.babyPrice}`}
                            </span>
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="pe-3 text-muted">Quantity</span>
                          <span class="pe-3">
                            {currentOrder.order.orderInfo.babyQuantity}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-top">
                      <td colSpan={2} className="fs-2 text-danger fw-bold">
                        Tổng tiền
                      </td>
                      <td className="fs-3">
                        ${" "}
                        {(currentOrder.order.toursDetail.tourInfo.adultPrice -
                          currentOrder.promotion.disount) *
                          currentOrder.order.orderInfo.adultQuantity +
                          currentOrder.order.toursDetail.tourInfo.childPrice *
                            currentOrder.order.orderInfo.childQuantity +
                          currentOrder.order.toursDetail.tourInfo.babyPrice *
                            currentOrder.order.orderInfo.babyQuantity}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="col-4">
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm></CheckoutForm>
              </Elements>
            )}
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Payment;
