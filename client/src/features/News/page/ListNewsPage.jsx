import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ListNews from "../components/ListNews";
import { useSelector } from "react-redux";

const ListNewsPage = () => {
  const { newsCategoryId } = useParams();
  const titles = [
    {
      id: 1,
      params: "tin-tuc-du-lich",
      name: "Tin tức du lịch",
    },
    {
      id: 2,
      params: "cam-nang-du-lich",
      name: "Cẩm nang du lịch",
    },
    {
      id: 3,
      params: "kinh-nghiem-du-lich",
      name: "Kinh nghiệm du lịch",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(titles[0]);
  const title = titles.find((item) => item.params === newsCategoryId);

  useEffect(() => {
    document.title = selectedTab.name;
  }, [selectedTab]);
  const [value, setValue] = React.useState(String(title.id));

  const handleChange = (event, newValue) => {
    const selectedTitle = titles.find((item) => item.id === parseInt(newValue));
    setSelectedTab(selectedTitle);
    const url = `/news/${selectedTitle.params}`;
    window.history.replaceState(null, null, url);
    setValue(newValue);
  };
  //get data
  const newsList = useSelector((state) => state.news.news.listNews);
  const news1 = [];
  const news2 = [];
  const news3 = [];
  for (const newItem of newsList) {
    const typeId = newItem.type.id;
    if (typeId === 1 && newItem.status === 1) {
      news1.push(newItem);
    } else if (typeId === 2 && newItem.status === 1) {
      news2.push(newItem);
    } else if (typeId === 3 && newItem.status === 1) {
      news3.push(newItem);
    }
  }
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Typography variant="h4" className="text-center mt-3 text-danger">
          {selectedTab.name}
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Tin tức du lịch" value="1" />
            <Tab label="Cẩm nang du lịch" value="2" />
            <Tab label="Kinh nghiệm du lịch" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ListNews data={news1}></ListNews>
        </TabPanel>
        <TabPanel value="2">
          <ListNews data={news2}></ListNews>
        </TabPanel>
        <TabPanel value="3">
          <ListNews data={news3}></ListNews>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ListNewsPage;
