import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import moment from "moment";
import HTMLReactParser from "html-react-parser";

const CardNews = ({ data }) => {

  const subtitle = HTMLReactParser(data.content);
  return (
    <Col
      xs={12}
      as="article"
      className="news__list__item card card-full hover-a py-4"
    >
      <Row>
        <Col md={4} sm={12}>
          <div className="news__list__item__image-wrapper">
            <Link
              to={`/news/${data.type.url}/${data.id}`}
              className="text-decoration-none"
            >
              <img
                src={data.image}
                alt={data.imageName}
                className="img-responsive pic-news-l"
              ></img>
            </Link>
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="card-body">
            <h3 className="card-title h2 h3-sm h2-md fw-bold mb-3">
              <Link
                className="text-decoration-none fs-5"
                to={`/news/${data.type.url}/${data.id}`}
              >
                {data.title}
              </Link>
            </h3>
            <div className="card-text mb-2 text-muted small mb-3">
              <span className="d-none d-sm-inline me-1">
                <Link
                  to={`/news/${data.type.url}`}
                  className="news__new-thread__category fw-bold text-decoration-none"
                >
                  {data.type.name}
                </Link>
              </span>
              <small>{moment(data.createdAt).format("L")}</small>
            </div>
            <p className="card-text fs-6" style={{ color: "#2d4271" }}>
              {subtitle[0].props.children}
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default CardNews;
