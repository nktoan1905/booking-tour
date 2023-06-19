import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListTour from "../../components/ListTour/ListTour";
import ListCategory from "../../components/ListCategory/ListCategory";
import ListPromotion from "../../components/ListPromotion/ListPromotion";
import ListCityAndCountry from "../../components/ListCtyAndCountry/ListCityAndCountry";
import ListService from "../../components/ListService/ListService";
import ListDepartureDay from "../../components/ListDepartureDay/ListDepartureDay";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, minWidth: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function InfoManager() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "200px" }}
      >
        <Tab label="Tours" {...a11yProps(0)} />
        <Tab label="Category" {...a11yProps(1)} />
        <Tab label="Promotion" {...a11yProps(2)} />
        <Tab label="City & Country" {...a11yProps(3)} />
        <Tab label="Service" {...a11yProps(4)} />
        <Tab label="Departure Day" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ListTour />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListCategory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListPromotion />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ListCityAndCountry />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ListService />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ListDepartureDay />
      </TabPanel>
    </Box>
  );
}
