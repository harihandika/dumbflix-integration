import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import ImgOverlayExample from "../components/Carousel";
import TvSeriesContainer from "../components/TVShows/TvShowsContainer";
import MoviesContainer from "../components/Movies/MoviesContainer";

const Home = () => {
  return (
    <div>
      <NavbarProfil />
      <ImgOverlayExample />
      <MoviesContainer />
      <TvSeriesContainer />
    </div>
  );
};

export default Home;
