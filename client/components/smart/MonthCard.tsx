import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Month } from "../../interfaces/interfaces";
import { ProfileContext } from "../../pages";
import BillComponent from "../dump/Bills";
import TitleContent from "../dump/TitleContent";
import Values from "../dump/Values";
import NewBill from "./NewBill";

interface IProps {
  monthId: number;
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

const MonthCard: React.FC<IProps> = ({ monthId }) => {
  const { userProfile } = useContext(ProfileContext);
  const [avaliableMoney, setAvaliableMoney] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);
  const [totalBills, setTotalBills] = useState<number>(0);

  const getCurrentMonth = () => userProfile?.months?.[monthId - 1];

  return (
    <SContainer>
      <Row className='d-flex justify-content-between mb-5'>
        <TitleContent content={getCurrentMonth()?.name} />
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
      {getCurrentMonth()?.bills?.map((bill, i) => {
        return (
          <Row key={i}>
            <BillComponent bill={bill} />
          </Row>
        );
      })}
      <Row>
        <Col className='d-flex justify-content-between mt-3 mb-3'>
          <NewBill monthId={Number(monthId)} />
        </Col>
      </Row>
    </SContainer>
  );
};

export default MonthCard;
