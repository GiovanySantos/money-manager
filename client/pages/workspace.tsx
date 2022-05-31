import { format } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { ProfileContext } from ".";
import Header from "../components/smart/Header";
import MonthCard from "../components/smart/MonthCard";
import ProfileModal from "../components/smart/ProfileModal";
import { Month } from "../interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// import { GetServerSideProps } from "next";
// interface Props {
//   user?: Profile;
// }

const Home = styled.div`
  height: 100vh;
`;

const Workspace: NextPage = () => {
  const [monthsPerView, setMonthsPerView] = useState<number>(3);
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
          <Swiper
            initialSlide={parseInt(format(new Date(), "M")) - 2 ?? 1}
            slidesPerView={monthsPerView}
            spaceBetween={100}
            freeMode={true}
            modules={[FreeMode, Pagination]}>
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
