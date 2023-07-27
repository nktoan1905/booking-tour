import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useSelector } from "react-redux";
import { setCurrentTour } from "../../../../redux/slice/tourSlice";
import tourApi from "../../../../api/tourApi";
import moment from "moment";
import { toast } from "react-toastify";
import userApi from "../../../../api/userApi";

const CardTour = ({ data, dispatch }) => {
  const promotion = data?.tourInfo.promotions.find(
    (item) => item.forObject === 3
  );
  const [slotLeft, setSlotLeft] = useState(0);
  const [userFlowings, setUserFlowings] = useState([]);
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  const [rating, setRating] = useState(9.8);
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  useEffect(() => {
    const fetchData = async (tourDepartureDayId, tourId) => {
      const res = await tourApi.getTheQuantityOrderedOfTourDepartureDay(
        tourDepartureDayId
      );
      const userFlowings = await tourApi.getAllFlowingByTourDepartureDay(
        tourDepartureDayId
      );
      const res2 = await tourApi.getAllFeedbacksByTourId(tourId);
      const feedbacks = res2.data?.data;
      const rate = feedbacks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.star;
      }, 0);
      setRating((prevValues) => {
        return rate === 0
          ? prevValues
          : Math.round((rate * 2) / feedbacks.length);
      });
      setUserFlowings(userFlowings.data.data);
      setSlotLeft(data.tourInfo.amount - res.data.ordered);
    };
    if (data) {
      fetchData(data.id, data.tourId);
    }
  }, []);
  const handleFlowTour = async () => {
    try {
      await userApi.addFlowingTour(currentUserAccessToken, data.id);
      const userFlowings = await tourApi.getAllFlowingByTourDepartureDay(
        data.id
      );
      setUserFlowings(userFlowings.data.data);
      toast.success("Flow thành công");
    } catch (error) {
      toast.error("Flow thất bại");
    }
  };
  const handleRemoveFlowTour = async () => {
    try {
      await userApi.removeFlowingTour(currentUserAccessToken, data.id);
      const userFlowings = await tourApi.getAllFlowingByTourDepartureDay(
        data.id
      );
      setUserFlowings(userFlowings.data.data);
      toast.success("Xóa flow thành công");
    } catch (error) {
      toast.error("Xóa flow thất bại");
    }
  };
  const renderFavoriteIcon = () => {
    if (!currentUser) {
      return (
        <FavoriteBorderIcon
          onClick={() => {
            toast.error("Xin vui lòng đăng nhập");
          }}
        ></FavoriteBorderIcon>
      );
    } else if (userFlowings.find((item) => item.userId === currentUser.id)) {
      return <FavoriteIcon onClick={handleRemoveFlowTour}></FavoriteIcon>;
    } else {
      return <FavoriteBorderIcon onClick={handleFlowTour}></FavoriteBorderIcon>;
    }
  };

  return data ? (
    <div className="card tour-item" style={{ width: "100%" }}>
      <div className="position-relative">
        <div className="tour-item__image">
          <Link
            to={`/tours/${data?.tourInfo.id}`}
            onClick={() => dispatch(setCurrentTour(data))}
          >
            <img
              src={data?.tourInfo.thumbnail}
              alt={data?.tourInfo.thumbnailName}
              className="card-img-top img-fluid"
            />
          </Link>
          <span className="tour-item__image-inner__icon-favorite addlastminute">
            {renderFavoriteIcon()}
          </span>
          <div className="tour-item__image-inner__bottom">
            <span className="tour-item__image-inner__bottom__category d-none">
              <LocalFireDepartmentIcon /> {" Giờ chót"}
            </span>
          </div>
          <div className="tour-item__image-inner__summary position-absolute">
            <div className="tour-item__image-inner__summary__rating d-flex justify-content-end mb-2">
              <span>{rating}</span>
            </div>
            <div className="tour-item__image-inner__summary__review">
              <h6 className="tour-item__image-inner__summary__feedback mb-0 text-end">
                Tuyệt vời
              </h6>
              <div className="tour-item__image-inner__summary__review mb-1 text-end">
                {`${userFlowings.length} quan tâm`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <p className="tour-item__date mb-1">{`${moment(
          departureDays.find((item) => item.id === data.dayStartId).dayStart
        ).format("DD-MM-YYYY")} - ${data.tourInfo.duration} ngày`}</p>
        <p className="card-text tour-item__title mb-1">
          <Link
            to={`/tours/${data?.tourInfo.id}`}
            className="text-decoration-none"
            style={{ color: "#2d4271" }}
            onClick={() => dispatch(setCurrentTour(data))}
          >
            {data?.tourInfo.name}
          </Link>
        </p>
        <p className="tour-item__departure mb-3">
          {`Nơi khởi hành: ${data?.startPlace}`}
        </p>

        <div className="tour-item__price mb-2 w-100">
          <div className="tour-item__price__wrapper">
            {promotion ? (
              <React.Fragment>
                <div className="tour-item__price--old">
                  Giá{" "}
                  <span className="tour-item__price--old__number">
                    {`${data?.tourInfo.adultPrice} $`}
                  </span>
                </div>
                <div className="tour-item__price--current">
                  <span className="tour-item__price--current__number pe-2 mb-0">
                    {`Giá tour: ${
                      data?.tourInfo.adultPrice -
                      (data?.tourInfo.adultPrice * promotion?.promotion) / 100
                    } $`}
                  </span>
                  <span className="tour-item__price--current__discount small p-1">
                    {`${promotion?.promotion}% Giảm`}
                  </span>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="tour-item__price--old ">
                  Giá{" "}
                  <span className="tour-item__price--old__number">
                    {`${data?.tourInfo.adultPrice} $`}
                  </span>
                </div>
                <div className="tour-item__price--current">
                  <span className="tour-item__price--current__number pe-2 mb-0">
                    {`Giá tour: ${data?.tourInfo.adultPrice} $`}
                  </span>
                  <span className="tour-item__price--current__discount small p-1 d-none">
                    {`${promotion?.promotion}% Giảm`}
                  </span>
                </div>
              </React.Fragment>
            )}
            <div className="tour-item__price__timer py-2 d-none">
              Count down
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer tour-item__footer px-3 mb-2 w-100 d-inline-flex justify-content-between align-items-center">
        <div className="tour-item__footer__available-seat d-inline-flex align-items-center">
          <div className="tour-item__footer__available-seat--text me-1">
            Số chỗ còn
          </div>
          <div className="tour-item__footer__available-seat--number">
            {slotLeft}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CardTour;
