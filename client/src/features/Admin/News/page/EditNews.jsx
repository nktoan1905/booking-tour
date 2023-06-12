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
import { useNavigate, useParams } from "react-router-dom";
import JoiEditor from "../../../../components/Editor/JoiEditor";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { getImagePublicIdOfNewsImageFolder } from "../../../../Helper/StringHelper";
import { updateNewsContent } from "../../../../redux/api/newsApiHandler";
import { toast } from "react-toastify";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    categoryId: yup.number().required("Category id is required"),
  })
  .required();

const EditNews = () => {
  const { newsId } = useParams();

  const dataNewsList = useSelector((state) => state.news.news.listNews);
  const dataNews = dataNewsList.find((item) => item.id === Number(newsId));

  const [value, setValue] = useState(dataNews.content);
  const [categoryId, setCategoryId] = useState(dataNews.type.id);

  const [imageSelected, setImageSelected] = useState({
    file: null,
    url: dataNews.image,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newsCategories = useSelector(
    (state) => state.news.newsCategories.listNewsCategories
  );

  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const currentUser = useSelector(
    (state) => state.auth.login.currentUser?.user
  );
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    let urlImage;
    if (imageSelected.file) {
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
          urlImage = res.data.url; // new url
        });
      const publicId = dataNews.imageName;
      const cloudName = "dlu4c764b";
      const timestamp = Math.round(new Date().getTime() / 1000);
      const apiKey = "645973345167519";
      const apiSecret = "IrM4EOrDTXOYf6gvMOFREDIqJRY";
      const signature = CryptoJS.SHA1(
        `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
      ).toString();
      const deleteUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
      await axios.post(deleteUrl, {
        public_id: publicId,
        timestamp: timestamp,
        api_key: apiKey,
        signature: signature,
      });
    }
    const newsData = {
      title: data.title,
      categoryId: Number(data.categoryId),
      content: value,
      image: urlImage ? urlImage : dataNews.image,
      imageName: urlImage
        ? getImagePublicIdOfNewsImageFolder(urlImage)
        : dataNews.imageName,
    };
    await updateNewsContent(
      dispatch,
      toast,
      currentUserAccessToken,
      navigate,
      newsId,
      newsData
    );
  };

  useEffect(() => {
    document.title = "Edit news";
    if (currentUser.id !== dataNews.userInfo.id) {
      navigate("/not-found");
    }
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
                    defaultValue={dataNews.title}
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
                  endIcon={<UpgradeIcon />}
                >
                  Update
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default EditNews;
