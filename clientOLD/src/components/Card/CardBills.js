import React from "react";
import { Col, Row } from "react-bootstrap";
import ValueField from "../ValueField";

const CardBills = ({ Info }) => {
  return (
    <>
      {Info.bills.map((bill, i) => {
        return (
          <Row className='d-flex align-items-center' key={i}>
            <Col>
              <h5>{bill.name}</h5>
            </Col>
            <Col>
              <ValueField value={bill.value} />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CardBills;
