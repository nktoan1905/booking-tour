import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FavoriteTourCard from "../../components/FavoriteTourCard/FavoriteTourCard";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../../../api/userApi";

const FavoriteTour = () => {
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const [flowingTours, setFlowingTours] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fecthData = async (currentUserAccessToken) => {
      const res = await userApi.getAllFlowingTour(currentUserAccessToken);
      setFlowingTours(res.data.data);
    };
    if (currentUserAccessToken) {
      fecthData(currentUserAccessToken);
    }
    document.title = "Favorite"
  }, []);
  return (
    <Container className="my-3" style={{ minHeight: "70vh" }}>
      <Row>
        <Col>
          <div className="fs-2 fw-bold">List tour mà bạn thích</div>
        </Col>
      </Row>
      <Row className="mt-3">
        {flowingTours.map((item, index) => (
          <Col xs={12} md={3} key={index}>
            <FavoriteTourCard
              data={item}
              dispatch={dispatch}
            ></FavoriteTourCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoriteTour;
