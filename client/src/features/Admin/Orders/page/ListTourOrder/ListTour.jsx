import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import tourApi from "../../../../../api/tourApi";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function compareDeparture(a, b) {
  var dateA = new Date(a.DepartureDay.dayStart);
  var dateB = new Date(b.DepartureDay.dayStart);

  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
}

const ListTourOrder = () => {
  const [tourOrder, setTourOrder] = useState([]);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser.accessToken
  );
  useEffect(() => {
    const fecthData = async () => {
      const res = await tourApi.getAllDepartureDayAndTransaction(
        currentUserAccessToken
      );
      setTourOrder(res.data.orders.sort(compareDeparture));
    };
    fecthData();
  }, []);

  return (
    <Container fluid>
      <Row>
        {tourOrder.length > 0 &&
          tourOrder.map((item, index) => (
            <Col xs={3} className="p-3" key={index}>
              <Card data={item}></Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListTourOrder;
