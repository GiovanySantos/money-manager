import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ProfileContext } from "../../pages";
import TitleContent from "../dump/TitleContent";

const SContainer = styled(Container)`
  border-radius: 10px;
  background: #1f4959;
  color: #fafafa;
  padding: 30px;
`;

const SButton = styled(Button)`
  background: #5c7c89;
  color: #fafafa;
  margin-left: 30px;
  &:hover {
    color: #5c7c89;
    background: #f3f3f3;
  }
`;

const ProfileModal: React.FC = () => {
  const { userProfile } = useContext(ProfileContext);

  const [email, setEmail] = useState<string>("");
  const [isEmailDisabled, setIsEmailDisabled] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [maskedPassword, setMaskedPassword] = useState<string>(
    "*".repeat(password.length)
  );
  const [isPasswordDisabled, setIsPasswordDisabled] = useState<boolean>(true);

  const handleChangeEmail = () => {
    setIsEmailDisabled(!isEmailDisabled);
  };
  const handleChangePassword = () => {
    setIsPasswordDisabled(!isPasswordDisabled);
    setMaskedPassword("*".repeat(password.length));
  };

  return (
    <>
      <SContainer>
        <Row className='pb-5 text-center'>
          <TitleContent content={userProfile?.name} />
        </Row>
        <Row className='pb-5'>
          <Col className='d-flex justify-content-center'>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              disabled={isEmailDisabled}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SButton variant='contained' onClick={handleChangeEmail}>
              {isEmailDisabled ? "Alterar" : "Salvar"} email
            </SButton>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <TextField
              id='outlined-basic'
              label='Senha'
              variant='outlined'
              disabled={isPasswordDisabled}
              value={isPasswordDisabled ? maskedPassword : password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SButton variant='contained' onClick={handleChangePassword}>
              {isPasswordDisabled ? "Alterar" : "Salvar"} Senha
            </SButton>
          </Col>
        </Row>
      </SContainer>
    </>
  );
};

export default ProfileModal;
