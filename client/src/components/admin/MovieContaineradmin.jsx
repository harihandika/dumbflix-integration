import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieListadmin from "./MovieListadmin";
import dataMovies from "../../dataDummy/DataFakeMovies";
console.log(dataMovies);

function MovieContaineradmin() {
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h3 className="text-light">Movies</h3>
        <Row>
          {dataMovies.map((movies, index) => {
            return (
              <Col md={2} key={index}>
                <MovieListadmin
                  movieImg={movies.movieImg}
                  title={movies.title}
                  year={movies.year}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieContaineradmin;
