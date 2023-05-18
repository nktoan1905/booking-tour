import React from "react";
import "./style.css";
import CardBlog from "../../components/CardBlog/CardBlog";
import { useSelector } from "react-redux";
import "./style.css";
import { CardBlogV2 } from "../../components/CardBlogV2/CardBlogV2";
const ListNews = () => {
  const dataNews = useSelector((state) => state.news.newsList.newsList.data);
  return (
    <React.Fragment>
      <div className="row pt-3">
        <div className="col-sm">
          <CardBlog data={dataNews[0]}></CardBlog>
        </div>
        <div className="col-sm">
          <CardBlog data={dataNews[1]}></CardBlog>
        </div>
        <div className="col-sm">
          <CardBlog data={dataNews[2]}></CardBlog>
        </div>
      </div>
      <div className="row">
        <CardBlogV2 data={dataNews[3]}></CardBlogV2>
      </div>
    </React.Fragment>
  );
};

export default ListNews;
