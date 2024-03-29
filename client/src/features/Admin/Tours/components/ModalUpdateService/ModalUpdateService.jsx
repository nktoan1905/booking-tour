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
import { updatePromotion } from "../../../../../redux/api/promotionApiHandler";
import { updateService } from "../../../../../redux/api/serviceApiHandler";

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
    description: yup.string().required("Description is required"),
    icon: yup.string().required("Icon class is required"),
  })
  .required();

const ModalUpdateService = ({ open, handleClose, value }) => {
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
    await updateService(
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
  useEffect(() => {
    // Cập nhật giá trị defaultValue khi selectedCategory thay đổi
    reset({
      name: value?.name || "", // Giá trị mặc định là rỗng nếu không có selectedCategory hoặc selectedCategory không có trường name
      description: value?.description || "",
      icon: value?.icon || "",
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
          Update service
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
            label="Service name"
            name="name"
            defaultValue={value.name}
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Icon name"
            name="icon"
            defaultValue={value.icon}
            error={!!errors["icon"]}
            helperText={errors["icon"] ? errors["icon"].message : ""}
            {...register("icon")}
          />
          <TextField
            margin="normal"
            fullWidth
            type="number"
            label="Description"
            name="description"
            multiline
            rows={3}
            defaultValue={value.description}
            error={!!errors["description"]}
            helperText={
              errors["description"] ? errors["description"].message : ""
            }
            {...register("description")}
          />
          <FormControl fullWidth className="mt-3">
            <InputLabel id="status">Load home</InputLabel>
            <Select
              fullWidth
              label="Status"
              labelId="Load home"
              name="loadhome"
              defaultValue={value.loadhome}
              error={!!errors["loadhome"]}
              helpertext={errors["loadhome"] ? errors["loadhome"].message : ""}
              {...register("loadhome")}
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="mt-3">
            <InputLabel id="status">Status</InputLabel>
            <Select
              fullWidth
              label="Status"
              labelId="status"
              name="status"
              defaultValue={value.status}
              error={!!errors["status"]}
              helpertext={errors["status"] ? errors["status"].message : ""}
              {...register("status")}
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
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

export default ModalUpdateService;
