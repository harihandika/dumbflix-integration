import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaUserAlt, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../img/profileIcon.jpg";
import Logo from "../img/dumbflix.png";
import AuthModal from "./Modal";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [isLogin, setIsLogin] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    if (user) setIsLogin(true);
    else setIsLogin(false);
  }, [user, handleLogout]);

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
            {isLogin ? (
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
                  <Dropdown.Item href="/profile">
                    <FaUserAlt className="text-danger me-2" />{" "}
                    <span>Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/payment">
                    <FaMoneyBillAlt className="text-danger me-2" />{" "}
                    <span>Pay</span>
                  </Dropdown.Item>
                  <Dropdown.Divider className="bg-secondary" />
                  <Dropdown.Item href="#" onClick={handleLogout}>
                    <FaSignOutAlt className="text-danger me-2" />
                    <span>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                style={{ marginRight: "20px" }}
                variant="danger"
                onClick={handleShow}
              >
                Sign In
              </Button>
            )}
            <AuthModal show={show} handleClose={handleClose} />
            <AuthModal show={show} handleClose={handleClose} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
