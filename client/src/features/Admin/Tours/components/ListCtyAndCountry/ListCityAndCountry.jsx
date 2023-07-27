import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import TableCites from "../TableCites";
import TableCountries from "../TableCountries";

const ListCityAndCountry = () => {
  const listCites = useSelector((state) => state.cityAndCountries.cites.cites);
  const listsCountries = useSelector(
    (state) => state.cityAndCountries.countries.countries
  );
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Cities" value="1" />
            <Tab label="Countries" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TableCites data={listCites} />
        </TabPanel>
        <TabPanel value="2">
          <TableCountries data={listsCountries} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ListCityAndCountry;
