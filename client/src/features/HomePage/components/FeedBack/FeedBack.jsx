/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Avatar } from "antd";
import "./style.css";
import Rating from "@mui/material/Rating";
import feedbackApi from "../../../../api/feedbackApi";

const FeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useState(() => {
    const fetch = async () => {
      const res = await feedbackApi.getAllFeedback();
      setFeedbacks(
        res.data.data.filter(
          (item) => item.loadhome === true && item.status === true
        )
      );
    };
    fetch();
  }, []);
  return (
    <div id="ykien">
      <div className="fixed-background">
        <div className="">
          <div className="mt-5 tour">
            <div className="heading text-center pt-5">
              <span
                style={{
                  fontSize: "2rem",
                  paddingTop: "2rem",
                  textTransform: "uppercase",
                }}
              >
                ý kiến khách hàng
              </span>
              <div className="hr"></div>
              <p className="mb-4">
                Những đánh giá của khách hàng sau khi trải nghiệm đặt tour trên
                website.
              </p>
            </div>
            <div className="container">
              <div className="row justify-content-center pb-5">
                {!feedbacks
                  ? ""
                  : feedbacks.map((ok, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="content-yk text-center rounded ">
                          <p className="b-inline">
                            <i className="fa fa-quote-left mr-3"></i>
                            {ok.content}
                            <i className="fa fa-quote-right ml-3"></i>
                          </p>
                        </div>
                        <div className="avatar-yk text-center">
                          <Avatar
                            className="mt-3 mb-2"
                            src={
                              ok.User.avatar
                                ? ok.User.avatar
                                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                          />
                          <br />
                          <strong>{ok.User.fullName}</strong>
                          <br />
                          <Rating value={ok.star} readOnly />
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="fixed-wrap">
              <div className="fixed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
