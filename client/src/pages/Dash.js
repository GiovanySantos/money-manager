import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import AllMonths from "../api/getAllMonths.json";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

const Dash = (props) => {
  const [currentMonth, setCurrentMonth] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    console.log(props.users);
    setCards(AllMonths.data);
    setCurrentMonth(parseInt(format(new Date(), "M")) - 1);
  }, [cards]);

  return (
    <Container fluid className='pt-3'>
      <Row>
        <Header />
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
          ]}>
          {cards &&
            cards.map((card) => {
              return <Card key={card.id} Info={card} />;
            })}
        </Slider>
      </Row>
    </Container>
  );
};

export const getServerSideProps = async () => {
  // const headers = new Headers();

  // headers.append("Accept", "application/json");

  const response = await fetch("../api/getAllMonths.json");

  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Dash;
