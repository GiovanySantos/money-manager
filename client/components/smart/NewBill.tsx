import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Bill, Month, Profile } from "../../interfaces/interfaces";
import { Form } from "react-bootstrap";

const SButton = styled(Button)`
  background: #5c7c89;
  color: #fafafa;
  margin-left: 30px;
  &:hover {
    color: #5c7c89;
    background: #f3f3f3;
  }
`;

interface IProps {
  month: string;
}

const NewBill: React.FC<IProps> = ({ month }) => {
  const { userProfile } = useContext(ProfileContext) as Profile;

  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleAddBill = (event: Event) => {
    event?.preventDefault();
    if (name && value) {
      let currentMonthInfo: Month = userProfile.months.find(
        (monthInfo: Month) => monthInfo.name === month
      );
      let generateBillId: number = currentMonthInfo.bills.length + 1;
      let bill: Bill = {
        id: generateBillId,
        name,
        value: parseInt(value),
      };

      setUserProfile({ ...userProfile });
      console.log(bill);
    } else {
      alert("Preencha o nome e um valor maior que 0");
    }
    return;
  };

  return (
    <Form>
      <div className='d-flex align-items-center'>
        <div className='d-flex'>
          <TextField
            className='me-3'
            id='outlined-basic'
            label='Nome'
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className='me-3'
            id='outlined-basic'
            label='Valor'
            variant='outlined'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='number'
          />
        </div>
        <div className='d-flex' onClick={handleAddBill}>
          <SButton variant='contained' type='submit'>
            Add
          </SButton>
        </div>
      </div>
    </Form>
  );
};

export default NewBill;
