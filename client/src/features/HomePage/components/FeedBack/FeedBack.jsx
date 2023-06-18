/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, Rate } from "antd";
import "./style.css";

const FeedBack = () => {
  const binhluans = [
    {
      id: 1,
      tourId: 1,
      userId: 1,
      feedback:
        "tuyệt vời trải nghiệm khó quên mong rằng mõi người đặt tour thật nhiều để web phát triển",
      star: 5,
      loadhome: 1,
      status: 1,
      userData: {
        avatar:
          "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-1/16142309_667985890050244_370131090873379996_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcRrm0c0ikUAX_1iPM6&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCCm7KrnxaGnfmSHFgX5RabvhMBd46aM-CWmrgzhiQlAA&oe=647237C8",
        name: "Nguyễn Khánh Toàn",
      },
    },
    {
      id: 2,
      tourId: 1,
      userId: 1,
      feedback:
        "tuyệt vời trải nghiệm khó quên mong rằng mõi người đặt tour thật nhiều để web phát triển",
      star: 5,
      loadhome: 1,
      status: 1,
      userData: {
        avatar:
          "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-1/16142309_667985890050244_370131090873379996_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcRrm0c0ikUAX_1iPM6&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCCm7KrnxaGnfmSHFgX5RabvhMBd46aM-CWmrgzhiQlAA&oe=647237C8",
        name: "Nguyễn Khánh Toàn",
      },
    },
    {
      id: 2,
      tourId: 1,
      userId: 1,
      feedback:
        "tuyệt vời trải nghiệm khó quên mong rằng mõi người đặt tour thật nhiều để web phát triển",
      star: 5,
      loadhome: 1,
      status: 1,
      userData: {
        avatar:
          "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-1/16142309_667985890050244_370131090873379996_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KcRrm0c0ikUAX_1iPM6&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCCm7KrnxaGnfmSHFgX5RabvhMBd46aM-CWmrgzhiQlAA&oe=647237C8",
        name: "Nguyễn Khánh Toàn",
      },
    },
  ];
  var binhluan = [];
  if (binhluans) {
    for (let i = 0; i < binhluans.length; i++) {
      if (binhluans[i].status === 1 && binhluans[i].loadhome === 1) {
        binhluan.push(binhluans[i]);
      }
    }
  }
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
                {!binhluans
                  ? ""
                  : binhluan.map((ok) => (
                      <div className="col-md-4" key={ok.id}>
                        <div className="content-yk text-center rounded ">
                          <p className="b-inline">
                            <i className="fa fa-quote-left mr-3"></i>
                            {ok.feedback}
                            <i className="fa fa-quote-right ml-3"></i>
                          </p>
                        </div>
                        <div className="avatar-yk text-center">
                          <Avatar
                            className="mt-3 mb-2"
                            src={ok.userData.avatar}
                          />
                          <br />
                          <strong>{ok.userData.name}</strong>
                          <br />
                          <Rate value={ok.star} disabled />
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
