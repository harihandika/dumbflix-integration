import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarProfil from "../components/NavbarProfil";
import ImgOverlayExample from "../components/Carousel";
import TVSeriesContainer from "../components/TVShows/TvShowsContainer";
import TvSeriesTab from "../components/TVShows/TVSeriesTab";

const TVSeries = () => {
  return (
    <div>
      <NavbarProfil />
      <ImgOverlayExample />
      <TVSeriesContainer />
      <TvSeriesTab />
    </div>
  );
};

export default TVSeries;