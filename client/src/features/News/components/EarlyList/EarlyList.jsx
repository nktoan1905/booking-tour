import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import "./style.css";

const EarlyList = ({ data }) => {
  const threeNewsest = data.slice(1);
  return (
    <Row>
      <Col md={7} sm={12} className="mb-3">
        <article className="news__new-thread__big">
          <div className="news__new-thread__big__image-wrapper">
            <Link to={`/news/${data[0].type.url}/${data[0].id}`}>
              <img
                src={data[0].image}
                className="card-img-top"
                alt={data[0].imageName}
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="news__new-thread__category fw-bold mb-3">
              {data[0].type.name}
            </div>
            <h3 className="card-title news__new-thread__title fw-bold mb-3 h2 h3-sm h2-md">
              <Link
                to={`/news/${data[0].type.url}/${data[0].id}`}
                className="text-decoration-none"
              >
                {data[0].title}
              </Link>
            </h3>
            <div className="card-text">
              <small className="news__new-thread__date text-muted">
                {moment(data[0].createdAt).format("L")}
              </small>
            </div>
          </div>
        </article>
      </Col>
      <Col md={5} sm={12}>
        <Row className="d-flex flex-wrap">
          {threeNewsest.map((item) => (
            <Col as="article" className="news__new-thread__small mb-3" xs={12}>
              <div className="card" style={{ maxWidth: "100%" }}>
                <Row>
                  <Col md={5} sm={12} className="mb-3">
                    <div className="news__new-thread__small__image-wrapper">
                      <Link to={`/news/${item.type.url}/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.imageName}
                          className="card-img-top"
                        />
                      </Link>
                    </div>
                  </Col>
                  <Col md={7} sm={12}>
                    <div className="card-body">
                      <div className="news__new-thread__category fw-bold mb-2">
                        {item.type.name}
                      </div>
                      <h3 className="card-title news__new-thread__small__title h5 h6-sm h5-md fw-bold mb-2">
                        <Link to={`/news/${item.type.url}/${item.id}`} className="text-decoration-none">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="card-text">
                        <small className="news__new-thread__date text-muted">
                          {moment(item.createdAt).format("L")}
                        </small>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default EarlyList;
