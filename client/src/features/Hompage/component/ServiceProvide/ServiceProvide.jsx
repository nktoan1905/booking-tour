// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
const ServiceProvide = () => {
  const dichvus = [
    {
      id: 1,
      name: "Cafe",
      description: "Cà phê được miễn phí 2 tách một ngày",
      icon: "fas fa-coffee",
      status: 1,
      loadhome: 1,
    },
    {
      id: 2,
      name: "Ăn sáng",
      description: "Khách hàng được thưởng thức bữa sáng miễn phí ",
      icon: "fas fa-egg",
      status: 1,
      loadhome: 1,
    },
    {
      id: 3,
      name: "Đạp xe",
      description: "Được cấp xe đạp ở từng địa điểm nhất định",
      icon: "fas fa-bicycle",
      status: 1,
      loadhome: 1,
    },
    {
      id: 4,
      name: "Thiết bị",
      description: "Được cung cấp thiết bị cần thiết theo loại tour",
      icon: "fas fa-coffee",
      status: 1,
      loadhome: 1,
    },
    {
      id: 5,
      name: "Chụp ảnh",
      description: "Được thợ chụp ảnh chuyên nghiệp chụp hình kỷ niệm",
      icon: "fas fa-camera",
      status: 1,
      loadhome: 1,
    },
    {
      id: 6,
      name: "Di chuyển",
      description: "Được cung cấp miễn phí dịch vụ di chuyển khi đi theo đoàn",
      icon: "fas fa-bus-alt",
      status: 1,
      loadhome: 1,
    },
  ];
  var dichvu = [];

  if (dichvus) {
    for (let i = 0; i < dichvus.length; i++) {
      if (dichvus[i].status === 1 && dichvus[i].loadhome === 1) {
        dichvu.push(dichvus[i]);
      }
    }
  }
  return (
    <div id="dichvu">
      <div className="fixed-background">
        <div className="">
          <div className="mb-5 tour">
            <div className="heading text-center pt-5">
              <span
                style={{
                  fontSize: "2rem",
                  paddingTop: "2rem",
                  textTransform: "uppercase",
                }}
              >
                Dịch vụ công ty
              </span>
              <div className="hr"></div>
              <p className="mb-4">
                Các dịch vụ mà công ty sẽ cung cấp trong quá trình khách hàng sử
                dụng tour.
              </p>
            </div>
            <div className="container">
              <div className="row justify-content-center pb-5 text-center">
                {!dichvus
                  ? ""
                  : dichvu.map((ok) => (
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
              </div>
            </div>
            <div className="fixed-wrap">
              <div className="fixed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvide;
