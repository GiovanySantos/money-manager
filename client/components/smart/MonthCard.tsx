import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Month } from "../../interfaces/interfaces";
import BillComponent from "../dump/Bills";
import Bills from "../dump/Bills";
import Content from "../dump/Content";
import TitleContent from "../dump/TitleContent";
import Values from "../dump/Values";
import NewBill from "./NewBill";

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
          <TitleContent content={MonthInfo.name} />
        </Row>
        <Values
          avaliableMoney={avaliableMoney}
          totalEarnings={totalEarnings}
          totalBills={totalBills}
        />
        <Row>
          <Col className='d-flex justify-content-between mt-3 mb-3'>
            <TitleContent content='Despesa' />
            <TitleContent content='Valor' />
          </Col>
        </Row>
        {MonthInfo.bills.map((bill) => {
          return (
            <Row key={bill.id}>
              <BillComponent bill={bill} />
            </Row>
          );
        })}
        <Row>
          <Col className='d-flex justify-content-between mt-3 mb-3'>
            <NewBill month={MonthInfo.name} />
          </Col>
        </Row>
      </SContainer>
    </div>
  );
};

export default MonthCard;
