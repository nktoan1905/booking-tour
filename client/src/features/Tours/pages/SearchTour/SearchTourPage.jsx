import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormGroup,
  Slider,
  Switch,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";
import ListTour from "../../components/ListTour";
import { getIndexOfValueFromOptions } from "../../../../Helper/FIlterHelper";
import dayjs from "dayjs";

function valuetext(value) {
  return `${value}$`;
}
const SearchTourPage = () => {
  const navigate = useNavigate();
  const { startPlaceId, endPlaceId, date, duration, inCountry } = useParams();
  const [filterOptions, setFilterOptions] = useState({
    startPlaceId: Number(startPlaceId),
    endPlaceId: Number(endPlaceId),
    date: date,
    duration: Number(duration),
    inCountry: Number(inCountry),
    amountOfPeople: null,
    priceRange: [0, 1000],
    isHavePromotion: false,
    isHaveEmpty: true,
  });
  // Options
  const cites = useSelector((state) => state.cityAndCountries.cites.cites);
  var countries = useSelector(
    (state) => state.cityAndCountries.countries.countries
  );
  const cititesInVn = cites
    ? cites.filter((item) => item.countryInfo.id === 1)
    : [];
  const optionsStartPlace = cititesInVn.map((city) => ({
    label: city.name,
    value: city.id,
  }));
  const optionsCountries =
    countries &&
    countries.map((country) => ({
      label: country.name,
      value: country.id,
    }));
  const optionsDurations = [
    { label: "Tất cả", value: 0 },
    { label: "1 - 3 ngày", value: 1 },
    { label: "4 - 7 ngày", value: 2 },
    { label: "8 - 14 ngày", value: 3 },
    { label: "Trên 14 ngày", value: 4 },
  ];
  // range
  const minDistance = 10;
  const handleChangePriceRange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setFilterOptions((prevValues) => ({
        ...prevValues,
        priceRange: [
          Math.min(newValue[0], filterOptions.priceRange[1] - minDistance),
          filterOptions.priceRange[1],
        ],
      }));
      var currentUrl = window.location.href;
      var url = new URL(currentUrl);
      url.searchParams.set(
        "price",
        `${Math.min(newValue[0], filterOptions.priceRange[1] - minDistance)}-${
          filterOptions.priceRange[1]
        }`
      );
      window.history.replaceState({}, "", url.toString());
    } else {
      setFilterOptions((prevValues) => ({
        ...prevValues,
        priceRange: [
          filterOptions.priceRange[0],
          Math.max(newValue[1], filterOptions.priceRange[0] + minDistance),
        ],
      }));
      var currentUrl = window.location.href;
      var url = new URL(currentUrl);
      url.searchParams.set(
        "price",
        `${filterOptions.priceRange[0]}-${Math.max(
          newValue[1],
          filterOptions.priceRange[0] + minDistance
        )}`
      );
      window.history.replaceState({}, "", url.toString());
    }
  };
  const handleOnClickButtonDuration = (newValue) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      duration: newValue,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    // url.searchParams.set("so-nguoi", newValue);
    url.pathname = `/tours/search/${filterOptions.startPlaceId}/${filterOptions.endPlaceId}/${filterOptions.date}/${newValue}/${filterOptions.inCountry}`;
    window.history.replaceState({}, "", url.toString());
  };

  const handleOnClickButtonAmountOfPeoPle = (newValue) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      amountOfPeople: newValue,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    url.searchParams.set("so-nguoi", newValue);
    window.history.replaceState({}, "", url.toString());
  };
  const renderAutoCompeleteForIsInCountry = (inCountry) => {
    if (Number(inCountry)) {
      return (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={optionsStartPlace}
          value={
            optionsStartPlace[
              getIndexOfValueFromOptions(
                filterOptions.endPlaceId,
                optionsStartPlace
              )
            ]
          }
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={handleChangeEndPlace}
          clearIcon={false}
          autoHighlight
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Điểm đến"
              className="mt-4"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={optionsCountries}
          value={
            optionsCountries[
              getIndexOfValueFromOptions(
                filterOptions.endPlaceId,
                optionsCountries
              )
            ]
          }
          onChange={handleChangeEndPlace}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          clearIcon={false}
          autoHighlight
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Điểm đến"
              className="mt-4"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      );
    }
  };
  const renderPlaceName = (inCountry) => {
    if (Number(inCountry)) {
      return optionsStartPlace[
        getIndexOfValueFromOptions(filterOptions.endPlaceId, optionsStartPlace)
      ].label;
    } else {
      return optionsCountries[
        getIndexOfValueFromOptions(filterOptions.endPlaceId, optionsCountries)
      ].label;
    }
  };
  const handleChangeStartPlace = (event, newValue) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      startPlaceId: newValue?.value ? newValue.value : prevValues.startPlaceId,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    // url.searchParams.set("so-nguoi", newValue);
    url.pathname = `/tours/search/${newValue.value}/${filterOptions.endPlaceId}/${filterOptions.date}/${filterOptions.duration}/${filterOptions.inCountry}`;
    window.history.replaceState({}, "", url.toString());
  };
  const handleChangeEndPlace = (event, newValue) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      endPlaceId: newValue.value ? newValue.value : prevValues.startPlaceId,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    // url.searchParams.set("so-nguoi", newValue);
    url.pathname = `/tours/search/${filterOptions.startPlaceId}/${newValue.value}/${filterOptions.date}/${filterOptions.duration}/${filterOptions.inCountry}`;
    window.history.replaceState({}, "", url.toString());
  };
  const handleChangeSwitchPromotion = (event) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      isHavePromotion: event.target.checked,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    url.searchParams.set("promotion", event.target.checked ? 1 : 0);
    window.history.replaceState({}, "", url.toString());
  };
  const handleChangeSwitchEmpty = (event) => {
    setFilterOptions((prevValues) => ({
      ...prevValues,
      isHaveEmpty: event.target.checked,
    }));
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    url.searchParams.set("empty", event.target.checked ? 1 : 0);
    window.history.replaceState({}, "", url.toString());
  };
  return (
    <Container className="tour-search">
      <Row>
        <Col md={3} className="sidebar sidebar-filter">
          <div className="sidebar-inner">
            <div className="tour-search-result__filter__brand bg-light p-3 d-flex justify-content-between align-items-center">
              <span>Lọc kết quả</span>
            </div>
            <div className="tour-search-result__filter__heading px-3 py-2 d-flex justify-content-between align-items-center">
              <span className="fw-bold">
                {inCountry && renderPlaceName(inCountry)}
              </span>
            </div>
            <div className="px-3 py-4">
              <div className="start-to-stop mb-4">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={optionsStartPlace}
                  clearIcon={false}
                  value={
                    optionsStartPlace[
                      getIndexOfValueFromOptions(
                        filterOptions.startPlaceId,
                        optionsStartPlace
                      )
                    ]
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  onChange={handleChangeStartPlace}
                  autoHighlight
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Điểm đi"
                      variant="standard"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
                {renderAutoCompeleteForIsInCountry(inCountry)}
              </div>
              <div className="tour-search-result__filter__block mb-4">
                <h5 className="s-title mb-3">Số ngày</h5>
                <ButtonGroup>
                  <Row className="g-2">
                    <Col md={6}>
                      <Button
                        variant={
                          filterOptions.duration === 1
                            ? "contained"
                            : "outlined"
                        }
                        fullWidth
                        onClick={() => handleOnClickButtonDuration(1)}
                      >
                        1 - 3 ngày
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant={
                          filterOptions.duration === 2
                            ? "contained"
                            : "outlined"
                        }
                        fullWidth
                        onClick={() => handleOnClickButtonDuration(2)}
                      >
                        4 - 7 ngày
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant={
                          filterOptions.duration === 3
                            ? "contained"
                            : "outlined"
                        }
                        fullWidth
                        onClick={() => handleOnClickButtonDuration(3)}
                      >
                        8 - 14 ngày
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant={
                          filterOptions.duration === 4
                            ? "contained"
                            : "outlined"
                        }
                        fullWidth
                        onClick={() => handleOnClickButtonDuration(4)}
                      >
                        Trên 14 ngày
                      </Button>
                    </Col>
                  </Row>
                </ButtonGroup>
              </div>
              <h5 className="date-go-to-back-title s-title">Ngày đi</h5>
              <DatePicker
                label="Chọn ngày đi"
                value={dayjs(filterOptions.date, "DD-MM-YYYY")}
                onChange={(newValue) => {
                  setFilterOptions((prevValues) => ({
                    ...prevValues,
                    date: dayjs(newValue).format("DD-MM-YYYY"),
                  }));
                  var currentUrl = window.location.href;
                  var url = new URL(currentUrl);
                  // url.searchParams.set("so-nguoi", newValue);
                  url.pathname = `/tours/search/${filterOptions.startPlaceId}/${
                    filterOptions.endPlaceId
                  }/${dayjs(newValue).format("DD-MM-YYYY")}/${
                    filterOptions.duration
                  }/${filterOptions.inCountry}`;
                  window.history.replaceState({}, "", url.toString());
                }}
                className="mb-4"
              />
              <p className="s-mark-title mb-3">Bộ lọc tìm kiếm</p>

              <h5 className="s-title">Ngân sách của quý khách</h5>
              <div className="range-price giatien mb-3">
                <Slider
                  value={filterOptions.priceRange}
                  onChange={handleChangePriceRange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  step={10}
                  min={0}
                  max={1000}
                  disableSwap
                />
                <p>
                  <input
                    type="text"
                    className="range-input"
                    readOnly
                    placeholder={`${filterOptions.priceRange[0]}$ - ${filterOptions.priceRange[1]}$`}
                  />
                </p>
              </div>
              <h5 className="s-title d-none">Hiển thị những chuyến đi có</h5>
              <FormGroup className="d-none">
                <FormControlLabel
                  control={
                    <Switch
                      checked={filterOptions.isHavePromotion}
                      onChange={handleChangeSwitchPromotion}
                    />
                  }
                  label="Khuyến mại"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={filterOptions.isHaveEmpty}
                      onChange={handleChangeSwitchEmpty}
                    />
                  }
                  label="Còn chỗ"
                />
              </FormGroup>
            </div>
          </div>
        </Col>
        <Col md={9} className="main-content">
          <ListTour filterOptions={filterOptions}></ListTour>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchTourPage;
