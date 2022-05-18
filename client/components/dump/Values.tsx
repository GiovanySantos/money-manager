import React from "react";
import { Col, Row } from "react-bootstrap";
import Content from "../dump/Content";

interface IProps {
  avaliableMoney: number;
  totalEarnings: number;
  totalBills: number;
}

const Values: React.FC<IProps> = ({
  avaliableMoney,
  totalEarnings,
  totalBills,
}) => {
  return (
    <>
      <Row>
        <Col className='d-flex justify-content-between mb-3'>
          <Content content='Valor Disponível' />
          <Content content={`R$ ${avaliableMoney}`} />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-between mb-3'>
          <Content content='Total de Ganhos' />
          <Content content={`R$ ${totalEarnings}`} />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-between mb-3'>
          <Content content='Total de Despesas' />
          <Content content={`R$ ${totalBills}`} />
        </Col>
      </Row>
    </>
  );
};

export default Values;
