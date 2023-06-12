import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import JoiEditor from "../../../../components/Editor/JoiEditor";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { getImagePublicIdOfNewsImageFolder } from "../../../../Helper/StringHelper";
import { toast } from "react-toastify";
import { createNews } from "../../../../redux/api/newsApiHandler";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    categoryId: yup.number().required("Category id is required"),
  })
  .required();

const AddNews = () => {
  const [value, setValue] = useState("");
  const [categoryId, setCategoryId] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newsCategories = useSelector(
    (state) => state.news.newsCategories.listNewsCategories
  );

  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  const [imageSelected, setImageSelected] = useState({
    file: null,
    url: "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
  });

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    let urlImage;
    // upload image
    if (!imageSelected.file) {
      toast.error("Failed");
      return;
    }
    const formData = new FormData();
    formData.append("file", imageSelected.file);
    formData.append("upload_preset", "kifxio8y");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/dlu4c764b/image/upload",
        formData,
        { params: { folder: "newsImage" } }
      )
      .then((res) => {
        setImageSelected({ ...imageSelected, url: res.data.url });
        urlImage = res.data.url;
      });
    const newsData = {
      title: data.title,
      categoryId: Number(data.categoryId),
      content: value,
      image: urlImage,
      imageName: getImagePublicIdOfNewsImageFolder(urlImage),
    };
    console.log(newsData);
    await createNews(
      dispatch,
      toast,
      navigate,
      newsData,
      currentUserAccessToken
    );
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  useEffect(() => {
    document.title = "Add news";
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col sx={12}>
          <Button
            variant="contained"
            endIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            className="mb-3"
          >
            Back
          </Button>
        </Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col xs={12} sm={3}>
              <div>
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src={imageSelected.url}
                    className="object-fit-scale border rounded"
                    alt="example placeholder"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-primary btn-rounded">
                    <label
                      className="form-label text-white m-1"
                      for="customFile2"
                    >
                      Choose file
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile2"
                      onChange={(e) =>
                        setImageSelected({
                          file: e.target.files[0],
                          url: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={9}
              as="form"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <Row>
                <Col xs={12} sm={8}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label={
                      <span className="d-flex">
                        Tiêu đề <p className="text-danger opacity-75">(*)</p>
                      </span>
                    }
                    name="title"
                    size="small"
                    error={!!errors["title"]}
                    helperText={errors["title"] ? errors["title"].message : ""}
                    {...register("title")}
                  />
                </Col>
                <Col xs={8} sm={4}>
                  <FormControl
                    fullWidth
                    size="small"
                    style={{ marginTop: "15px" }}
                  >
                    <InputLabel id="news-category">Category</InputLabel>
                    <Select
                      labelId="news-category"
                      id="news-category"
                      label="Category"
                      defaultValue={categoryId}
                      {...register("categoryId")}
                    >
                      {newsCategories.map((category) => (
                        <MenuItem value={category.id}>{category.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Col xs={12}>
                <JoiEditor content={value} setContent={setValue}></JoiEditor>
              </Col>
              <Col xs={12} className="mt-3">
                <Button
                  variant="contained"
                  className="float-end"
                  type="submit"
                  endIcon={<AddIcon />}
                >
                  Create
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default AddNews;
