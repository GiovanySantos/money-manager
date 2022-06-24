import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
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

const ProfileModal: React.FC<IProps> = ({ closeModalComponent }) => {
  const { userProfile } = useContext(ProfileContext);
  const maskPassword = () => {
    return "*".repeat(password.length);
  };

  const [email, setEmail] = useState<string>("");
  const [isEmailDisabled, setIsEmailDisabled] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [maskedPassword, setMaskedPassword] = useState<string>(maskPassword);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState<boolean>(true);

  const handleChangeEmail = () => {
    setIsEmailDisabled(!isEmailDisabled);
  };
  const handleSavePassword = () => {
    setIsPasswordDisabled(!isPasswordDisabled);
    setMaskedPassword(maskPassword);
  };

  return (
    <>
      <SContainer>
        <Row className='pb-5 text-center'>
          <TitleContent content={userProfile?.name} />
        </Row>
        <Row className='pb-3'>
          <Col className='d-flex justify-content-between'>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              disabled={isEmailDisabled}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SaveButton onClick={handleChangeEmail}>
              {isEmailDisabled ? "Alterar" : "Salvar"} email
            </SaveButton>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-between'>
            <TextField
              id='outlined-basic'
              label='Senha'
              variant='outlined'
              disabled={isPasswordDisabled}
              value={isPasswordDisabled ? maskedPassword : password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SaveButton onClick={handleSavePassword}>
              {isPasswordDisabled ? "Alterar" : "Salvar"} Senha
            </SaveButton>
          </Col>
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

export default ProfileModal;
