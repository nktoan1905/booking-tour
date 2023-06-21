import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { creatDepartureDay } from "../../../../../redux/api/departureDayApiHandler";

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
const ModalCreateDD = ({ open, handleClose }) => {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnClick = async () => {
    await creatDepartureDay(
      dispatch,
      toast,
      {
        dayStart: dayjs(value).format("YYYY-MM-DD"),
      },
      currentUserAccessToken
    );
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
          Create new departure day
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <DatePicker
            disablePast
            className="w-100"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleOnClick}
            sx={{ mt: 3, mb: 2 }}
          >
            {"Create"}
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalCreateDD;
