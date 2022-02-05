import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Opt = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Option = ({ IconSVG, OptionText }) => {
  return (
    <Opt className='me-5'>
      <Image src={IconSVG} alt={OptionText} />
      <h2>{OptionText}</h2>
    </Opt>
  );
};

export default Option;
