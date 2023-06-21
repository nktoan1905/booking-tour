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
import { createCity, createCountry } from "../../../../../redux/api/cityAndCountryApiHandler";
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
    name: yup.string().required("Country name is required"),
  })
  .required();
const ModalCreateCountry = ({ open, handleClose }) => {
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
    await createCountry(dispatch, toast, data, currentUserAccessToken);
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
            label="Country name"
            name="name"
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
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

export default ModalCreateCountry;
