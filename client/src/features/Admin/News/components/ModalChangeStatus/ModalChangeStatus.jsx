import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { updateNewsStatus } from "../../../../../redux/api/newsApiHandler";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalChangeStatus = ({ open, handleClose, value }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await updateNewsStatus(
      dispatch,
      toast,
      currentUserAccessToken,
      value.id,
      data
    );
    handleClose()
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Cập nhật status
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, textAlign: "center", justifyContent: "center" }}
          component="form"
          className="text-center"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={value?.status}
              label="Status"
              {...register("status")}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className="mx-3">
            Update
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalChangeStatus;
