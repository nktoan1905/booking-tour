import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export const CardBlogV2 = ({ data }) => {
  return (
    <article className="article-recent">
      <div className="article-recent-main">
        <h2 className="article-title">{data.title}</h2>
        <p className="article-body">{data.title}</p>
        <Link to="/tin-tuc/:categoryId/1" className="article-read-more">
          Đọc tiếp
        </Link>
      </div>
      <div className="article-recent-secondary">
        <img src={data.image} alt={data.imageName} className="article-image" />
        <p className="article-info">{data.createdAt}</p>
        <p className="card-badge card-badge-blue "> {data.type.name}</p>
      </div>
    </article>
  );
};
