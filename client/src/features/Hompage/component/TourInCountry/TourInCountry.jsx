import React from "react";
import { Rate, Spin, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
const TourInContry = () => {
  const tour = [
    {
      id: 1,
      Khuyenmais: [{ status: 1, name: 141, khuyenmai: 15 }],
      name: "Cửa lò - Quê bác",
      gianguoilon: 50000,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/test-8b330.appspot.com/o/imagestour%2Fs%C3%A0i%20g%C3%B2n.jpg?alt=media&token=fd61c62a-6072-4fcf-9872-b667b2b4d852",
    },
    {
      id: 1,
      Khuyenmais: [{ status: 1, name: 141, khuyenmai: 15 }],
      name: "Cửa lò - Quê bác",
      gianguoilon: 50000,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/test-8b330.appspot.com/o/imagestour%2Fs%C3%A0i%20g%C3%B2n.jpg?alt=media&token=fd61c62a-6072-4fcf-9872-b667b2b4d852",
    },
    {
      id: 1,
      Khuyenmais: [{ status: 1, name: 141, khuyenmai: 15 }],
      name: "Cửa lò - Quê bác",
      gianguoilon: 50000,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/test-8b330.appspot.com/o/imagestour%2Fs%C3%A0i%20g%C3%B2n.jpg?alt=media&token=fd61c62a-6072-4fcf-9872-b667b2b4d852",
    },
    {
      id: 1,
      Khuyenmais: [{ status: 1, name: 141, khuyenmai: 15 }],
      name: "Cửa lò - Quê bác",
      gianguoilon: 50000,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/test-8b330.appspot.com/o/imagestour%2Fs%C3%A0i%20g%C3%B2n.jpg?alt=media&token=fd61c62a-6072-4fcf-9872-b667b2b4d852",
    },
  ];
  const tinhkhuyenmai = (money, km) => {
    return (money - money * (km / 100)).toLocaleString();
  };
  return (
    <div className="mt-5 mb-5 tour" id="tour">
      <div className="heading text-center">
        <span style={{fontSize: "2rem", paddingTop: "2rem", textTransform: "uppercase"}}>du lịch trong nước</span>
        <div className="hr"></div>
        <p className="mb-4">
          Du lịch trong nước luôn là lựa chọn tuyệt vời. Những thành phố nhộn
          nhịp, nền văn hóa độc đáo và hấp dẫn.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {tour.length === 0 ? (
            <div className="spin">
              <Spin />
            </div>
          ) : (
            tour.map((ok) => (
              <div className="col-md-4 mb-2" key={ok.id}>
                {ok.Khuyenmais.length === 0 ? (
                  ""
                ) : ok.Khuyenmais[0].status === 0 ? (
                  ""
                ) : (
                  <Tooltip
                    placement="right"
                    color="#0abf55"
                    title={ok.Khuyenmais[0].name}
                  >
                    <div className="ribbon-wrapper">
                      <div className="ribbon-red">
                        Giảm {ok.Khuyenmais[0].khuyenmai}%
                      </div>
                    </div>
                  </Tooltip>
                )}
                <Link to={`/tour/${ok.id}`}>
                  <div className="img rounded">
                    <img src={ok.avatar} className="img-fluid" alt="" />
                  </div>
                  <div className="content_tour">
                    <div className="title_tour text-capitalize">{ok.name}</div>
                    <div className="star float-left">
                      <Rate value={4} disabled />
                    </div>
                    <div className="money float-left ml-3 text-warning">
                      {ok.Khuyenmais.length === 0 ? (
                        <div>
                          {ok.gianguoilon} VNĐ
                          <br />
                        </div>
                      ) : ok.Khuyenmais[0].status === 0 ? (
                        <div>
                          {ok.gianguoilon} VNĐ
                          <br />
                        </div>
                      ) : (
                        <div>
                          {tinhkhuyenmai(
                            ok.gianguoilon,
                            ok.Khuyenmais[0].khuyenmai
                          )}{" "}
                          VNĐ
                          <br />
                          <del> {ok.gianguoilon.toLocaleString()} VNĐ</del>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="xem-them mt-3">
        <Link to="/list-tour">Xem Thêm </Link>
      </div>
    </div>
  );
};

export default TourInContry;
