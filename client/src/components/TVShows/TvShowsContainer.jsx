import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery, useMutation } from 'react-query';
import { API } from '../../config/api';
import {UserContext} from '../../context/userContext';
import TvSeriesList from "./TVSeriesList";

const TvSeriesContainer = () => {
  const [state] = useContext(UserContext);
  let { data: films } = useQuery('seriesCache', async () => {
    const response = await API.get('/films');
    console.log("ini response",response)
   
  const filterCategory = response.data.data;
  const filterResult = filterCategory.filter((e) => {
    if(e.category.id === 2){
      return e.category.id === 2;
  
    }
  });
  console.log("ini film",filterResult);
  return filterResult;
  });
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h4 className="text-light mb-4">TV Series</h4>
        <Row>
        {films?.map((movies, index) => {
            return (
              <Col md={2} key={index}>
                <TvSeriesList
                id={movies?.id}
                  seriesImg={movies?.image}
                  title={movies?.title}
                  year={movies?.year}
                />{" "}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default TvSeriesContainer;