import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Option from "./Option";
import UserICon from "../../assets/UserIcon.svg";
import WalletIcon from "../../assets/WalletIcon.svg";
import { Col, Container, Row } from "react-bootstrap";

const Today = styled.h2`
  background: var(--bg-green-soft);
  padding: 10px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`;

const Header = ({ handleOpenModal }) => {
  const today = format(new Date(), "dd/MM/yyyy");
  return (
    <Container fluid className='pt-2 pb-2'>
      <Row className='d-flex justify-content-between align-items-center flex-wrap text-center'>
        <Col className='d-flex'>
          <div onClick={() => handleOpenModal(1)}>
            <Option IconSVG={UserICon} OptionText={"Torradinha"} />
          </div>
          <div onClick={() => handleOpenModal(2)}>
            <Option IconSVG={WalletIcon} OptionText={"Minha Carteira"} />
          </div>
        </Col>
        <Col md={3} sm={12}>
          <Today>{today}</Today>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
