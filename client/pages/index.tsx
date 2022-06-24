import type { NextPage } from "next";
import { createContext, useContext, useState } from "react";
import { Profile } from "../interfaces/interfaces";
import Workspace from "./_workspace";

type ProfileContextType = {
  userProfile: Profile;
  setUserProfile?: React.Dispatch<React.SetStateAction<Profile>>;
};

const INITIAL_STATE = {
  name: "Torrada",
  email: "little@toast.com",
  password: "torradinha",
  wallet: {
    totalMoney: 0,
    earnings: [
      {
        id: 1,
        name: "Salário",
        value: 0,
        includedMonthsIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    ],
    recurrentBills: [
      {
        id: 101,
        name: "Aluguel",
        value: 1300,
        includedMonthsIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    ],
  },
  months: [
    {
      id: 1,
      name: "Janeiro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [
        {
          id: 201,
          name: "Example",
          value: 1200,
        },
      ],
    },
    {
      id: 2,
      name: "Fevereiro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 3,
      name: "Março",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 4,
      name: "Abril",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 5,
      name: "Maio",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 6,
      name: "Junho",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 7,
      name: "Julho",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 8,
      name: "Agosto",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 9,
      name: "Setembro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 10,
      name: "Outubro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 11,
      name: "Novembro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
    {
      id: 12,
      name: "Dezembro",
      avaliableMoney: 0,
      totalEarnings: 0,
      totalBills: 0,
      bills: [],
    },
  ],
};

export const ProfileContext = createContext<ProfileContextType>({
  userProfile: INITIAL_STATE,
});

const Home: NextPage = () => {
  const [userProfile, setUserProfile] = useState<Profile>(INITIAL_STATE);

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      <Workspace />
    </ProfileContext.Provider>
  );
};

export default Home;

