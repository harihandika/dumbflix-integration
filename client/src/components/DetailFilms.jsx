import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import dummyDetailImg from "../img/haikyudetails.jpg";
import Haikyu from "../img/haikyu.jpg";
import "../css/Detail.modules.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const [isLogin, setIsLogin] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (user) setIsLogin(true);
    else {
      setIsLogin(false);
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <div style={{backgroundColor: "black", marginTop: '70px'}} className="d-flex justify-content-center">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/JOGp2c7-cKc"
          title="Haikyuu Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card className="rounded border-0 shadow bg-dark text-white p-2" style={{ width: "550px" }}>
              <Card.Body className="d-flex">
                <div className="me-5">
                  <img src={Haikyu} alt="dummy img" width={160} />
                </div>
                <div>
                  <div>
                    <h3>Haikyu!!</h3>
                    <div className="d-flex align-items-center mt-4">
                      <p className="m-0 p-0 text-muted">2017</p>
                      <span className="px-2 ms-3 border border-secondary text-muted rounded">Tv Series</span>
                    </div>
                  </div>

                  <p className="mt-4">Determined to be like the volleyball championship's star player nicknamed "the small giant", Shoyo joins his school's volleyball club.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded shadow border-0 bg-dark text-white position-relative">
              <img src={dummyDetailImg} alt="haikyu-image" width={500} className="rounded episode__img" />
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

export default Detail;
