import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OrdersAdmin } from "./component/OrdersAdmin";
const DashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <OrdersAdmin />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
