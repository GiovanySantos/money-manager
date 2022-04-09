import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface IProps {
  Content: string;
}

const STypography = styled(Typography)`
  font-family: inherit;
`;

const TitleContent: React.FC<IProps> = ({ Content }) => {
  return <STypography variant='h4'>{Content}</STypography>;
};

export default TitleContent;
