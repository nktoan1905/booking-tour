import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ListServiceOfTour from "../../components/AddInfoComponents/ListServiceOfTour/ListServiceOfTour";
import { Button } from "@mui/material";
import ListCategoryOfTour from "../../components/AddInfoComponents/ListCategoryOfTour/ListCategoryOfTour";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListPromotionOfTour from "../../components/AddInfoComponents/ListPromotionOfTour/ListPromotionOfTour";
import ListDepartureDayOfTour from "../../components/AddInfoComponents/ListDepartureDayOfTour/ListDepartureDayOfTour";
import ListImageOfTour from "../../components/AddInfoComponents/ListImageOfTour/ListImageOfTour";
const AddInfo = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row className="mb-3">
        <div className="col-12">
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            endIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </div>
      </Row>
      <Row>
        <div className="col-12 col-sm-6 mt-3">
          <ListServiceOfTour></ListServiceOfTour>
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <ListCategoryOfTour></ListCategoryOfTour>
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <ListDepartureDayOfTour />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <ListPromotionOfTour></ListPromotionOfTour>
        </div>
        <div className="col-12 mt-3">
          <ListImageOfTour />
        </div>
      </Row>
    </Container>
  );
};

export default AddInfo;
