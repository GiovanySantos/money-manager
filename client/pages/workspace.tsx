import { Button } from "@mui/material";
import { format } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Header from "../components/smart/Header";
import MonthCard from "../components/smart/MonthCard";
import ProfileModal from "../components/smart/ProfileModal";
import { ProfileContext } from "../contexts/ProfileContext";
import { Month, Profile } from "../interfaces/interfaces";
import styles from "../styles/Home.module.scss";
import user from "./testUser.json";

// import { GetServerSideProps } from "next";
// interface Props {
//   user?: Profile;
// }

const Workspace: NextPage = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    parseInt(format(new Date(), "M")) - 1
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedModal, setSelectedModal] = useState<number>();
  const { userProfile, setUserProfile } = useContext(ProfileContext);

  const settings: Settings = {
    initialSlide: 1,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    accessibility: true,
    centerMode: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOpenModal = (code: number) => {
    setSelectedModal(code);
    handleOpen();
  };

  useEffect(() => {
    //? Substituir pela chamada de API
    setUserProfile(user);
  }, [setUserProfile]);

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Money Manager</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Modal show={showModal} centered={true} onEscapeKeyDown={handleClose}>
        {selectedModal && selectedModal === 1 ? (
          <ProfileModal />
        ) : (
          <h1>Nothing here yet</h1>
        )}
      </Modal>
      <Container fluid className='pt-3'>
        <Row>
          <Header
            handleOpenModal={handleOpenModal}
            userName={userProfile?.name}
          />
          <Slider {...settings}>
            {userProfile &&
              userProfile.months.map((month: Month) => {
                return (
                  <div key={month.id}>
                    <MonthCard MonthInfo={month} />
                  </div>
                );
              })}
          </Slider>
        </Row>
      </Container>
      <footer className={styles.footer}>Powered by Torradinha</footer>
    </div>
  );
};

export default Workspace;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const res = await fetch("/testUser.json");
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data },
//   };
// };
