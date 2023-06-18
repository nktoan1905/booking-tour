import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createCity } from "../../../../../redux/api/cityAndCountryApiHandler";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 30,
  p: 4,
};
const schema = yup
  .object({
    name: yup.string().required("City name is required"),
    countryId: yup.number().required("Country is required"),
  })
  .required();
const ModalCreateCity = ({ open, handleClose }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const countries = useSelector(
    (state) => state.cityAndCountries.countries.countries
  );
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await createCity(dispatch, toast, data, currentUserAccessToken);
    console.log("create", data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create new city
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component="form"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <TextField
            margin="normal"
            fullWidth
            label="City name"
            name="name"
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
          <FormControl fullWidth className="mt-3">
            <InputLabel id="countryId">Country name</InputLabel>
            <Select
              fullWidth
              label="Country name"
              labelId="countryId"
              name="countryId"
              defaultValue={1}
              error={!!errors["countryId"]}
              helpertext={
                errors["countryId"] ? errors["countryId"].message : ""
              }
              {...register("countryId")}
            >
              {countries.map((item) => (
                <MenuItem value={Number(item.id)} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {"Create"}
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalCreateCity;
