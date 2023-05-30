import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100 carousel_img"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://thuthuatnhanh.com/wp-content/uploads/2022/04/Hinh-nen-bien.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://file.vfo.vn/hinh/2016/01/hinh-nen-phong-canh-4k-6.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
