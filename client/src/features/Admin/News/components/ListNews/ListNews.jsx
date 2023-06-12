import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../NewsCard/NewsCard";
import {
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
const ListNews = ({ dataInfo }) => {
  const [dataValue, setDataValue] = useState(dataInfo);
  const [status, setStatus] = React.useState(2);
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    if (data.newsName !== "" && data.status !== 2) {
      console.log(1);
      const newData = dataValue.filter((item) =>
        item.title
          .toLowerCase()
          .includes(data.newsName.toLowerCase() && item.status === status)
      );
      setDataValue(newData);
    } else if (data.newsName !== "" && data.status === 2) {
      console.log(2);
      const newData = dataValue.filter((item) =>
        item.title.toLowerCase().includes(data.newsName.toLowerCase())
      );
      setDataValue(newData);
    } else if (dataValue.newsName === "" && data.status !== 2) {
      console.log(3);

      const newData = dataValue.filter((item) => item.status === status);
      setDataValue(newData);
    } else if (dataValue.newsName === "" && data.status === 2) {
      console.log(4);
      setDataValue(data);
    }
  };
  return (
    <Container>
      <Row>
        <Col
          xs={6}
          className="mb-3"
          as="form"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <InputBase
            sx={{
              ml: 1,
              mr: 2,
              p: 0.5,
              flex: 1,
              border: "1px solid #000",
              borderRadius: "5px",
            }}
            placeholder="Tìm kiếm news"
            inputProps={{ "aria-label": "tìm kiếm news" }}
            name="newsName"
            id="newsName"
            {...register("newsName")}
          />
          <FormControl size="small">
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={status}
              label="Status"
              {...register("status")}
            >
              <MenuItem value={2}>Full</MenuItem>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Col>
        <Col xs={3}></Col>
      </Row>
      <Row>
        {dataValue &&
          dataValue.map((row) => (
            <Col xs={3} className="p-1">
              <NewsCard data={row}></NewsCard>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListNews;
