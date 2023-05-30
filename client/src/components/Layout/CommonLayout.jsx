import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
const CommonLayout = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default CommonLayout;
