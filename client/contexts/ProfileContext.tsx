import React, { createContext, ReactNode, useState } from "react";
import { Profile } from "../interfaces/interfaces";

export const ProfileContext = createContext<Profile | any>({});

export const ProfileContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userProfile, setUserProfile] = useState<Profile | undefined>(
    undefined
  );

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
