import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import DetailFilms from "../components/DetailFilms";

const Home = () => {
  return (
    <div>
      <Navbar />
      <DetailFilms />
    </div>
  );
};

export default Home;