import type { NextPage } from "next";
import Workspace from "./workspace";
import { ProfileContextProvider } from "../contexts/ProfileContext";

const Home: NextPage = () => {
  return (
    <ProfileContextProvider>
      <Workspace />
    </ProfileContextProvider>
  );
};

export default Home;

