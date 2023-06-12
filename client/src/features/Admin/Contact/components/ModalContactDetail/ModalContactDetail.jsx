import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { updateContact } from "../../../../../redux/api/contactApiHandler";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import HTMLReactParser from "html-react-parser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalContactDetail = ({ open, handleClose, value }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const handleOnSubmit = async (data, event) => {
    event.preventDefault();
    await updateContact(
      dispatch,
      toast,
      currentUserAccessToken,
      data,
      value.id
    );
    handleClose();
  };
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h3"
            component="h2"
            style={{ overflow: "scroll" }}
          >
            {value.title}
          </Typography>
          <Typography
            id="modal-description"
            sx={{
              mt: 2,
              p: 3,
              minHeight: "500px",
              border: "1px solid #000000",
              overflow: "scroll",
            }}
          >
            {HTMLReactParser(value.content ? value.content : "")}
          </Typography>
          <Typography
            component="form"
            style={{ marginTop: "10px" }}
            className="d-flex justify-content-between"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <FormControl>
              <InputLabel id="status">Status</InputLabel>
              <Select
                fullWidth
                label="Status"
                labelId="status"
                name="status"
                defaultValue={value.status}
                {...register("status")}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Done</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit">
              Update status
            </Button>
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ModalContactDetail;
