import { format } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { ProfileContext } from ".";
import Header from "../components/Header";
import MonthCard from "../components/MonthCard";
import ProfileModal from "../components/ProfileModal";
import { Month } from "../interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import WalletModal from "../components/WalletModal";

// import { GetServerSideProps } from "next";
// interface Props {
//   user?: Profile;
// }

const Home = styled.div`
  height: 100vh;
`;

const Workspace: NextPage = () => {
  const [monthsPerView, setMonthsPerView] = useState<number>(3);
  // const [spaceBetweenCards, setSpaceBetweenCards] = useState<number>(50);
  const [showModalComponent, setShowModalComponent] = useState<boolean>(false);
  const [modalNumber, setModalNumber] = useState<number>(0);
  const { userProfile } = useContext(ProfileContext);

  const openModelComponent = () => setShowModalComponent(true);
  const closeModalComponent = () => setShowModalComponent(false);

  const incraseMonthsQuantity = () => {
    if (monthsPerView < 4) {
      setMonthsPerView(monthsPerView + 1);
    }
  };

  const decraseMonthsQuantity = () => {
    if (monthsPerView > 1) {
      setMonthsPerView(monthsPerView - 1);
    }
  };

  // const incraseSpaceBetweenCards = () => {
  //   if (spaceBetweenCards < 100) {
  //     setSpaceBetweenCards(spaceBetweenCards + 20);
  //   }
  // };

  // const decraseSpaceBetweenCards = () => {
  //   if (spaceBetweenCards > 0) {
  //     setSpaceBetweenCards(spaceBetweenCards - 20);
  //   }
  // };

  const selectModal = (code: number) => {
    setModalNumber(code);
    openModelComponent();
  };

  return (
    <Home>
      <Head>
        <title>Money Manager</title>
      </Head>
      <Modal
        show={showModalComponent}
        centered={true}
        onEscapeKeyDown={closeModalComponent}>
        {modalNumber === 1 ? (
          <ProfileModal closeModalComponent={closeModalComponent} />
        ) : (
          <WalletModal closeModalComponent={closeModalComponent} />
        )}
      </Modal>
      <Container fluid className='pt-3'>
        <Row>
          <Header
            userName={userProfile?.name}
            selectModal={selectModal}
            incraseMonthsQuantity={incraseMonthsQuantity}
            decraseMonthsQuantity={decraseMonthsQuantity}
            // incraseSpaceBetweenCards={incraseSpaceBetweenCards}
            // decraseSpaceBetweenCards={decraseSpaceBetweenCards}
          />
          <Swiper
            mousewheel
            freeMode
            initialSlide={parseInt(format(new Date(), "M")) - 2 ?? 1}
            slidesPerView={monthsPerView}
            spaceBetween={60}
            modules={[FreeMode, Mousewheel]}>
            {userProfile?.months?.map((month: Month, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <MonthCard monthId={month.id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
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
