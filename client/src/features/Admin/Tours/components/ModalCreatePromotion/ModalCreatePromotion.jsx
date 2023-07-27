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
import { createNewCategory } from "../../../../../redux/api/categoryApiHandler";
import { toast } from "react-toastify";
import { createPromotion } from "../../../../../redux/api/promotionApiHandler";

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
    name: yup.string().required("Promotion name is required"),
    promotion: yup
      .number()
      .typeError("Must specify a number")
      .required("Disount value is required"),
    forObject: yup.number().required(""),
  })
  .required();
const ModalCreatePromotion = ({ open, handleClose }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await createPromotion(dispatch, toast, data, currentUserAccessToken);
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
          Create new promotion
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
            label="Promotion name"
            name="name"
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
          <TextField
            margin="normal"
            fullWidth
            type="number"
            label="Discount"
            name="promotion"
            error={!!errors["promotion"]}
            helperText={errors["promotion"] ? errors["promotion"].message : ""}
            {...register("promotion")}
          />
          <FormControl fullWidth className="mt-3">
            <InputLabel id="status">For object</InputLabel>
            <Select
              fullWidth
              label="For object"
              labelId="forObject"
              name="forObject"
              defaultValue={1}
              error={!!errors["forObject"]}
              helpertext={
                errors["forObject"] ? errors["forObject"].message : ""
              }
              {...register("forObject")}
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Emloyee</MenuItem>
              <MenuItem value={3}>Member</MenuItem>
              <MenuItem value={4}>Siver Member</MenuItem>
              <MenuItem value={5}>Golden Member</MenuItem>
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

export default ModalCreatePromotion;
