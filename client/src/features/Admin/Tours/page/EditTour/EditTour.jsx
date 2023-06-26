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
import JoiEditor from "../../../../../components/Editor/JoiEditor";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getImagePublicIdOfToursImageFolder } from "../../../../../Helper/StringHelper";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  createNewTour,
  updateTour,
} from "../../../../../redux/api/tourApiHandler";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";

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

const EditTour = () => {
  const { tourId } = useParams();
  const tours = useSelector((state) => state.tours.tours.tours);
  const cities = useSelector((state) => state.cityAndCountries.cites.cites);
  const tourDetailData = tours.find((item) => item.id === Number(tourId));
  const [tourDetail, setTourDetail] = useState(tourDetailData.tourDetail);
  const [note, setNote] = useState(tourDetailData.note);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const cites = useSelector((state) => state.cityAndCountries.cites.cites);
  const getCityIdByName = (cityName) => {
    const city = cities.find((c) => c.name === cityName);
    return city ? city.id : null;
  };
  const cititesInVn = cites.filter((item) => item.countryInfo.id === 1);
  const [imageSelected, setImageSelected] = useState({
    file: null,
    url: tourDetailData.thumbnail,
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
    if (imageSelected.file) {
      const publicId = tourDetailData.thumbnailName;
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
        });
    }

    const newData = {
      ...data,
      thumbnail: imageSelected.url,
      thumbnailName: getImagePublicIdOfToursImageFolder(imageSelected.url),
      tourDetail: tourDetail,
      note: note,
      endPlace: cititesInVn.find((item) => item.id === Number(data.endPlace))
        .name,
      cityId: Number(data.endPlace),
    };
    await updateTour(
      dispatch,
      toast,
      navigate,
      newData,
      tourDetailData.id,
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
          <Button
            size="small"
            variant="contained"
            onClick={() => navigate(-1)}
            endIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Col>
        <Col>
          <Button
            size="small"
            variant="contained"
            className="float-end"
            onClick={() =>
              navigate(`/admin/tours/${tourDetailData.id}/add-info`)
            }
          >
            Update Category
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
                defaultValue={tourDetailData.name}
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
                defaultValue={tourDetailData.adultPrice}
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
                defaultValue={tourDetailData.childPrice}
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
                defaultValue={tourDetailData.babyPrice}
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
                defaultValue={tourDetailData.duration}
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
                defaultValue={tourDetailData.amount}
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
                  defaultValue={getCityIdByName(tourDetailData.endPlace)}
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
                defaultValue={tourDetailData.trailer}
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
                defaultValue={tourDetailData.map}
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
        <Button variant="contained" type="submit">
          Update
        </Button>
      </Row>
    </Container>
  );
};
export default EditTour;
