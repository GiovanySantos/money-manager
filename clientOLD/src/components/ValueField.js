import React from "react";
import styled from "styled-components";

const CardBill = styled.h3`
  background: var(--bg-green-soft);
  opacity: 0.7;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.36);
  padding: 5px;
  text-align: center;
`;

const ValueField = ({ value }) => {
  return <CardBill>$ {value}</CardBill>;
};

export default ValueField;
