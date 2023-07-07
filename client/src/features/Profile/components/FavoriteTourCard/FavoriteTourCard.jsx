import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { setCurrentTour } from "../../../../redux/slice/tourSlice";

const FavoriteTourCard = ({ data, dispatch }) => {
  console.log(data);
  return (
    <div className="product">
      <div className="product-inner">
        <div className="product-image tour-item__image">
          <Link
            to={`/tours/${data.TourDepartureDay.tourId}`}
            onClick={() =>
              dispatch(
                setCurrentTour({
                  id: data.TourDepartureDay.id,
                  dayStartId: data.TourDepartureDay.dayStartId,
                  tourId: data.TourDepartureDay.TourId,
                  startPlace: data.TourDepartureDay.startPlace,
                  tourInfo: data.TourDepartureDay.tourInfo,
                })
              )
            }
          >
            <img
              src={data.TourDepartureDay.tourInfo.thumbnail}
              alt={data.TourDepartureDay.tourInfo.thumbnailName}
              className="img-fluid"
            />
          </Link>
          <div className="s-rate">
            <span>9</span>
          </div>
        </div>
        <div className="product-content">
          <span className="meta">
            {moment(data.TourDepartureDay.DepartureDay.dayStart).format(
              "DD-MM-YYYY"
            )}
          </span>
          <h3 className="product-title tour-item__title">
            <Link
              style={{ color: "#2d4271" }}
              to={`/tours/${data.TourDepartureDay.tourId}`}
              onClick={() =>
                dispatch(
                  setCurrentTour({
                    id: data.TourDepartureDay.id,
                    dayStartId: data.TourDepartureDay.dayStartId,
                    tourId: data.TourDepartureDay.TourId,
                    startPlace: data.TourDepartureDay.startPlace,
                    tourInfo: data.TourDepartureDay.tourInfo,
                  })
                )
              }
            >
              {data.TourDepartureDay.tourInfo.name}
            </Link>
          </h3>
          <p className="des">{`Nơi khởi hành ${data.TourDepartureDay.startPlace}`}</p>
          <div className="group-price">
            <div className="sale-price">
              <span className="tour-item__price--current__number pe-2 mb-0">
                {`${data.TourDepartureDay.tourInfo.adultPrice} $`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteTourCard;
