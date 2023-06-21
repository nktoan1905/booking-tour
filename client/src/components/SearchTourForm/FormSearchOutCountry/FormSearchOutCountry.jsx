import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    startPlaceCity: yup.string().required("Start place is required"),
    endPlaceCountry: yup.string().required("End place is required"),
    duration: yup.string().required("Tour duration is required"),
  })
  .required();

const FormSeachOutCountry = ({ cities, countries }) => {
  const [date, setDate] = React.useState(dayjs(Date.now()));
  const navigate = useNavigate();
  const optionsCities = cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));
  const optionsCountries = countries.map((country) => ({
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
  const getValueFromLabel = (label, options) => {
    const res = options.find((option) => option.label === label);
    return res ? res.value : null;
  };
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const handleOnSubmit = (data, event) => {
    event.preventDefault();
    const newData = {
      startPlaceCity: getValueFromLabel(data.startPlaceCity, optionsCities),
      endPlaceCountry: getValueFromLabel(
        data.endPlaceCountry,
        optionsCountries
      ),
      duration: getValueFromLabel(data.duration, optionsDurations),
      date: dayjs(date).format("DD-MM-YYYY"),
    };
    navigate(
      `/tours/search/${newData.startPlaceCity}/${newData.endPlaceCountry}/${newData.date}/${newData.duration}/0`
    );
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Container>
        <Row>
          <div className="col-6">
            <Row className="destination-selector gx-0">
              <div className="col-5">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={optionsCities}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  autoHighlight
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Thành phố"
                      error={!!errors["startPlaceCity"]}
                      helperText={
                        errors["startPlaceCity"]
                          ? errors["startPlaceCity"].message
                          : ""
                      }
                      {...register("startPlaceCity")}
                    />
                  )}
                />
              </div>
              <div className="col-2 d-inline-flex justify-content-center align-items-center">
                <SwapHorizIcon></SwapHorizIcon>
              </div>
              <div className="col-5">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={optionsCountries}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  autoHighlight
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Nước"
                      error={!!errors["endPlaceCountry"]}
                      helperText={
                        errors["endPlaceCountry"]
                          ? errors["endPlaceCountry"].message
                          : ""
                      }
                      {...register("endPlaceCountry")}
                    />
                  )}
                />
              </div>
            </Row>
          </div>
          <div className="col-3">
            <DatePicker
              label="Chọn ngày đi"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </div>
          <div className="col-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={optionsDurations}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              autoHighlight
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Số ngày đi"
                  error={!!errors["duration"]}
                  helperText={
                    errors["duration"] ? errors["duration"].message : ""
                  }
                  {...register("duration")}
                />
              )}
            />
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <Button type="submit" variant="primary" className="h-100">
              <SearchIcon></SearchIcon>
            </Button>
          </div>
        </Row>
      </Container>
    </form>
  );
};

export default FormSeachOutCountry;
