import React from "react";
import CommonLayout from "../../../components/Layout/CommonLayout";
import "./style.css";

const Success = () => {
  return (
    <CommonLayout>
      <div className="card-success my-3">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="fa-solid fa-check"></i>
        </div>
        <h1 className="title-success">Success</h1>
        <p className="subtitle-success">
          Thanh toán thành công
        </p>
      </div>
    </CommonLayout>
  );
};

export default Success;
