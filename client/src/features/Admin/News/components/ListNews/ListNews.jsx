import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../NewsCard/NewsCard";
import { PaginationControl } from "react-bootstrap-pagination-control";
const ListNews = ({ listNews }) => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Row>
          
      </Row>
      <Row>
        <Col xs={12}>
          <PaginationControl
            page={page}
            between={4}
            total={250}
            limit={20}
            changePage={(page) => {
              setPage(page);
              console.log(page);
            }}
            ellipsis={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListNews;
