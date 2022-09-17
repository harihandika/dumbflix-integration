import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ movieImg, title, year }) => {
  return (
    <Card className="rounded border-0 bg-black text-white">
      <Card.Img
        style={{ height: "15rem", border: "1px black", borderRadius: "5px" }}
        variant="top"
        src={movieImg}
      />
      <Card.Body>
        <a
          href="/details"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
          }}
        >
          {title}
        </a>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieList;
