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
import {
  creatDepartureDay,
  updateDepartureDayStatus,
} from "../../../../../redux/api/departureDayApiHandler";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
const ModalUpdateDD = ({ open, handleClose, valuex }) => {
  const [value, setValue] = React.useState(null);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnClick = async () => {
    console.log(valuex)
    await updateDepartureDayStatus(
      dispatch,
      toast,
      { status: value },
      valuex.id,
      currentUserAccessToken
    );
    setValue(null);
    setStatus("");
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
          Update departure day
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <DatePicker
            disablePast
            className="w-100"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <FormControl fullWidth className="mt-3">
            <InputLabel id="status">Status</InputLabel>
            <Select
              fullWidth
              label="Status"
              labelId="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            onClick={handleOnClick}
            sx={{ mt: 3, mb: 2 }}
          >
            {"Update"}
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalUpdateDD;
