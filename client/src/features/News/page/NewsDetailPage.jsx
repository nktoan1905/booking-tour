import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import HTMLReactParser from "html-react-parser";
import { useSelector } from "react-redux";

const NewsDetailPage = () => {
  const listNews = useSelector((state) => state.news.news.listNews);
  const listNewestNews = listNews.slice(0, 8);
  const { newsId } = useParams();
  const dataNews = listNews.find((item) => item.id === Number(newsId));

  return (
    <Container as="article">
      <Row as="header" className="news-detail__heading py-5">
        <Row className="">
          <Col md={8} sm={12}>
            <h1 className="news-detail__title fw-bold">{dataNews.title}</h1>
            <div className="news-detail__meta">
              <span className="news-detail__meta__category fw-bold me-2">
                <Link
                  to={`/news/${dataNews.type.url}`}
                  className="text-decoration-none"
                >
                  {dataNews.type.name}
                </Link>
              </span>
              <span className="card-text text-muted">
                <small className="news__new-thread__date">13/06/2023</small>
              </span>
            </div>
          </Col>
        </Row>
      </Row>
      <Row as="section" className="news-detail__body mb-5">
        <Row>
          <Col md={8} sm={12}>
            {HTMLReactParser(dataNews.content)}
          </Col>
          <Col md={4} sm={12}>
            <div className="news-mini mb-2 fs-5">Tin mới</div>
            <div className="newestNews">
              <ul class="list-group">
                {listNewestNews.map((item) => (
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center fs-6 mt-1 ms-2"
                    style={{ padding: "0" }}
                  >
                    <Link
                      to={`/news/${item.type.url}/${item.id}`}
                      className="text-decoration-none"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default NewsDetailPage;
