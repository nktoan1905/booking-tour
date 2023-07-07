import { Avatar, Rate } from "antd";
import React from "react";
import Rating from "@mui/material/Rating";

const FeedbackCard = ({ data }) => {
  return (
    <React.Fragment>
      <div className="content-yk text-center rounded ">
        <p className="b-inline">
          <i className="fa fa-quote-left mr-3"></i>
          {data.content}
          <i className="fa fa-quote-right ml-3"></i>
        </p>
      </div>
      <div className="avatar-yk text-center">
        <Avatar className="mt-3 mb-2" src={data.User.avatar} />
        <br />
        <strong>{data.User.fullName}</strong>
        <br />
        <Rating value={data.star} />
      </div>
    </React.Fragment>
  );
};

export default FeedbackCard;
