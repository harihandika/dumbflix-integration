import React, { useState, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieList from "./MovieList";
import { useQuery } from 'react-query';
import { API } from '../../config/api';
import {UserContext} from '../../context/userContext';


const MoviesTab = () => {

const [state] = useContext(UserContext);
let { data: films } = useQuery('moviesCache', async () => {
  const response = await API.get('/films');
  console.log("ini response",response)
 
const filterCategory = response.data.data;
const filterResult = filterCategory.filter((e) => {
  if(e.category.id === 1){
    return e.category.id === 1;

  }
});
console.log("ini film",filterResult);
return filterResult;
});
  return (
    <Container className="my-5 overflow-hidden" id="">
      <Row>
        {films.map((movie, index) => (
          <Col md={2} key={index}>
            <MovieList movieImg={movie.movieImg} title={movie.title} year={movie.year} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesTab;
