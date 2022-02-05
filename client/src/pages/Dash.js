import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { AllMonths } from "../api/getAllMonths";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

const Dash = () => {
  const [currentMonth, setCurrentMonth] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(AllMonths);
    setCurrentMonth(parseInt(format(new Date(), "M")));
  }, [cards]);

  return (
    <Container fluid className='pt-3'>
      <Row>
        <Header />
        <Slider
          accessibility={true}
          dots={false}
          infinite={false}
          arrows={false}
          swipeToSlide={true}
          focusOnSelect={true}
          adaptiveHeight={true}
          slidesToShow={3}
          initialSlide={1}
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

export default Dash;
