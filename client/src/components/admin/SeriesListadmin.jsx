import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function SeriesListadmin({ seriesImg, title, year, id }) {
  return (
    <Link to={`/film/${id}`} className="text-decoration-none">
      <Card className="rounded border-0 bg-black text-white">
        <Card.Img variant="top" src={seriesImg} style = {{height: "38vh"}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="text-muted">{year}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default SeriesListadmin;
