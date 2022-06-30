import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Content from "./Content";
import React from "react";
import styled from "styled-components";

const Opt = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 10px;
  border: none;
  transition: 0.4s;
  background: #1f4959;
  &:hover {
    background: #5c7c89;
  }
`;

interface IProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  OptionText?: string;
}

const Option: React.FC<IProps> = ({ Icon, OptionText }) => {
  return (
    <Opt>
      {Icon && <Icon fontSize='large' className={OptionText ? "me-2" : ""} />}
      {OptionText && <Content content={OptionText} />}
    </Opt>
  );
};

export default Option;
