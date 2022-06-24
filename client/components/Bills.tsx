import React from "react";
import { Col } from "react-bootstrap";
import { Bill } from "../interfaces/interfaces";
import Content from "./Content";

interface IProps {
  bill: Bill;
}

const BillComponent: React.FC<IProps> = ({ bill }) => {
  return (
    <>
      <Col className='d-flex justify-content-between mt-3 mb-3'>
        <Content content={bill.name} />
        <Content content={`R$ ${bill.value}`} />
      </Col>
    </>
  );
};

export default BillComponent;
