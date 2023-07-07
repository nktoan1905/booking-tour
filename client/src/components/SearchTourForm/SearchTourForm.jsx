import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import FormSeachInCountry from "./FormSearchInCountry/FormSeachInCountry";
import FormSearchOutCountry from "./FormSearchOutCountry/FormSearchOutCountry";

const SearchTourForm = () => {
  const {} = useForm();
  const cites = useSelector((state) => state.cityAndCountries.cites.cites);
  const cititesInVn = cites
    ? cites.filter((item) => item.countryInfo.id === 1)
    : [];
  var countries = useSelector(
    (state) => state.cityAndCountries.countries.countries
  );
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="my-4 d-none d-lg-block">
      <Row>
        <Col>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Tour trong nước" value="1" />
                  <Tab label="Tour ngoài nước" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <FormSeachInCountry cities={cititesInVn}></FormSeachInCountry>
              </TabPanel>
              <TabPanel value="2">
                <FormSearchOutCountry
                  cities={cititesInVn}
                  countries={countries}
                ></FormSearchOutCountry>
              </TabPanel>
            </TabContext>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchTourForm;
