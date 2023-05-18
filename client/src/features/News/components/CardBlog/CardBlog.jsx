import React from "react";
import "./style.css";
const CardBlog = ({ data }) => {
  return (
    <div class="card-container">
      <div class="card-image">
        <img src={data.image} alt={data.imageName} />
      </div>
      <div class="card-body">
        <span class="card-badge card-badge-blue">{data.type.name}</span>
        <h1>{data.title}</h1>
        <p class="card-subtitle">{data.title}</p>
        {/* <div class="card-author">
          <img src={data.userInfo.avatar} alt="author avatar" />
          <div class="author-info">
            <p class="author-name">{data.userInfo.fullName}</p>
            <p class="post-timestamp">{data.createdAt}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardBlog;
