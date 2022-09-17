import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MovieContaineradmin from "../components/admin/MovieContaineradmin";
import SeriesContaineradmin from "../components/admin/SeriesContaineradmin";

function HomeAdmin() {
  const [isTvseries, setIsTvseries] = useState(true);
  const switchMode = () => {
    setIsTvseries(true);
  };
  const switchMode1 = () => {
    setIsTvseries(false);
  };
  return (
    <>
      <div className="hero mt-5 text-light d-flex flex-column align-content-star ">
        <div className="d-flex" style={{ width: "1500px" }}>
          <div className="d-flex">
            <h3 className="fw-bold">List Film</h3>
            <Dropdown className="mx-3">
              <Dropdown.Toggle
                variant="white"
                id="dropdown-basic"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "solid",
                  width: "120px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "0px",
                }}
                className="fs-5"
              >
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item onClick={switchMode} className="text-light">
                  <span>TV Series</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={switchMode1} className="text-light">
                  <span>Movies</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex col-2" style={{ marginLeft: "770px" }}>
            <Button as={Link} to="/addfilm" variant="danger">
              Add Film
            </Button>
          </div>
        </div>
      </div>
      <div className="sectionSeries">
        {isTvseries ? <SeriesContaineradmin /> : <MovieContaineradmin />}
      </div>
    </>
  );
}

export default HomeAdmin;
