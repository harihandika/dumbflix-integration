import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import ImgOverlayExample from "../components/Carousel";
import TVSeriesContainer from "../components/TVShows/TvShowsContainer";

const TVSeries = () => {
  return (
    <div>
      <NavbarProfil />
      <ImgOverlayExample />
      <TVSeriesContainer />
    </div>
  );
};

export default TVSeries;