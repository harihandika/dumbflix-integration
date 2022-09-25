import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaUserAlt, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../img/profileIcon.jpg";
import Logo from "../img/dumbflix.png";
import Register from "./Register";
import Login from "./Login";

const NavbarLogin = () => {
  const [isLoginn, setIsLoginn] = useState(true);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const registerHere = (e) => {
    e.preventDefault();
    setRegisterShow(false);
    setLoginShow(true);
  };

  const loginHere = (e) => {
    e.preventDefault();
    setLoginShow(false);
    setRegisterShow(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    if (user) setIsLoginn(true);
    else setIsLoginn(false);
  }, [user, handleLogout]);

  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div style={{ marginLeft: "40vw" }}>
            <Navbar.Brand >
              <img src={Logo} alt="" />
            </Navbar.Brand>
          </div>
          <Nav className="ms-auto">
              <div>
              <Button
                style={{ marginRight: "20px" }}
                variant="danger"
                onClick={() => setLoginShow(true)}
              >
                Login
              </Button>

              <Button
                style={{ marginRight: "20px" }}
                variant="danger"
                onClick={() => setRegisterShow(true)}
              >
                Registrasi
              </Button>
              </div>
            <Login
        loginHere={loginHere}
        loginShow={loginShow}
        setLoginShow={setLoginShow}
        setIsLogin={setIsLoginn} />
            <Register registerHere={registerHere}
        registerShow={registerShow}
        setRegisterShow={setRegisterShow} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;
