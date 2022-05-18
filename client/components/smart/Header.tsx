import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { format } from "date-fns";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Content from "../dump/Content";
import Option from "../dump/Option";

const CurrentDate = styled.h3`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #5c7c89;
  font-weight: bold;
  padding: 5px 10px;
  margin: 5px 10px;
`;

interface IProps {
  userName?: string;
  selectModal: (param: number) => void;
  incraseMonthsQuantity: () => void;
  decraseMonthsQuantity: () => void;
}

const Header: React.FC<IProps> = ({
  userName,
  selectModal,
  incraseMonthsQuantity,
  decraseMonthsQuantity,
}) => {
  const [currentDate] = useState<string>(format(new Date(), "dd/MM/yyyy"));

  return (
    <Container fluid className='pt-2 pb-4'>
      <Row>
        <Col
          lg={9}
          md={6}
          sm={12}
          className='d-flex justify-content-start align-items-center'>
          <div onClick={() => selectModal(1)}>
            <Option
              Icon={AccountCircleIcon}
              OptionText={userName ?? "Faça o login"}
            />
          </div>
          <div onClick={() => selectModal(2)}>
            <Option Icon={AccountBalanceWalletIcon} OptionText={"Carteira"} />
          </div>
          <div className='ms-3 me-2'>
            <Content content='Adicionar ou remover meses' />
          </div>
          <div onClick={incraseMonthsQuantity}>
            <Option Icon={AddCircleIcon} />
          </div>
          <div onClick={decraseMonthsQuantity}>
            <Option Icon={RemoveCircleIcon} />
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <div className='text-center'>
            <CurrentDate>{currentDate}</CurrentDate>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
