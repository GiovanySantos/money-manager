import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ValueField from "../ValueField";

const WalletModal = () => {
  const [funds, setFunds] = useState();
  return (
    <Container>
      <Row className='pb-5'>
        <h1 className='fw-bolder'>Carteira</h1>
      </Row>
      <Row className='align-items-center pb-5'>
        <Col>
          <h3>Total de ganhos</h3>
        </Col>
        <Col>
          <ValueField value={3000} />
        </Col>
      </Row>
      <Row className='align-items-center pb-2'>
        <Col>
          <h3 className='fw-bolder'>Fonte</h3>
        </Col>
        <Col>
          <h3 className='fw-bolder'>Valor</h3>
        </Col>
      </Row>
      <Row className='align-items-center pb-5'>
        <Col>
          <h3>Salário</h3>
        </Col>
        <Col>
          <ValueField value={700} />
        </Col>
      </Row>
    </Container>
  );
};

export default WalletModal;
