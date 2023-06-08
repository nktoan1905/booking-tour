import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import ContactTable from "../../components/ContactTable/ContactTable";
import { getAllContacts } from "../../../../../redux/api/contactApiHandler";
const ListContacts = () => {
  const [value, setValue] = useState("1");
  const [refersh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const contacts = useSelector((state) => state.contact.contacts?.listContacts);
  const contactType = useSelector(
    (state) => state.contact.contactType?.listContactType
  );
  const type1Contacts = [];
  const type2Contacts = [];
  const type3Contacts = [];
  for (const contact of contacts) {
    const typeId = contact.type.id;

    if (typeId === 1) {
      type1Contacts.push(contact);
    } else if (typeId === 2) {
      type2Contacts.push(contact);
    } else if (typeId === 3) {
      type3Contacts.push(contact);
    }
  }
  useEffect(() => {
    getAllContacts(dispatch, currentUserAccessToken);
  }, [refersh]);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Button variant="contained" onClick={() => setRefresh(!refersh)}>
        Cập nhật table
      </Button>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {contactType.map((type) => (
              <Tab label={type.name} value={String(type.id)} key={type.id} />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1">
          <ContactTable rows={type1Contacts}></ContactTable>
        </TabPanel>
        <TabPanel value="2">
          <ContactTable rows={type2Contacts}></ContactTable>
        </TabPanel>
        <TabPanel value="3">
          <ContactTable rows={type3Contacts}></ContactTable>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ListContacts;
