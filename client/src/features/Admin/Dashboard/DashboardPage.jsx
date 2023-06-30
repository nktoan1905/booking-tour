import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OrdersAdmin } from "./component/OrdersAdmin";
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
        <Col  xs={12}>
          <OrdersAdmin />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
