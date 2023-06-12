import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="image">
          <span className="tag">Art</span>
        </div>
        <div className="date">
          <span>6 min ago</span>
        </div>
      </div>
      <div className="info">
        <Link
          rel="noopener noreferrer"
          to="/admin/news/1"
          className="block text-decoration-none"
        >
          <span className="title">Facere ipsa nulla corrupti praesentium </span>
        </Link>
        <div className="footer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="avatar"
          ></img>
          <p class="footer-info">
            Tạo bởi <span class="by-name">John Doe</span> vào{" "}
            <span class="date">25/05/23</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
