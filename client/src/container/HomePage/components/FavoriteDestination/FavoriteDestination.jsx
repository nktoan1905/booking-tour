// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const FavoriteDestination = () => {
  const favoriteDestinationsInCountry = [
    {
      id: 1,
      image: "https://media.travel.com.vn/destination/dg_211101_Ha-noi.jpg",
      imageName: "Hà Nội",
      title: "Hà Nội",
      passengers: 87000,
    },
    {
      id: 2,
      image: "https://media.travel.com.vn/destination/dg_211101_Ha-noi.jpg",
      imageName: "Hà Nội",
      title: "Hà Nội",
      passengers: 87000,
    },
    {
      id: 3,
      image: "https://media.travel.com.vn/destination/dg_211101_Ha-noi.jpg",
      imageName: "Hà Nội",
      title: "Hà Nội",
      passengers: 87000,
    },
    {
      id: 4,
      image: "https://media.travel.com.vn/destination/dg_211101_Ha-noi.jpg",
      imageName: "Hà Nội",
      title: "Hà Nội",
      passengers: 87000,
    },
  ];

  return (
    <section className="container favorite mb-4 mt-4 ">
      <div className="row mb-4">
        <h3 className="">Điểm đến yêu thích</h3>
      </div>
      <div className="row mb-2">
        {favoriteDestinationsInCountry.map((ok) => (
          <div className="col-3" key={ok.id}>
            <div className="card bg-light mb-3 border border-white">
              <div className="">
                <Link to="#">
                  <img
                    src={ok.image}
                    alt={ok.imageName}
                    className="favorite_img"
                  ></img>
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="#" className="text-decoration-none text-dark">
                    {ok.title}
                  </Link>
                </h5>
                <p className="card-text">
                  {`Đã có ${ok.passengers} lượt khách`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mb-2">
        {favoriteDestinationsInCountry.map((ok) => (
          <div className="col-3" key={ok.id}>
            <div className="card bg-light mb-3 border border-white">
              <div className="">
                <Link to="#">
                  <img
                    src={ok.image}
                    alt={ok.imageName}
                    className="favorite_img"
                  ></img>
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="#" className="text-decoration-none text-dark">
                    {ok.title}
                  </Link>
                </h5>
                <p className="card-text">
                  {`Đã có ${ok.passengers} lượt khách`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteDestination;
