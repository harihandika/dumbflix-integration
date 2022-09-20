import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesListadmin from "./SeriesListadmin";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { API } from '../../config/api';
import {UserContext} from '../../context/userContext';

function SeriesContaineradmin() {
  const [state] = useContext(UserContext);
let { data: films } = useQuery('filmsCache', async () => {
  const response = await API.get('/films');
  console.log("ini response",response)
  return response.data.data;
});
console.log("ini fil",films)
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h4 className="text-light mb-4">TV Series</h4>
        <Row>
        {films?.map((movies, id) => {
            return (
              <Col md={2} key={id}>
                <SeriesListadmin
                  seriesImg={movies?.image}
                  title={movies?.title}
                  year={movies?.year}
                />{" "}
                {/* Looping */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SeriesContaineradmin;
