import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CardBills from "./CardBills";
import CardHeader from "./CardHeader";

const CardInfo = styled.div`
  display: flex;
  justify-content: start;
  background: #13625c;
  width: 500px;
  height: 700px;
  padding: 30px;
  margin: 32px;
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
        <Row className='pb-5'>
          <CardHeader
            available={available}
            totalEarns={totalBills}
            totalBills={totalEarns}
          />
        </Row>
        <Row className='pb-3'>
          <CardBills CardTitle={CardTitle} Info={Info} />
        </Row>
      </Container>
    </CardInfo>
  );
};

export default Card;
