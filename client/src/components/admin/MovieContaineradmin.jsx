import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieListadmin from "./MovieListadmin";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../../config/api';
import {UserContext} from '../../context/userContext';


function MovieContaineradmin() {
  // Fetching product data from database
  const [state] = useContext(UserContext);
  console.log("ini state",state)
let { data: films } = useQuery('filmsCache', async () => {
  const response = await API.get('/films');
  console.log("ini response",response)
  return response.data.data;
});

  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h3 className="text-light">Movies</h3>
        <Row>
          {films?.map((movies, id) => {
            return (
              <Col md={2} key={id}>
                <MovieListadmin
                  movieImg={movies?.image}
                  title={movies?.title}
                  year={movies?.year}
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
