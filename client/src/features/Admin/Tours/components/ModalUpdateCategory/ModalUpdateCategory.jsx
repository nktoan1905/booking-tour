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
import {
  createNewCategory,
  updateCategory,
} from "../../../../../redux/api/categoryApiHandler";
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
    name: yup.string().required("Category name is required"),
  })
  .required();
const ModalUpdateCategory = ({ open, handleClose, value }) => {
  // ...
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
    // await createNewCategory(dispatch, toast, data, currentUserAccessToken);
    await updateCategory(
      dispatch,
      toast,
      data,
      value.id,
      currentUserAccessToken
    );
    handleClose();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  // console.log(value);
  useEffect(() => {
    // Cập nhật giá trị defaultValue khi selectedCategory thay đổi
    reset({
      name: value?.name || "", // Giá trị mặc định là rỗng nếu không có selectedCategory hoặc selectedCategory không có trường name
    });
  }, [reset, value]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create new category
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
            label="Category name"
            name="name"
            defaultValue={value?.name}
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
          <FormControl fullWidth className="mt-3">
            <InputLabel id="status">status</InputLabel>
            <Select
              fullWidth
              label="Status"
              labelId="status"
              name="status"
              defaultValue={value.status}
              error={!!errors["status"]}
              helpertext={
                errors["status"] ? errors["status"].message : ""
              }
              {...register("status")}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {"Update"}
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalUpdateCategory;
