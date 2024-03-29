import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Autocomplete, Button, Tab, TextField } from "@mui/material";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { removeDuplicates } from "../../../../../../Helper/ArrayHelper";
import {
  addPromotion,
  addService,
  removePromotion,
  removeService,
} from "../../../../../../redux/api/tourApiHandler";
import { getRoleName } from "../../../../../../Helper/RoleHelper";

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

const ListPromotionOfTour = () => {
  const { tourId } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours.tours);
  const tourDetail = tours.find((tour) => tour.id === Number(tourId));
  const promotions = useSelector(
    (state) => state.promotions.promotions.promotions
  );
  const res = removeDuplicates(promotions, tourDetail.promotions);
  const options = res.filter((item) => item.status === true).map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const [value, setValue] = React.useState(options[0]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const handleOnAddPromotion = async (id) => {
    try {
      await addPromotion(
        dispatch,
        id,
        value.value,
        currentUserAccessToken,
        toast
      );
    } catch (error) {}
    handleClose();
  };
  const handleDeletePromotion = async (id, promotionId) => {
    try {
      await removePromotion(
        dispatch,
        id,
        promotionId,
        currentUserAccessToken,
        toast
      );
    } catch (error) {
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell>Tên promotion</TableCell>
            <TableCell>Giảm</TableCell>
            <TableCell align="center">Dành cho</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell className="float-end">
              <Button variant="contained" size="small" onClick={handleOpen}>
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tourDetail.promotions.length > 0 ? (
            tourDetail.promotions.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {index}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.promotion}</TableCell>
                <TableCell align="center">{getRoleName(row.forObject)}</TableCell>
                <TableCell align="center">{row.status ? "Active" : "Inactive"}</TableCell>
                <TableCell align="center">
                  <Button
                    className="text-danger"
                    onClick={() => handleDeletePromotion(tourDetail.id, row.id)}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                Tour này chưa được add promotion
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Service
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              options={options}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
            />
            <Button
              variant="contained"
              fullWidth
              className="mt-3"
              onClick={() => handleOnAddPromotion(tourDetail.id)}
            >
              Add
            </Button>
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default ListPromotionOfTour;
