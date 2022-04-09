import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface IProps {
  Content: string | number;
}

const STypography = styled(Typography)`
  font-family: inherit;
`;

const Content: React.FC<IProps> = ({ Content }) => {
  return <STypography variant='h6'>{Content}</STypography>;
};

export default Content;
