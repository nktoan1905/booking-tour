import React from "react";
import "./style.css";

const Checkout = () => {
  return (
    <div
      className="container d-lg-flex"
      style={{
        maxWidth: "900px",
        margin: "25px auto",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        height: "65vh",
      }}
    >
      <div className="box-1 bg-light user">
        <div className="box-inner-1 pb-3 mb-3 ">
          <div className="d-flex justify-content-between mb-3 userdetails">
            <p className="fw-bold">Checkout</p>
            <p className="fw-lighter">
              <span className="fas fa-dollar-sign"></span>33.00+
            </p>
          </div>
          <p className="dis info my-3">Tên tour</p>
          <div className="radiobtn">
            <input type="radio" name="box" id="one" disabled />
            <input type="radio" name="box" id="two" disabled />
            <input type="radio" name="box" id="three" disabled />
            <label for="one" className="box py-2 first">
              <div className="d-flex align-items-start">
                <span className="circle"></span>
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-bold">Collection 01</span>
                    <span className="fas fa-dollar-sign">29</span>
                  </div>
                  <span>10 Qty</span>
                </div>
              </div>
            </label>
            <label for="two" className="box py-2 second">
              <div className="d-flex">
                <span className="circle"></span>
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-bold">Collection 01</span>
                    <span className="fas fa-dollar-sign">29</span>
                  </div>
                  <span>10 Qty</span>
                </div>
              </div>
            </label>
            <label for="three" className="box py-2 third">
              <div className="d-flex">
                <span className="circle"></span>
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-bold">Collection 01</span>
                    <span className="fas fa-dollar-sign">29</span>
                  </div>
                  <span>10 Qty</span>
                  <span className="float-end text-muted">
                    <span className="fas fa-dollar-sign text-muted">5</span>{" "}
                    each
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Payment Details</p>
            <p className="dis mb-3">
              Complete your purchase by providing your payment details
            </p>
          </div>
          <form action="">
            <div className="mb-3">
              <p className="dis fw-bold mb-2">Email address</p>
              <input
                className="form-control"
                type="email"
                value="luke@skywalker.com"
              />
            </div>
            <div>
              <p className="dis fw-bold mb-2">Card details</p>
              <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                <div className="fab fa-cc-visa ps-3"></div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card Details"
                />
                <div className="d-flex w-50">
                  <input
                    type="text"
                    className="form-control px-0"
                    placeholder="MM/YY"
                  />
                  <input
                    type="password"
                    maxlength="3"
                    className="form-control px-0"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div className="my-3 cardname">
                <p className="dis fw-bold mb-2">Cardholder name</p>
                <input className="form-control" type="text" />
              </div>
              <div className="address">
                <div className="d-flex flex-column dis">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>Subtotal</p>
                    <p>
                      <span className="fas fa-dollar-sign"></span>33.00
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>
                      Discount<span>(20%)</span>
                    </p>
                    <p>
                      <span className="fas fa-dollar-sign"></span>2.80
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold">
                      <span className="fas fa-dollar-sign"></span>35.80
                    </p>
                  </div>
                  <div className="btn btn-primary mt-2">
                    Pay<span className="fas fa-dollar-sign px-1"></span>35.80
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
