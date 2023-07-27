import React, { useEffect, useState } from "react";
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
import dayjs from "dayjs";
import {
  addDepartureDay,
  addPromotion,
  addService,
  removeDepartureDay,
  removePromotion,
  removeService,
} from "../../../../../../redux/api/tourApiHandler";
import { getRoleName } from "../../../../../../Helper/RoleHelper";
import axios from "axios";
import tourApi from "../../../../../../api/tourApi";

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

const ListDepartureDayOfTour = () => {
  const { tourId } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours.tours);
  const tourDetail = tours.find((tour) => tour.id === Number(tourId));
  const departureDays = useSelector(
    (state) => state.departureDays.departureDays.departureDays
  );
  // const res = removeDuplicates(departureDays, tourDetail.departureDays);
  const currentDate = new Date();
  const options = departureDays
    .filter((item) => {
      const itemDate = new Date(item.dayStart);
      return itemDate >= currentDate && item.status === true;
    })
    .map((item) => ({
      label: item.dayStart,
      value: item.id,
    }));
  const [value, setValue] = React.useState(options[0]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  const cities = useSelector((state) => state.cityAndCountries.cites.cites);
  const optionsCites = cities.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const [departureDaysOfTour, setDepartureDaysOfTour] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [city, setCity] = React.useState(optionsCites[0]);

  const handleAddDepartureDay = async (id) => {
    try {
      await addDepartureDay(
        dispatch,
        id,
        {
          departureDayId: value.value,
          startPlace: city.label,
        },
        currentUserAccessToken,
        toast
      );
      setIsUpdate(!isUpdate);
    } catch (error) {}
    handleClose();
  };
  const handleDeleteDepartureDay = async (id, departureDayId) => {
    try {
      await removeDepartureDay(
        dispatch,
        id,
        departureDayId,
        currentUserAccessToken,
        toast
      );
      setIsUpdate(!isUpdate);
    } catch (error) {}
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await tourApi.getAllDepartureDayOfTour(tourId);
        setDepartureDaysOfTour(res.data.data);
      } catch (error) {}
    };

    fetchData();
  }, [isUpdate]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell>Ngày đi</TableCell>
            <TableCell align="center">Địa chỉ xuất phát</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell className="float-end">
              <Button variant="contained" size="small" onClick={handleOpen}>
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departureDaysOfTour.length > 0 ? (
            departureDaysOfTour.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {index}
                </TableCell>
                <TableCell>
                  {dayjs(row.DepartureDay.dayStart, "YYYY-MM-DD").format("L")}
                </TableCell>
                <TableCell align="center">{row.startPlace}</TableCell>
                <TableCell align="center">
                  <Button
                    className="text-danger"
                    onClick={() =>
                      handleDeleteDepartureDay(
                        tourDetail.id,
                        row.id
                      )
                    }
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
                <TextField {...params} label="Ngày đi" />
              )}
            />
            <Autocomplete
              className="mt-3"
              disablePortal
              id="combo-box-demo"
              value={city}
              onChange={(event, newValue) => {
                setCity(newValue);
              }}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              options={optionsCites}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Địa chỉ xuất phát" />
              )}
            />
            <Button
              variant="contained"
              fullWidth
              className="mt-3"
              onClick={() => handleAddDepartureDay(tourDetail.id)}
            >
              Add
            </Button>
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default ListDepartureDayOfTour;
