import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { format } from "date-fns";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import styled from "styled-components";
import UserModal from "../components/Modals/UserModal";
import WalletModal from "../components/Modals/WalletModal";

const Home = () => {
  const [currentMonth, setCurrentMonth] = useState();
  const [cards, setCards] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    axios
    setCards(AllMonths.data);
    setCurrentMonth(parseInt(format(new Date(), "M")) - 1);
  }, [cards]);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOpenModal = (code) => {
    setSelectedModal(code);
    handleOpen();
  };

  return (
    <Container fluid className='pt-3'>
      <Row>
        <Header handleOpenModal={handleOpenModal} />
        <Slider
          className='centerSlides'
          accessibility={true}
          dots={false}
          infinite={true}
          arrows={false}
          swipeToSlide={true}
          focusOnSelect={true}
          slidesToShow={3}
          initialSlide={currentMonth}
          centerMode={true}
          responsive={[
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
            // {
            //   breakpoint: 540,
            //   settings: {
            //     slidesToShow: 1,
            //     className: "teste",
            //   },
            // },
          ]}>
          {cards &&
            cards.map((card) => {
              return <Card key={card.id} Info={card} />;
            })}
        </Slider>
        <Modal
          show={showModal}
          centered={true}
          keyboard={true}
          onEscapeKeyDown={handleClose}>
          {selectedModal && selectedModal === 1 ? (
            <UserModal />
          ) : (
            <WalletModal />
          )}
        </Modal>
      </Row>
    </Container>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`https://api.spacexdata.com/v4/launches/latest`);
//   const data = await res.json();

//   return { props: { data } };
// }

export default Home;
