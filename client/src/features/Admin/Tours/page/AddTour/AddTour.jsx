import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import JoiEditor from "../../../../../components/Editor/JoiEditor";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getImagePublicIdOfToursImageFolder } from "../../../../../Helper/StringHelper";
import { useDispatch, useSelector } from "react-redux";
import { createNewTour } from "../../../../../redux/api/tourApiHandler";
import { toast } from "react-toastify";
const schema = yup
  .object({
    name: yup.string().required("Tour name is required"),
    adultPrice: yup
      .number()
      .typeError("Adult price  must be a number")
      .required("Adult price is required"),
    childPrice: yup
      .number()
      .typeError("Child price must be a number")
      .required("Child price is required"),
    babyPrice: yup
      .number()
      .typeError("Baby price  must be a number")
      .required("Baby price is required"),
    trailer: yup.string().required("Trailer is required"),
    map: yup.string().required("Map frame is required"),
    duration: yup
      .number()
      .typeError("Tour duration must be a number")
      .required("Tour duration is required"),
    amount: yup
      .number()
      .typeError("Tour amount customer must be a number")
      .required("Tour amount customer is required"),
  })
  .required();

const AddTour = () => {
  const [tourDetail, setTourDetail] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const cites = useSelector((state) => state.cityAndCountries.cites.cites);
  const cititesInVn = cites;
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
        { params: { folder: "toursImage" } }
      )
      .then((res) => {
        setImageSelected({ ...imageSelected, url: res.data.url });
        urlImage = res.data.url;
      });

    const newData = {
      ...data,
      thumbnail: urlImage,
      thumbnailName: getImagePublicIdOfToursImageFolder(urlImage),
      tourDetail: tourDetail,
      note: note,
      endPlace: cititesInVn.find((item) => item.id === Number(data.endPlace))
        .name,
      cityId: Number(data.endPlace),
    };
    await createNewTour(
      dispatch,
      toast,
      navigate,
      newData,
      currentUserAccessToken
    );
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  return (
    <Container fluid as="form" onSubmit={handleSubmit(handleOnSubmit)}>
      <Row className="mb-3">
        <Col>
          <Button size="sm" variant="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
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
                <label className="form-label text-white m-1" for="customFile2">
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
        <Col md={9}>
          <Row>
            <Col md={12}>
              <TextField
                fullWidth
                label="Tên tour"
                size="small"
                error={!!errors["name"]}
                helperText={errors["name"] ? errors["name"].message : ""}
                {...register("name")}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col xl={2} md={6} className="mt-3">
              <TextField
                fullWidth
                label="Giá người lớn"
                size="small"
                error={!!errors["adultPrice"]}
                helperText={
                  errors["adultPrice"] ? errors["adultPrice"].message : ""
                }
                {...register("adultPrice")}
              />
            </Col>
            <Col xl={2} md={6} className="mt-3">
              <TextField
                fullWidth
                label="Giá trẻ em"
                size="small"
                error={!!errors["childPrice"]}
                helperText={
                  errors["childPrice"] ? errors["childPrice"].message : ""
                }
                {...register("childPrice")}
              />
            </Col>
            <Col xl={2} md={6} className="mt-3">
              <TextField
                fullWidth
                label="Giá trẻ sơ sinh"
                size="small"
                error={!!errors["babyPrice"]}
                helperText={
                  errors["babyPrice"] ? errors["babyPrice"].message : ""
                }
                {...register("babyPrice")}
              />
            </Col>
            <Col xl={2} md={6} className="mt-3">
              <TextField
                fullWidth
                label="Thời gian tour"
                size="small"
                error={!!errors["duration"]}
                helperText={
                  errors["duration"] ? errors["duration"].message : ""
                }
                {...register("duration")}
              />
            </Col>
            <Col xl={2} md={6} className="mt-3">
              <TextField
                fullWidth
                label="Tổng số người tối đa"
                size="small"
                error={!!errors["amount"]}
                helperText={errors["amount"] ? errors["amount"].message : ""}
                {...register("amount")}
              />
            </Col>
            <Col xl={2} md={6} className="mt-3">
              <FormControl fullWidth size="small">
                <InputLabel id="status">Địa điểm</InputLabel>
                <Select
                  fullWidth
                  label="Start place"
                  labelId="Status"
                  name="endPlace"
                  defaultValue={1}
                  error={!!errors["endPlace"]}
                  helpertext={
                    errors["endPlace"] ? errors["endPlace"].message : ""
                  }
                  {...register("endPlace")}
                >
                  {cititesInVn.map((item) => (
                    <MenuItem value={item.id}> {item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                fullWidth
                label="Trailer"
                size="small"
                error={!!errors["trailer"]}
                helperText={errors["trailer"] ? errors["trailer"].message : ""}
                {...register("trailer")}
              />
            </Col>
            <Col md={6}>
              <TextField
                fullWidth
                label="Map"
                size="small"
                error={!!errors["map"]}
                helperText={errors["map"] ? errors["map"].message : ""}
                {...register("map")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xl={6} md={12}>
          <JoiEditor
            content={tourDetail}
            setContent={setTourDetail}
            placeholder={"Chi tiết tour"}
          ></JoiEditor>
        </Col>
        <Col xl={6} md={12}>
          <JoiEditor
            content={note}
            setContent={setNote}
            placeholder={"Chú ý"}
          ></JoiEditor>
        </Col>
      </Row>
      <Row className="mt-3">
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Row>
    </Container>
  );
};

export default AddTour;
