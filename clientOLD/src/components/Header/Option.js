import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Opt = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;
  border-radius: 9px;
  border: none;
  transition: 0.4s;
  &:hover {
    background: var(--bg-green-darker);
    box-shadow: 7px 5px 56px -14px var(--bg-green-soft);
  }
`;

const Option = ({ IconSVG, OptionText }) => {
  return (
    <Opt className='me-5'>
      <Image src={IconSVG} alt={OptionText} />
      <h2 className='fw-bold'>{OptionText}</h2>
    </Opt>
  );
};

export default Option;
