import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CardBill = styled.h3`
  background: #13625c;
  opacity: 0.7;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.36);
  padding: 5px;
`;

const CardBills = ({ Info }) => {
  return (
    <>
      {Info.bills.map((bill, i) => {
        return (
          <Row className='d-flex align-items-center' key={i}>
            <Col>
              <h5>{bill.name}</h5>
            </Col>
            <Col className='text-center'>
              <CardBill>$ {bill.value}</CardBill>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CardBills;
