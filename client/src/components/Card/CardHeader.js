import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CardBill = styled.h3`
  background: #13625C;
  opacity: 0.7;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.36);
  padding: 5px;
`;

const CardHeader = ({ available, totalEarns, totalBills }) => {
  return (
    <div>
      <Row className='d-flex justify-content-between align-items-center pb-3'>
        <Col>
          <h3>Disponível</h3>
        </Col>
        <Col>
          <CardBill className='text-center'>$ {available}</CardBill>
        </Col>
      </Row>
      <Row className='d-flex justify-content-between align-items-center pb-3'>
        <Col>
          <h3>Ganhos</h3>
        </Col>
        <Col>
          <CardBill className='text-center'>$ {totalEarns}</CardBill>
        </Col>
      </Row>
      <Row className='d-flex justify-content-between align-items-center pb-3'>
        <Col>
          <h3>Gastos</h3>
        </Col>
        <Col>
          <CardBill className='text-center'>$ {totalBills}</CardBill>
        </Col>
      </Row>
    </div>
  );
};

export default CardHeader;
