import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CardBills from "./CardBills";
import CardHeader from "./CardHeader";

const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  background: var(--bg-dark-soft);
  margin-top: 30px;
  width: 500px;
  height: 700px;
  overflow-y: auto;
  padding: 30px 20px 0px 20px;
  border: solid 2px var(--bg-dark-soft);
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
    <CardContainer>
      <Container>
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
          <Col className='d-flex justify-content-center p-4'>
            <FontAwesomeIcon
              icon={faPlus}
              size='3x'
              color={!hovered ? "#fafafa" : "#13625C"}
              cursor='pointer'
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </Col>
        </Row>
      </Container>
    </CardContainer>
  );
};

export default Card;
