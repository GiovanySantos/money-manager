import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CardBills from "./CardBills";
import CardHeader from "./CardHeader";

const CardInfo = styled.div`
  display: flex;
  justify-content: start;
  background: #1d262b;
  margin-top: 30px;
  width: 500px;
  max-height: 700px;
  overflow-y: auto;
  padding: 30px 20px 0px 20px;
  box-shadow: 0px 0px 40px 11px rgba(0, 0, 0, 0.75);
`;

const CardTitle = styled.h3`
  background: none;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 30px;
`;

const Card = ({ Info }) => {
  const [available, setAvailable] = useState(0);
  const [totalBills, setTotalBills] = useState(0);
  const [totalEarns, setTotalEarns] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (Info) {
      const totalEarns = Info.earns
        .map((earn) => {
          return earn.value;
        })
        .reduce((a, b) => a + b, 0);
      setTotalEarns(totalEarns);
    }
  }, [Info]);

  return (
    <CardInfo>
      <Container fluid>
        <Row>
          <CardTitle>{Info.month}</CardTitle>
        </Row>
        <Row className='pb-4'>
          <CardHeader
            available={available}
            totalEarns={totalBills}
            totalBills={totalEarns}
          />
        </Row>
        <Row>
          <Col>
            <CardTitle>Conta</CardTitle>
          </Col>
          <Col>
            <CardTitle>Valor</CardTitle>
          </Col>
        </Row>
        <CardBills Info={Info} />
        <Row>
          <Col className='d-flex justify-content-center p-3'>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size='3x'
              color={!hovered ? "#fafafa" : "#13625C"}
              cursor='pointer'
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </Col>
        </Row>
      </Container>
    </CardInfo>
  );
};

export default Card;
