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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../../../redux/api/contactApiHandler";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import Editor from "../../../../components/Editor/EditorInput";
const schema = yup
  .object({
    fullName: yup.string().required("Full name is required."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is invalid."),
    phoneNumber: yup.string().required("Phone number is required."),
    companyName: yup.string(),
    countCustomer: yup
      .number("Count customer is a number.")
      .required("Count customer is required"),
    address: yup.string(),
    title: yup.string().required("Title is required."),
  })
  .required();

const FormContact = () => {
  const contacTypes = useSelector(
    (state) => state.contact.contactType?.listContactType
  );
  const [valueContent, setValueContent] = useState("");
  const dispatch = useDispatch();
  const create = useSelector((state) => state.contact.create);
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await createContact(dispatch, toast, {...data, content: valueContent});
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      setValueContent("")
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <Row style={{ width: "80%" }}>
      <Container as="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <Row>
          <Col md={4} sm={12}>
            <FormControl fullWidth className="mt-3" size="small">
              <InputLabel id="TypeContact">Loại thông tin</InputLabel>
              <Select
                fullWidth
                label="Role Name"
                labelId="TypeContact"
                name="typeContact"
                defaultValue={1}
                {...register("typeContact")}
              >
                {contacTypes.map((type) => (
                  <MenuItem value={type.id}>{type.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
          <Col md={4} sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label={
                <span className="d-flex">
                  Họ và tên <p className="text-danger opacity-75">(*)</p>
                </span>
              }
              name="fullName"
              size="small"
              error={!!errors["fullName"]}
              helperText={errors["fullName"] ? errors["fullName"].message : ""}
              {...register("fullName")}
            />
          </Col>
          <Col md={4} sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label={
                <span className="d-flex">
                  Địa chỉ email <p className="text-danger opacity-75">(*)</p>
                </span>
              }
              name="email"
              size="small"
              error={!!errors["email"]}
              helperText={errors["email"] ? errors["email"].message : ""}
              {...register("email")}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label={
                <span className="d-flex">
                  Số điện thoại <p className="text-danger opacity-75">(*)</p>
                </span>
              }
              name="phoneNumber"
              size="small"
              error={!!errors["phoneNumber"]}
              helperText={
                errors["phoneNumber"] ? errors["phoneNumber"].message : ""
              }
              {...register("phoneNumber")}
            />
          </Col>
          <Col md={4} sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Tên công ty"
              name="companyName"
              size="small"
              error={!!errors["companyName"]}
              helperText={
                errors["companyName"] ? errors["companyName"].message : ""
              }
              {...register("companyName")}
            />
          </Col>
          <Col md={4} sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Số khách"
              name="countCustomer"
              size="small"
              error={!!errors["countCustomer"]}
              helperText={
                errors["countCustomer"] ? errors["countCustomer"].message : ""
              }
              {...register("countCustomer")}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <TextField
              fullWidth
              margin="normal"
              label={<span className="d-flex">Địa chỉ</span>}
              name="address"
              size="small"
              error={!!errors["address"]}
              helperText={errors["address"] ? errors["address"].message : ""}
              {...register("address")}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
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
        </Row>
        <Row>
          <Col sm={12}>
            <Editor value={valueContent} setValue={setValueContent}></Editor>
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm={3}>
            {create.isFetching ? (
              <LoadingButton
                size="small"
                endIcon={<SendIcon />}
                loading={create.isFetching}
                loadingPosition="end"
                variant="contained"
              >
                Gửi
              </LoadingButton>
            ) : (
              <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon></SendIcon>}
              >
                Gửi
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default FormContact;
