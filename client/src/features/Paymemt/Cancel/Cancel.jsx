import React from "react";
import CommonLayout from "../../../components/Layout/CommonLayout";
import "./style.css";

const Cancel = () => {
  return (
    <CommonLayout>
      <div className="card-cancel my-3">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <h1 className="title-cancel">Cancel</h1>
        <p className="subtitle-cancel">Thanh toán không thành công</p>
      </div>
    </CommonLayout>
  );
};

export default Cancel;
