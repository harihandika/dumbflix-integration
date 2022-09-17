import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TvSeriesList from "./TVSeriesList";
import dummyTvSeriesImg from "../../img/GOT.jpg";
import JJK from "../../img/jujutsuKaisen.jpg";
import Persona from "../../img/persona3.jpg";
import Spy from "../../img/spyxfamily.jpg";
import Castlevania from "../../img/castlevania.jpg";
import MH from "../../img/moneyHeist.jpg";

const TvSeriesContainer = () => {
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
      <h3 className="text-start text-white fw-bold mb-3">Tv Series</h3>
      <Row>
        {tvSeriesList.map((tv, index) => (
          <Col md={2} key={index}>
            <TvSeriesList
              tvSeriesImg={tv.tvSeriesImg}
              title={tv.title}
              year={tv.year}
            />
          </Col>
        ))}
        <Col md={2}>
          <Card className="rounded shadow border-0 bg-black text-white d-flex justify-content-center align-items-center">
            <Link
              to="/tvshows"
              className="text-decoration-none text-white see__more-link"
            >
              <p>
                See More <FaArrowAltCircleRight />
              </p>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TvSeriesContainer;
