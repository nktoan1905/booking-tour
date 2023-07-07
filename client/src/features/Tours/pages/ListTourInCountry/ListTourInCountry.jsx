import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import tourApi from "../../../../api/tourApi";
import { useDispatch } from "react-redux";
import CardTour from "../../../HomePage/components/CardTour/CardTour";

const ListTourInCountry = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const res = await tourApi.getAllToursInCountry();
      console.log(res.data);
      setData(res.data);
    };
    fetch();
  }, []);
  return (
    <Container className="my-4">
      <Row>
        <div className="col fs-2 fw-bold text-center">
          Danh sách tour trong nước
        </div>
      </Row>
      <Row className="mt-3">
        {data.map((item, index) => (
          <Col xs={4} key={index}>
            <CardTour data={item} dispatch={dispatch}></CardTour>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListTourInCountry;
