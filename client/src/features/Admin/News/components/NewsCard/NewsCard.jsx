import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import moment from "moment";
const NewsCard = ({ data }) => {
  const fullName = data.userInfo.fullName.split(' ');
  const name = fullName[fullName.length - 1];
  return (
    <div className="card">
      <div className="header">
        <div
          className="image"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span className="tag">{data.type.name}</span>
        </div>
        <div className="date">
          <span>{moment(data.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="info">
        <Link
          rel="noopener noreferrer"
          to={`/admin/news/${data.id}`}
          className="block text-decoration-none"
        >
          <span className="title">{data.title}</span>
        </Link>
        <div className="footer">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            className="avatar"
          ></img>
          <p className="footer-info">
            Tạo bởi <span className="by-name">{name}</span> vào{" "}
            <span className="date">{moment(data.createdAt).format("L")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
