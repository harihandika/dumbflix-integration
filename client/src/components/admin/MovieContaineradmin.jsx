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

  // let { data: categorys } = useQuery('categorysCache', async () => {
  //   const response1 = await API.get('/categorys');
  //   console.log("inicate",response1)
  //   return response1.data.data;
  // });
let { data: films } = useQuery('filmsCache', async () => {
  const response = await API.get('/films');
  console.log("ini response",response)
  return response.data.data;
});
console.log("cate")

  return (
    <div>
      <Container className="my-5 overflow-hidden">
        <h3 className="text-light">Movies</h3>
        <Row>
          {films?.map((movies, index) => {
            return (
              <Col md={2} key={index}>
                <MovieListadmin
                id={movies?.id}
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
