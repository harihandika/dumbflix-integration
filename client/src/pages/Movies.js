import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import ImgOverlayExample from "../components/Carousel";
import MoviesContainer from "../components/Movies/MoviesContainer";
import MoviesTab from "../components/Movies/MoviesTab";

const Movies = () => {
  return (
    <div>
      <NavbarProfil />
      <ImgOverlayExample />
      <MoviesContainer />
      <MoviesTab />
    </div>
  );
};

export default Movies;