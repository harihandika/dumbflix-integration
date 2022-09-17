import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesListadmin from "./SeriesListadmin";
import { useState } from "react";
// import youSeries from '../Images/you.png'
import data from "../../dataDummy/DataFakeSeries";

function SeriesContaineradmin() {
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h4 className="text-light mb-4">TV Series</h4>
        <Row>
          {data.map((data, index) => {
            return (
              <Col md={2} key={index}>
                <SeriesListadmin
                  seriesImg={data.seriesImg}
                  title={data.title}
                  year={data.year}
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
