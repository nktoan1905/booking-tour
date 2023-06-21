import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EarlyList from "./EarlyList/EarlyList";
import CardNews from "./CardNews/CardNews";

const ListNews = ({ data }) => {
  const [dataScroll, setDataScrol] = useState(data?.slice(4));
  const earlyList = [data[0], data[1], data[2], data[3]];

  return (
    <Container>
      <Row>
        {data.length > 3 ? (
          <Col xs={12} as="section" className="mb-5">
            <EarlyList data={earlyList}></EarlyList>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Row as="section" className="mb-5">
        {dataScroll.map((item) => (
          <CardNews data={item}></CardNews>
        ))}
      </Row>
    </Container>
  );
};

export default ListNews;
