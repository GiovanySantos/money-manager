import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface IProps {
  content?: string | number;
}

const STypography = styled(Typography)`
  font-family: inherit;
`;

const Content: React.FC<IProps> = ({ content }) => {
  return <STypography variant='h6'>{content}</STypography>;
};

export default Content;
