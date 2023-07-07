// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";

export default function TravelGuilde() {
  const camnang = [
    {
      id: 1,
      icon: "fab fa-pagelines",
      name: "Mùa du lịch",
      content:
        "Những thời điểm tốt nhất dành cho du lịch của từng địa điểm mà bạn muốn đến.",
    },
    {
      id: 2,
      icon: "fas fa-map-marker-alt",
      name: "Địa điểm đẹp",
      content:
        "Các điểm đến, danh lam thắng cảnh của những thành phố bạn sẽ tới tham quan trong chuyến đi.",
    },
    {
      id: 3,
      icon: "fas fa-dollar-sign",
      name: "Chi phí",
      content:
        "Thông tin những khoản chi phí phát sinh mà bạn cần dự phòng chuyến đi của mình.",
    },
    {
      id: 4,
      icon: "fas fa-car",
      name: "Phương tiện di chuyển",
      content:
        "Thông tin các phương tiện bạn có thể sử dụng để thăm các địa điểm đẹp trong chuyến đi.",
    },
    {
      id: 5,
      icon: "fab fa-instagram",
      name: "Du lịch khám phá",
      content:
        "Quý khách sẽ được khám phá những danh lam thắng cảnh được yêu thích nhất trên thế giới",
    },
  ];
  return (
    <div className=" my-4" id="travel-guilde">
      <div className="heading text-center">
        <span
          style={{
            fontSize: "2rem",
            paddingTop: "2rem",
            textTransform: "uppercase",
          }}
        >
          cẩm nang du lịch
        </span>
        <div className="hr"></div>
        <p className="mb-4">
          Tất cả những thông tin hữu ích mà bạn cần để thêm vào vào hành trang
          du lịch của mình
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center ">
          {!camnang
            ? ""
            : camnang.map((ok) => (
                <div className="col-md-3" key={ok.id}>
                  <div className="head_cn">
                    <i className={ok.icon}></i>
                  </div>
                  <div className="content_cn text-center">
                    <p className="text-center">{ok.name}</p>
                    <span>{ok.content}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
