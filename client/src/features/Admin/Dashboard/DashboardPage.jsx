import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const DashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4} xs={12}>
          Doanh thu ngày
        </Col>
        <Col md={4} xs={12}>
          Doanh thu tháng
        </Col>
        <Col md={4} xs={12}>
          Doanh thu năm
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          newest contact
        </Col>
        <Col md={6} xs={12}>
          newest account
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
