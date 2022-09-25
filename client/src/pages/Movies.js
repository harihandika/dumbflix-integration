import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import ImgOverlayExample from "../components/Carousel";
import MoviesContainer from "../components/Movies/MoviesContainer";

const Movies = () => {
  return (
    <div>
      <NavbarProfil />
      <ImgOverlayExample />
      <MoviesContainer />
    </div>
  );
};

export default Movies;