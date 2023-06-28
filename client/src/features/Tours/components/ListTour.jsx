import React, { useState } from "react";
import "./style.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterTour } from "../../../Helper/FIlterHelper.js";
import { Container, Row, Col } from "react-bootstrap";
import CardTour from "../../HomePage/components/CardTour/CardTour";

const ListTour = ({ filterOptions }) => {
  const [order, setOrder] = useState(1);
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  const cities = useSelector((state) => state.cityAndCountries.cites.cites);
  const countries = useSelector(
    (state) => state.cityAndCountries.countries.countries
  );
  const departureDayAndTours = useSelector(
    (state) => state.departureDays.departureDaysAndTours.departureDaysAndTours
  );
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  const tours = useSelector((state) => state.tours.tours.tours);

  const tourDeparureDayData =
    departureDays &&
    departureDays.map((item) => {
      const { dayStart, ...rest } = item;
      const tours =
        departureDayAndTours &&
        departureDayAndTours.filter((tour) => tour.dayStartId === item.id);
      return { dayStart, tours, ...rest };
    });
  if (tourDeparureDayData) {
    tourDeparureDayData.sort((a, b) => {
      const dayStartA = new Date(a.dayStart);
      const dayStartB = new Date(b.dayStart);
      if (dayStartA < dayStartB) {
        return -1;
      }
      if (dayStartA > dayStartB) {
        return 1;
      }
      return 0;
    });
  }
  const dispatch = useDispatch();
  const res = filterTour(
    filterOptions,
    tourDeparureDayData,
    tours,
    cities,
    countries
  );
  return (
    <React.Fragment>
      <section className="mb-3">
        {filterOptions.inCountry ? (
          <h1 className="py-4 h2 fw-bold heading text-center">
            {`Danh sách tour du lịch ${
              cities.find(
                (item) => item.id === Number(filterOptions.endPlaceId)
              ).name
            } Khởi hành từ ${
              cities.find(
                (item) => item.id === Number(filterOptions.startPlaceId)
              ).name
            }`}
          </h1>
        ) : (
          <h1 className="py-4 h2 fw-bold heading text-center">
            {`Danh sách tour du lịch ${
              countries.find(
                (item) => item.id === Number(filterOptions.endPlaceId)
              ).name
            } Khởi hành từ ${
              cities.find(
                (item) => item.id === Number(filterOptions.startPlaceId)
              ).name
            }`}
          </h1>
        )}
        <section className="promotion-search-result__result">
          <div className="d-none d-lg-block">
            <div className="order-by">
              <div className="order-by-title">
                Chúng tôi tìm thấy <strong>{res ? res.length : "0"}</strong>{" "}
                tours cho Quý khách
              </div>
              <div className="order-by-left">
                <div className="order-wrap">
                  <span>Sắp xếp theo</span>
                  <FormControl fullWidth size="small">
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
      <Container>
        <Row>
          {res &&
            res.map((item) => (
              <Col xs={4}>
                <CardTour data={item} dispatch={dispatch}></CardTour>
              </Col>
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ListTour;
