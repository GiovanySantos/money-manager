import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import styled from "styled-components";

const Opt = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 10px;
  border: none;
  transition: 0.4s;
  &:hover {
    background: #5c7c89;
  }
`;

interface IProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  OptionText: string;
}

const Option: React.FC<IProps> = ({ Icon, OptionText }) => {
  return (
    <Opt>
      <Icon fontSize='large' className='pe-2' />
      <h3 className='fw-bold pt-2'>{OptionText}</h3>
    </Opt>
  );
};

export default Option;
