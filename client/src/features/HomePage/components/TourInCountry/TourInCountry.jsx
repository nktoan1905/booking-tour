import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getTourInCountry,
  getTourOurCountry,
  mergeArrays,
  mergeArraysTourAndStartPlace,
} from "../../../../Helper/FIlterHelper";
import CardTour from "../CardTour/CardTour";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const TourInCountry = () => {
  const departureDayAndTours = useSelector(
    (state) => state.departureDays.departureDaysAndTours.departureDaysAndTours
  );
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  const tours = useSelector((state) => state.tours.tours.tours);
  const currentDate = new Date();
  var res;
  var tourInCountry;
  var displayData;
  const feautureDay =
    departureDays &&
    departureDays.filter((item) => moment(item.dayStart).isAfter(currentDate));
  if (feautureDay && departureDayAndTours && tours) {
    res = mergeArraysTourAndStartPlace(
      feautureDay,
      departureDayAndTours,
      tours
    );
    tourInCountry = getTourInCountry(res);
    displayData = [].concat(...tourInCountry.map((item) => item.tours));
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  displayData =
    displayData &&
    displayData.filter((item) => {
      var ordered = 0;
      item.transactions.forEach((element) => {
        ordered += element.adultQty + element.childQty + element.babyQty;
      });
      return item.tourInfo.amount - ordered !== 0;
    });
  return (
    <Container className="my-4">
      <Row>
        <div className="col-12">
          <h3>Tour trong nước</h3>
        </div>
      </Row>
      {displayData && (
        <Row>
          <Col xs={12} md={4}>
            <CardTour data={displayData[0]} dispatch={dispatch}></CardTour>
          </Col>
          <Col xs={12} md={4}>
            <CardTour data={displayData[1]} dispatch={dispatch}></CardTour>
          </Col>
          <Col xs={12} md={4}>
            <CardTour data={displayData[2]} dispatch={dispatch}></CardTour>
          </Col>
        </Row>
      )}
      <Row>
        <div className="col-12">
          <Button
            endIcon={<ArrowForwardIcon />}
            className="float-end my-3"
            onClick={() => navigate("/tours/tour-in-country")}
          >
            Xem thêm
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default TourInCountry;
