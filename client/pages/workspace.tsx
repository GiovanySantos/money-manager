import { format } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import Header from "../components/smart/Header";
import MonthCard from "../components/smart/MonthCard";
import ProfileModal from "../components/smart/ProfileModal";
import { ProfileContext } from "../contexts/ProfileContext";
import { Month } from "../interfaces/interfaces";
import user from "./testUser.json";

// import { GetServerSideProps } from "next";
// interface Props {
//   user?: Profile;
// }

const Home = styled.div`
  height: 100vh;
`;

const Workspace: NextPage = () => {
  const [monthsQuantity, setMonthsQuantity] = useState<number>(3);
  const [showModalComponent, setShowModalComponent] = useState<boolean>(false);
  const [modalNumber, setModalNumber] = useState<number>(0);
  const { userProfile, setUserProfile } = useContext(ProfileContext);

  const sliderSettings: Settings = {
    initialSlide: parseInt(format(new Date(), "M")) - 1,
    slidesToShow: monthsQuantity,
    dots: false,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    accessibility: true,
    centerMode: true,
    draggable: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: monthsQuantity < 2 ? monthsQuantity : 2,
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

  const openModelComponent = () => setShowModalComponent(true);
  const closeModalComponent = () => setShowModalComponent(false);

  const incraseMonthsQuantity = () => {
    if (monthsQuantity < 4) {
      setMonthsQuantity(monthsQuantity + 1);
    }
  };
  const decraseMonthsQuantity = () => {
    if (monthsQuantity > 1) {
      setMonthsQuantity(monthsQuantity - 1);
    }
  };

  const selectModal = (code: number) => {
    setModalNumber(code);
    openModelComponent();
  };

  useEffect(() => {
    //? Substituir pela chamada de API
    setUserProfile(user);
  }, [setUserProfile]);

  return (
    <Home>
      <Head>
        <title>Money Manager</title>
      </Head>
      <Modal
        show={showModalComponent}
        centered={true}
        onEscapeKeyDown={closeModalComponent}>
        {modalNumber === 1 ? <ProfileModal /> : <h1>Nothing here yet</h1>}
      </Modal>
      <Container fluid className='pt-3'>
        <Row>
          <Header
            userName={userProfile?.name}
            selectModal={selectModal}
            incraseMonthsQuantity={incraseMonthsQuantity}
            decraseMonthsQuantity={decraseMonthsQuantity}
          />
          <Slider {...sliderSettings}>
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
        <footer>Powered by Torradinha</footer>
      </Container>
    </Home>
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
