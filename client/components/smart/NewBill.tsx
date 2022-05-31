import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Bill, Month } from "../../interfaces/interfaces";
import { ProfileContext } from "../../pages";
import { getCurrentMonth } from "../../utils/functions";

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
  monthId: number;
}

const NewBill: React.FC<IProps> = ({ monthId }) => {
  const { userProfile, setUserProfile } = useContext(ProfileContext);

  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const clearStates = () => {
    setName("");
    setValue("");
  };

  const recalculateTotalBills = (currentMonth: Month) => {
    return currentMonth?.bills.reduce((accumulator, bill) => {
      return accumulator + bill.value;
    }, 0);
  };

  const handleAddBill = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    if (name && value && userProfile?.months) {
      const currentMonthsArray = Array.from(userProfile.months || []);
      const currentMonth = getCurrentMonth?.(userProfile, monthId);
      if (currentMonth && currentMonthsArray.length > 0) {
        const newBill: Bill = {
          id: currentMonth.bills.length - 1,
          name,
          value: parseInt(value),
        };
        currentMonth.bills.push(newBill);
        currentMonth.totalBills = Number(recalculateTotalBills(currentMonth));
        //ToDo
        //*recalculateTotalEarns(userProfile)
        // currentMonth.totalEarnings = Number(recalculateTotalEarns(userProfile));
        currentMonthsArray[currentMonth.id - 1] = currentMonth;

        setUserProfile?.((oldValue) => ({
          ...oldValue,
          months: currentMonthsArray,
        }));
        clearStates();
      }
    } else {
      alert("Preencha o nome e um valor maior que 0");
    }
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
        <div className='d-flex'>
          <SButton
            variant='contained'
            type='submit'
            onClick={(e) => handleAddBill?.(e)}>
            Add
          </SButton>
        </div>
      </div>
    </Form>
  );
};

export default NewBill;
