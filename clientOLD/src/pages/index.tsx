import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import { format } from "date-fns";
import Slider from "react-slick";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import UserModal from "../components/Modals/UserModal";
import WalletModal from "../components/Modals/WalletModal";
import { GetServerSideProps } from "next";

interface Earn {
  earnFrom: String;
  Value: Number;
}
interface Bill {
  isPinned: Boolean;
  name: String;
  value: Number;
}

interface Month {
  id: Number;
  month: String;
  earns: [Earn];
  bills: [Bill];
}

interface IProps {
  props: Month;
}

const Home: React.FC<IProps> = (props) => {
  const [currentMonth, setCurrentMonth] = useState<any>();
  const [cards, setCards] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState<number>();

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOpenModal = (code: number) => {
    setSelectedModal(code);
    handleOpen();
  };

  useEffect(() => {
    setCurrentMonth(parseInt(format(new Date(), "M")) - 1);
  }, [cards]);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res: any = await axios.get("getAllMonths.json");
    const data: [Month] = await res.data;
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
};

export default Home;
