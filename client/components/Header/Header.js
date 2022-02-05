import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Option from "./Option";
import UserICon from "../../assets/UserIcon.svg";
import WalletIcon from "../../assets/WalletIcon.svg";

const Today = styled.h2`
  background: #13625c;
  padding: 10px;
  margin: 30px;
  cursor: pointer;
`;

const Header = () => {
  const today = format(new Date(), "dd/MM/yyyy");
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
      <div className='d-flex'>
        <Option IconSVG={UserICon} OptionText={"Torradinha"} />
        <Option IconSVG={WalletIcon} OptionText={"Minha Carteira"} />
      </div>
      <div>
        <Today>{today}</Today>
      </div>
    </div>
  );
};

export default Header;
