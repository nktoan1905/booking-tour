import React, { useEffect, useState } from "react";
import userApi from "../../../../api/userApi";
import { useSelector } from "react-redux";
import FeedbackCard from "../../components/FeedbackCard";
import { Container, Row, Col } from "react-bootstrap";

const UserFeedBacks = () => {
  const [feedback, setFeedback] = useState([]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await userApi.getUserFeedback(currentUserAccessToken);
      setFeedback(res.data.data);
    };
    fetchData();
    document.title = "Feedbacks";
  }, []);
  return (
    <Container
      className="my-3"
      style={{
        minHeight: "70vh",
      }}
    >
      <Row className="my-2">
        <Col>
          <div className="fw-bold fs-2">Các Feedback của bạn</div>
        </Col>
      </Row>
      <Row>
        {feedback.length > 0 &&
          feedback.map((item) => (
            <Col xs={4} className="mt-2">
              <FeedbackCard data={item}></FeedbackCard>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default UserFeedBacks;
