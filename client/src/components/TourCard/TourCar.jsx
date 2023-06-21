import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const TourCard = ({ data }) => {
  const pathName = window.location.pathname;

  return (
    <div className="card tour-item" style={{ width: "100%" }}>
      <div className="position-relative">
        <div className="tour-item__image">
          <Link to={`${pathName}/${data.id}`}>
            <img
              src={data.thumbnail}
              alt={data.thumbnailName}
              className="card-img-top img-fluid"
            />
          </Link>
          <span className="tour-item__image-inner__icon-favorite addlastminute">
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </span>
          <div className="tour-item__image-inner__bottom">
            <span className="tour-item__image-inner__bottom__category d-none">
              <LocalFireDepartmentIcon /> {" Giờ chót"}
            </span>
          </div>
          <div className="tour-item__image-inner__summary position-absolute">
            <div className="tour-item__image-inner__summary__rating d-flex justify-content-end mb-2">
              <span>9.4</span>
            </div>
            <div className="tour-item__image-inner__summary__review">
              <h6 className="tour-item__image-inner__summary__feedback mb-0 text-end">
                Tuyệt vời
              </h6>
              <div className="tour-item__image-inner__summary__review mb-1 text-end">
                258 quan tâm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <p className="tour-item__date mb-1 d-none">{"20/06/2023 - 3 ngày"}</p>
        <p className="card-text tour-item__title mb-1">
          <Link
            to={`${pathName}/${data.id}`}
            className="text-decoration-none"
            style={{ color: "#2d4271" }}
          >
            {data.name}
          </Link>
        </p>
        <p className="tour-item__departure mb-3 d-none">
          {`Nơi khởi hành: ${data.startPlace}`}
        </p>
        <div className="tour-item__price mb-2 w-100 d-none">
          <div className="tour-item__price__wrapper">
            <div className="tour-item__price--old d-none">
              Giá{" "}
              <span className="tour-item__price--old__number">6,990,000₫</span>
            </div>
            <div className="tour-item__price--current">
              <span className="tour-item__price--current__number pe-2 mb-0">
                {`${data.adultPrice} $`}
              </span>
              <span className="tour-item__price--current__discount small p-1 d-none">
                3% GIẢM
              </span>
            </div>
            <div className="tour-item__price__timer py-2 d-none">
              Count down
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
