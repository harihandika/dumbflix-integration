import React from "react";
import { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MovieList from "./MovieList";
import Haikyu from "../../img/haikyu.jpg";
import Boruto from "../../img/boruto.jpg";
import GoblinSlayer from "../../img/goblinSlayer.jpg";
import OnePiece from "../../img/onePiece.jpg";
import DetectiveConan from "../../img/detectiveConan.jpg";
import HXH from "../../img/hunterX.jpg";

const MoviesContainer = () => {
  const [movieLists, setMovieLists] = useState([
    {
      movieImg: Haikyu,
      title: "Haikyu!!",
      year: 2017,
    },
    {
      movieImg: Boruto,
      title: "Boruto",
      year: 2021,
    },
    {
      movieImg: GoblinSlayer,
      title: "Goblin Slayer",
      year: 2018,
    },
    {
      movieImg: OnePiece,
      title: "One Piece",
      year: 1999,
    },
    {
      movieImg: HXH,
      title: "Hunter X Hunter",
      year: 2004,
    },
    {
      movieImg: DetectiveConan,
      title: "Detective Conan",
      year: 1998,
    },
  ]);

  return (
    <Container className="my-5 overflow-hidden" id="movie">
      <h3 className="text-start text-white fw-bold mb-3">Movie</h3>
      <Row>
        {movieLists.map((movie, index) => (
          <Col md={2} key={index}>
            <MovieList
              movieImg={movie.movieImg}
              title={movie.title}
              year={movie.year}
            />
          </Col>
        ))}
        <Col md={2}>
          <Card className="rounded shadow border-0 bg-black text-white d-flex justify-content-center align-items-center">
            <Link
              to="/movies"
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

export default MoviesContainer;
