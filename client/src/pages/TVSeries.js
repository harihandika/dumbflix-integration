import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavSchemesExample from "../components/Navbar";
import ImgOverlayExample from "../components/Carousel";
import TVSeriesContainer from "../components/TVShows/TvShowsContainer";
import TvSeriesTab from "../components/TVShows/TVSeriesTab";

const TVSeries = () => {
  return (
    <div>
      <NavSchemesExample />
      <ImgOverlayExample />
      <TVSeriesContainer />
      <TvSeriesTab />
    </div>
  );
};

export default TVSeries;