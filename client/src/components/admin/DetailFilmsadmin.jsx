import React, { useState, useContext } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import AddEpisode from "./AddEpisode";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { API } from '../../config/api';
import {UserContext} from '../../context/userContext';
import "../../css/Detail.modules.css";

const Detailadmin = () => {
  const title = "Detail";
  document.title = "Dumbflix | " + title;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [state] = useContext(UserContext);
  let navigate = useNavigate();
  let { id } = useParams();
let { data: film } = useQuery('filmCache', async () => {
  const response = await API.get('/film/'+ id);
  console.log("ini response",response)
  return response.data.data;
});
console.log("ini film",film);
  return (
    <>
      <div
        style={{ marginTop: "70px" }}
        className="d-flex justify-content-center bg-dark mb-5"
      >
        <iframe
          width="1000"
          height="500"
          src={film?.link}
          title="Haikyuu Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen = "true"
        ></iframe>
      </div>

      <Container className="my-5">
        <div className="text-end">
          <Button
            className="col-2"
            style={{ backgroundColor: "red", border: "none" }}
            onClick={handleShow}
          >
            Add Episode
          </Button>
        </div>
        <AddEpisode show={show} handleClose={handleClose} />
        <Row className="mt-5">
          <Col md={6}>
            <Card
              className="rounded border-0 shadow bg-black text-white p-2"
              style={{ width: "550px" }}
            >
              <Card.Body className="d-flex">
                <div className="me-5">
                  <img src={film?.thumbnail} alt="dummy img" style={{height:"42vh", width:"16vw"}} />
                </div>
                <div>
                  <div>
                    <h3>{film?.title}</h3>
                    <div className="d-flex align-items-center mt-4">
                      <p className="m-0 p-0 text-muted">2017</p>
                      <span className="px-2 ms-3 border border-secondary text-muted rounded">
                       {film?.category.name}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4"> {film?.desc} </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded shadow border-0 bg-black text-white position-relative">
              <img
                src={film?.thumbnail}
                alt="haikyu-image"
                style={{width: "35vw"}}
                height={290}
                className="rounded episode__img"
              />
              <div className="position-absolute episode__img-overlay">
                <h5 className="fw-bold">In play now</h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detailadmin;
