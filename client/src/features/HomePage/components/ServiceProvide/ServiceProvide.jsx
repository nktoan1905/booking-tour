// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
const ServiceProvide = () => {
  const services = useSelector((state) => state.services.services.services);
  const service = [];
  if (services) {
    for (let i = 0; i < services.length; i++) {
      if (services[i].status === 1 && services[i].loadhome === 1) {
        service.push(services[i]);
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
                {!services
                  ? ""
                  : service.map((ok) => (
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
