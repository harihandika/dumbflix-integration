import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useState, useContext } from "react";
import {UserContext} from '../context/userContext';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaUserAlt, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../img/profileIcon.jpg";
import Logo from "../img/dumbflix.png";


// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }
const Navbarprofil = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate()

  const logout = () => {
      console.log(state)
      dispatch({
          type: "LOGOUT"
      })
      navigate("/auth")
  }
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              style={{
                color: "white",
                marginLeft: "30px",
                fontWeight: "bold",
                marginRight: "10px",
              }}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
              }}
              to="/tvshows"
            >
              TV Shows
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
              }}
              to="/movies"
            >
              Movies
            </Nav.Link>
          </Nav>
          <div style={{ marginRight: "90px" }}>
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="" />
            </Navbar.Brand>
          </div>

          <Nav className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ marginRight: "50px" }}
                  id="user-dropdown"
                  variant="dark"
                >
                  <img
                    href="/"
                    src={ProfileIcon}
                    alt="ProfileIcon"
                    width={40}
                    className="rounded-pill"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item as={Link} to="/profile">
                    <FaUserAlt className="text-danger me-2" />{" "}
                    <span>Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/payment">
                    <FaMoneyBillAlt className="text-danger me-2" />{" "}
                    <span>Pay</span>
                  </Dropdown.Item>
                  <Dropdown.Divider className="bg-secondary" />
                  <Dropdown.Item as={Link} to="/auth" >
                    <FaSignOutAlt className="text-danger me-2" />
                    <span onClick={logout}>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarprofil;
