import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { format } from "date-fns";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
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
  handleOpenModal: (param: number) => void;
  userName?: string;
}

const Header: React.FC<IProps> = ({ handleOpenModal, userName }) => {
  const [currentDate] = useState<string>(format(new Date(), "dd/MM/yyyy"));

  return (
    <Container fluid className='pt-2 pb-4'>
      <Row>
        <Col className='d-flex'>
          <div onClick={() => handleOpenModal(1)}>
            <Option
              Icon={AccountCircleIcon}
              OptionText={userName ?? "Faça o login"}
            />
          </div>
          <div onClick={() => handleOpenModal(2)}>
            <Option Icon={AccountBalanceWalletIcon} OptionText={"Carteira"} />
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
