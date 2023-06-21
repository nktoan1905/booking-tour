import React from "react";
import TourCard from "../../../../../components/TourCard/TourCar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ListTour = () => {
  const navigate = useNavigate();
  const tours = useSelector((state) => state.tours.tours.tours);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="mb-2">
          <Button
            className="float-end"
            variant="primary"
            onClick={() => navigate("/admin/tours/add")}
          >
            Thêm tour mới
          </Button>
        </Col>
      </Row>
      <Row>
        {tours && tours.map((item) => (
          <Col xl={12} xxl={4} className="mb-2">
            <TourCard data={item}></TourCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListTour;
