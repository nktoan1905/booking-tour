/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";
import "./style.css";
const Banner = () => {
  const banner = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div id="banner">
      <Carousel autoplay effect="fade">
        {!banner
          ? ""
          : banner.map((ok) => (
              <div className="fit" key={ok.id}>
                <img src={ok.link} alt="" />
              </div>
            ))}
      </Carousel>
    </div>
  );
};

export default Banner;
