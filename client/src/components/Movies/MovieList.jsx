import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ id, movieImg, title, year }) => {
  return (
<Link to={`/film/${id}`} className="text-decoration-none">
    <Card className="rounded border-0 bg-black text-white">
      <Card.Img
        style={{ height: "15rem", border: "1px black", borderRadius: "5px" }}
        variant="top"
        src={movieImg}
      />
      <Card.Body>
          {title}
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default MovieList;
