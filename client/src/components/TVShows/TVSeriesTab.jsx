import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TvSeriesList from "./TVSeriesList";
import dummyTvSeriesImg from "../../img/GOT.jpg";
import JJK from "../../img/jujutsuKaisen.jpg"
import Persona from "../../img/persona3.jpg"
import Spy from "../../img/spyxfamily.jpg"
import Castlevania from "../../img/castlevania.jpg"
import MH from "../../img/moneyHeist.jpg"

const TvSeriesTab = () => {
  const [tvSeriesList, setTvSeriesList] = useState([
    {
      tvSeriesImg: dummyTvSeriesImg,
      title: "Game of Thrones",
      year: 2011,
    },
    {
      tvSeriesImg: JJK,
      title: "Jujutsu Kaisen",
      year: 2021,
    },
    {
      tvSeriesImg: Persona,
      title: "Persona 3",
      year: 2016,
    },
    {
      tvSeriesImg: Spy,
      title: "Spy X Family",
      year: 2022,
    },
    {
      tvSeriesImg: Castlevania,
      title: "Castlevania",
      year: 2017,
    },
    {
      tvSeriesImg: MH,
      title: "Money Heist",
      year: 2017,
    },
  ]);
  return (
    <Container className="my-5 overflow-hidden" id="tv-series">
      <Row>
        {tvSeriesList.map((tv, index) => (
          <Col md={2} key={index}>
            <TvSeriesList tvSeriesImg={tv.tvSeriesImg} title={tv.title} year={tv.year} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TvSeriesTab;