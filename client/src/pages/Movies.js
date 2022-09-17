import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavSchemesExample from "../components/Navbar";
import ImgOverlayExample from "../components/Carousel";
import MoviesContainer from "../components/Movies/MoviesContainer";
import MoviesTab from "../components/Movies/MoviesTab";

const Movies = () => {
  return (
    <div>
      <NavSchemesExample />
      <ImgOverlayExample />
      <MoviesContainer />
      <MoviesTab />
    </div>
  );
};

export default Movies;