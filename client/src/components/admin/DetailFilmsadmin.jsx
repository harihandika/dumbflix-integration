import React, { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import AddEpisode from "./AddEpisode";
import dummyDetailImg from "../../img/hero2.png";
import Haikyu from "../../img/moviecard/card15.png";
import "../../css/Detail.modules.css";

const Detailadmin = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div
        style={{ marginTop: "70px" }}
        className="d-flex justify-content-center bg-dark mb-5"
      >
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/JOGp2c7-cKc"
          title="Haikyuu Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
                  <img src={Haikyu} alt="dummy img" width={160} />
                </div>
                <div>
                  <div>
                    <h3>Haikyu!!</h3>
                    <div className="d-flex align-items-center mt-4">
                      <p className="m-0 p-0 text-muted">2017</p>
                      <span className="px-2 ms-3 border border-secondary text-muted rounded">
                        Tv Series
                      </span>
                    </div>
                  </div>

                  <p className="mt-4">
                    Determined to be like the volleyball championship's star
                    player nicknamed "the small giant", Shoyo joins his school's
                    volleyball club.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded shadow border-0 bg-black text-white position-relative">
              <img
                src={dummyDetailImg}
                alt="haikyu-image"
                width={500}
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
