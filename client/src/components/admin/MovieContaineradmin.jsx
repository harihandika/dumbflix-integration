import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieListadmin from "./MovieListadmin";
import dataMovies from "../../dataDummy/DataFakeMovies";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { API } from '../../config/api';
console.log(dataMovies);

function MovieContaineradmin() {
  // Fetching product data from database
  let navigate = useNavigate();
  let { id } = useParams();
let { data: films } = useQuery('filmsCache', async () => {
  const response = await API.get('/films');
  console.log("ini response",response)
  console.log("ini fil",films)
  return response.data.data;
});
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
