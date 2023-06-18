import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../NewsCard/NewsCard";
import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";


const ListNews = ({ dataInfo }) => {
  const [dataValue, setDataValue] = useState(dataInfo);
  const [status, setStatus] = React.useState(2);
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data.newsName !== "" && Number(data.status) !== 2) {
      const newData = dataInfo.filter((item) =>
        item.title
          .toLowerCase()
          .includes(
            data.newsName.toLowerCase() && item.status === Number(data.status)
          )
      );
      setDataValue(newData);
    } else if (data.newsName !== "" && Number(data.status) === 2) {
      const newData = dataInfo.filter((item) =>
        item.title.toLowerCase().includes(data.newsName.toLowerCase())
      );
      setDataValue(newData);
    } else if (data.newsName.length === 0 && Number(data.status) !== 2) {
      const newData = dataInfo.filter((item) => {
        return item.status === Number(data.status);
      });
      setDataValue(newData);
    } else if (data.newsName.length === 0 && Number(data.status) === 2) {
      setDataValue(dataInfo);
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
        <Col xs={6}>
          <Button
            variant="contained"
            style={{ marginBottom: "8px", float: "right" }}
            endIcon={<AddIcon />}
            onClick={() => navigate("/admin/news/add")}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        {dataValue &&
          dataValue.map((row, index) => (
            <Col xs={3} className="p-1" key={index}>
              <NewsCard data={row}></NewsCard>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListNews;
