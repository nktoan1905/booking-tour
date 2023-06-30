import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import tourApi from "../../../../../api/tourApi";

const Card = ({ data }) => {
  const [slotLeft, setSlotLeft] = useState();
  useEffect(() => {
    const fetchData = async (tourDepartureDayId) => {
      const res = await tourApi.getTheQuantityOrderedOfTourDepartureDay(
        tourDepartureDayId
      );
      setSlotLeft(data.Tour.amount - res.data.ordered);
    };
    if (data) {
      fetchData(data.id);
    }
  }, []);
  return (
    <div className="card tour-item" style={{ width: "100%" }}>
      <div className="position-relative">
        <div className="tour-item__image">
          <Link to={`/admin/orders/${data.id}`}>
            <img
              className="card-img-top img-fluid"
              src={data.Tour.thumbnail}
              alt={data.Tour.thumbnailName}
            />
          </Link>
        </div>
      </div>
      <div className="card-body p-3">
        <p className="tour-item__date mb-1">{`${moment(
          data.DepartureDay.dayStart
        ).format("DD-MM-YYYY")} - ${data.Tour.duration} ngày`}</p>
        <p className="card-text tour-item__title mb-1">
          <Link
            className="text-decoration-none"
            style={{ color: "#2d4271" }}
            to={`/admin/orders/${data.id}`}
          >
            {data.Tour.name}
          </Link>
        </p>
        <p className="tour-item__departure mb-3">{`Nơi khởi hành: ${data.startPlace}`}</p>
      </div>
      <div className="card-footer tour-item__footer px-3 mb-2 w-100 d-inline-flex justify-content-between align-items-center">
        <div className="tour-item__footer__available-seat d-inline-flex align-items-center">
          <div className="tour-item__footer__available-seat--text me-1">
            Số chỗ còn
          </div>
          <div className="tour-item__footer__available-seat--number">
            {`${slotLeft}/${data.Tour.amount}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
