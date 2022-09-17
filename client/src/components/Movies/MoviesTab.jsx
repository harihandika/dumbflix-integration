import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieList from "./MovieList";
import Haikyu from "../../img/haikyu.jpg";
import Boruto from "../../img/boruto.jpg"
import GoblinSlayer from "../../img/goblinSlayer.jpg"
import OnePiece from "../../img/onePiece.jpg"
import DetectiveConan from "../../img/detectiveConan.jpg"
import HXH from "../../img/hunterX.jpg"

const MoviesTab = () => {
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
    <Container className="my-5 overflow-hidden" id="">
      <Row>
        {movieLists.map((movie, index) => (
          <Col md={2} key={index}>
            <MovieList movieImg={movie.movieImg} title={movie.title} year={movie.year} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesTab;
