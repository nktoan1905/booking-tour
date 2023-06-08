import React from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "./components/FormContact/FormContact";


const ContactFeature = () => {

  return (
    <CommonLayout>
      <Container style={{ marginBottom: "50px" }}>
        <Row>
          <Col sm={12} className="p-4">
            <h2 className="text-danger fw-blod"> Liên hệ</h2>
            <span className="fw-light text-muted">
              Để có thể đáp ứng được các yêu cầu và các ý kiến đóng góp của quý
              vị một cách nhanh chóng xin vui lòng liên hệ
            </span>
          </Col>
        </Row>
        <FormContact></FormContact>
      </Container>
    </CommonLayout>
  );
};

export default ContactFeature;
