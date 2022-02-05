import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Option from "./Option";
import UserICon from "../../assets/UserIcon.svg";
import WalletIcon from "../../assets/WalletIcon.svg";
import { Container } from "react-bootstrap";

const Today = styled.h2`
  background: #13625c;
  padding: 10px 20px 10px 20px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`;

const Header = () => {
  const today = format(new Date(), "dd/MM/yyyy");
  return (
    <Container fluid className='pt-2 pb-2'>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>
        <div className='d-flex pb-4'>
          <Option IconSVG={UserICon} OptionText={"Torradinha"} />
          <Option IconSVG={WalletIcon} OptionText={"Minha Carteira"} />
        </div>
        <div>
          <Today>{today}</Today>
        </div>
      </div>
    </Container>
  );
};

export default Header;
