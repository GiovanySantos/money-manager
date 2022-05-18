import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface IProps {
  content?: string;
}

const STypography = styled(Typography)`
  font-family: inherit;
`;

const TitleContent: React.FC<IProps> = ({ content }) => {
  return <STypography variant='h4'>{content}</STypography>;
};

export default TitleContent;
