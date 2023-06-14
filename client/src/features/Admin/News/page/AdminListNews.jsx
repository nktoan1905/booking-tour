import React from "react";
import VerticalsTabs from "../components/VerticalsTabs";
import { Button } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const AdminListNews = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "List News";
  });
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <VerticalsTabs />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AdminListNews;
