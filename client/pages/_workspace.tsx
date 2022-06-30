import { format } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { ProfileContext } from ".";
import Header from "../components/Header";
import MonthCard from "../components/MonthCard";
import ProfileModal from "../components/ProfileModal";
import { Month } from "../interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import WalletModal from "../components/WalletModal";
import Option from "../components/Option";
import Content from "../components/Content";

// import { GetServerSideProps } from "next";
// interface Props {
//   user?: Profile;
// }

const Home = styled.div`
  height: 100vh;
`;

const Workspace: NextPage = () => {
  const [showModalComponent, setShowModalComponent] = useState<boolean>(false);
  const [modalNumber, setModalNumber] = useState<number>(0);
  const { userProfile } = useContext(ProfileContext);

  const openModelComponent = () => setShowModalComponent(true);
  const closeModalComponent = () => setShowModalComponent(false);

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
          <Header userName={userProfile?.name} selectModal={selectModal} />
          <Col className='d-flex justify-content-between align-items-center'>
            <Col sm={12} md={2}>
              <div className='mb-2 text-center'>
                <Content content='Navegação rápida' />
              </div>
              {userProfile?.months?.map((month: Month, i: number) => {
                return (
                  <div key={i} className='mb-2'>
                    <Option OptionText={month.name} />
                  </div>
                );
              })}
            </Col>
            <Col md={10}>
              <div className='d-flex justify-content-center mb-2 text-center'>
                <Swiper
                  effect={"cards"}
                  initialSlide={parseInt(format(new Date(), "M")) - 2 ?? 1}
                  modules={[EffectCards]}
                  grabCursor={true}>
                  {userProfile?.months?.map((month: Month, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <MonthCard monthId={month.id} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
          </Col>
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
