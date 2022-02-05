import React from "react";
import { Col } from "react-bootstrap";

const CardBills = ({ CardTitle, Info }) => {
  console.log(Info.bills);
  return (
    <>
      <Col>
        <CardTitle>Conta</CardTitle>
      </Col>
      <Col>
        <CardTitle>Valor</CardTitle>
      </Col>
    </>
  );
};

export default CardBills;
