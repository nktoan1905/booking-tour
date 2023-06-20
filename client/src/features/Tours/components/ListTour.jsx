import React, { useState } from "react";
import "./style.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ListTour = ({ filterOptions }) => {
  console.log("list tour", filterOptions);
  const [order, setOrder] = useState(1);
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  return (
    <React.Fragment>
      <section className="mb-3">
        <h1 className="py-4 h2 fw-bold heading text-center">
          Danh sách tour du lịch Bình Dương Khơi hành từ Đà nẵng
        </h1>
        <section className="promotion-search-result__result">
          <div className="d-none d-lg-block">
            <div className="order-by">
              <div className="order-by-title">
                Chúng tôi tìm thấy <strong>35</strong> tours cho Quý khách
              </div>
              <div className="order-by-left">
                <div className="order-wrap">
                  <span>Sắp xếp theo</span>
                  <FormControl fullWidth  size="small">
                    <InputLabel id="demo-simple-select-label">
                      Sắp xếp
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={order}
                      label="Age"
                      onChange={handleChangeOrder}
                    >
                      <MenuItem value={1}>Giá từ thấp đến cao</MenuItem>
                      <MenuItem value={2}>Giá từ cao đến thấp</MenuItem>
                      <MenuItem value={3}>Giảm giá nhiều</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default ListTour;
