import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import DetailFilms from "../components/DetailFilms";

const FilmDetails = () => {
  return (
    <div>
      <NavbarProfil  />
      <DetailFilms />
    </div>
  );
};

export default FilmDetails;