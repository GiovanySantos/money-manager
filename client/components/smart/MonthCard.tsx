import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Month } from "../../interfaces/interfaces";
import Content from "../dump/Content";
import TitleContent from "../dump/TitleContent";

interface IProps {
  MonthInfo: Month;
}

const SContainer = styled(Container)`
  border-radius: 10px;
  background: #1f4959;
  color: #fafafa;
  padding: 30px;
  text-align: center;
  max-width: 405px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const MonthCard: React.FC<IProps> = ({ MonthInfo }) => {
  const [avaliableMoney, setAvaliableMoney] = useState<number>(
    MonthInfo.avaliableMoney
  );
  const [totalEarnings, setTotalEarnings] = useState<number>(
    MonthInfo.totalEarnings
  );
  const [totalBills, setTotalBills] = useState<number>(MonthInfo.totalBills);

  return (
    <div>
      <SContainer>
        <Row className='d-flex justify-content-between mb-5'>
          <TitleContent Content={MonthInfo.name} />
        </Row>
        <Row>
          <Col className='d-flex justify-content-between mb-3'>
            <Content Content='Valor Disponível' />
            <Content Content={`R$ ${avaliableMoney}`} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-between mb-3'>
            <Content Content='Total de Ganhos' />
            <Content Content={`R$ ${totalEarnings}`} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-between mb-3'>
            <Content Content='Total de Despesas' />
            <Content Content={`R$ ${totalBills}`} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-between mt-3 mb-3'>
            <TitleContent Content='Despesa' />
            <TitleContent Content='Valor' />
          </Col>
        </Row>
        {MonthInfo.bills.map((bill) => {
          return (
            <Row key={bill.id}>
              <Col className='d-flex justify-content-between mt-3 mb-3'>
                <Content Content={bill.name} />
                <Content Content={`R$ ${bill.value}`} />
              </Col>
            </Row>
          );
        })}
      </SContainer>
    </div>
  );
};

export default MonthCard;
