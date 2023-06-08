import React from "react";
import TabPanelCustom from "./TabPanelCustom";
import { Box, Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard/NewsCard";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalsTabs = () => {
  const [value, setValue] = React.useState(0);
  const newsCategories = useSelector(
    (state) => state.news.newsCategories?.listNewsCategories
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {/* <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
        {newsCategories.map((row) => (
          <Tab label={row.name} {...a11yProps(row.id)} key={row.id}></Tab>
        ))}
      </Tabs>
      <TabPanelCustom value={value} index={0}>
        <NewsCard></NewsCard>
      </TabPanelCustom>
      <TabPanelCustom value={value} index={1}>
        Item Two
      </TabPanelCustom>
      <TabPanelCustom value={value} index={2}>
        Item Three
      </TabPanelCustom>
    </Box>
  );
};

export default VerticalsTabs;
