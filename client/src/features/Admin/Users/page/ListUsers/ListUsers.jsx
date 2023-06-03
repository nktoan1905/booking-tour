import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserTable from "../../components/UserTable/UserTable";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateEmloyee from "../../components/ModalCreate/ModaleCreateEmployee";
import { Button } from "@mui/material";
import {
  getAllAdmins,
  getAllEmployees,
  getAllUsers,
} from "../../../../../redux/api/userApiHandler";
const ListUsers = () => {
  const [value, setValue] = useState("1");
  const [refersh, setRefresh] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rowsAdmins = useSelector((state) => state.user.admins.listAdmins?.data);
  const rowMembers = useSelector((state) => state.user.users.listUsers?.data);
  const rowEmloyees = useSelector(
    (state) => state.user.employees.listEmployees?.data
  );
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  useEffect(() => {
    console.log(refersh)
    getAllAdmins(dispatch, currentUserAccessToken);
    getAllEmployees(dispatch, currentUserAccessToken);
    getAllUsers(dispatch, currentUserAccessToken);
  }, [refersh]);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Button variant="contained" onClick={() => setRefresh(!refersh)}>
        Cập nhật table
      </Button>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Admins" value="1" />
            <Tab label="Emloyees" value="2" />
            <Tab label="Members" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserTable rows={rowsAdmins}></UserTable>
        </TabPanel>
        <TabPanel value="2" className="d-flex align-items-end flex-column ">
          <ModalCreateEmloyee
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
          <UserTable rows={rowEmloyees}></UserTable>
        </TabPanel>
        <TabPanel value="3">
          <UserTable rows={rowMembers}></UserTable>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ListUsers;
