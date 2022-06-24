import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ProfileContext } from "../pages";
import TitleContent from "./TitleContent";

const SContainer = styled(Container)`
  border-radius: 10px;
  background: #1f4959;
  color: #fafafa;
  padding: 30px;
`;

const SaveButton = styled(Button)`
  background: #5c7c89;
  color: #fafafa;
  margin-left: 30px;
  width: 160px;
  &:hover {
    color: #5c7c89;
    background: #f3f3f3;
  }
`;

const CloseButton = styled(Button)`
  background: #5c7c89;
  color: #fafafa;
  &:hover {
    color: #5c7c89;
    background: #f3f3f3;
  }
`;

interface IProps {
  closeModalComponent: () => void;
}

const WalletModal: React.FC<IProps> = ({ closeModalComponent }) => {
  const { userProfile } = useContext(ProfileContext);

  return (
    <>
      <SContainer>
        <Row className='pb-5 text-center'>
          <TitleContent content='Wallet' />
        </Row>
        <Row className='pb-3'>

        </Row>
        <Row>
          <Col className='d-flex justify-content-end mt-5'>
            <CloseButton onClick={closeModalComponent}>Fechar</CloseButton>
          </Col>
        </Row>
      </SContainer>
    </>
  );
};

export default WalletModal;
