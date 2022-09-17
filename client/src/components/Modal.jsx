import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation } from 'react-query';
import { API } from '../config/api';
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/Auth.modules.css";
import { useNavigate } from "react-router-dom";

const initialUserState = {
  email: "",
  password: "",
  fullName: "",
  gender: "",
  phone: "",
  address: "",
  photo: "no-people",
  status: "Active",
};

const AuthModal = ({ show, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const [showPw, setShowPw] = useState(false);

  const switchMode = () => {
    setUserData(initialUserState);
    setShowPw(false);
    setIsRegister(!isRegister);
  };

  const [userData, setUserData] = useState(initialUserState);

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();

    if (!isRegister) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } 
    // else {
    //   localStorage.setItem("user", JSON.stringify(userData));
    //   navigate("/"); 
    // }
  };

  const [message, setMessage] = useState(null);
  
  const handleSubmit1 = useMutation(async (e) => {
    try {
      e.preventDefault();
  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(userData);
  
      // Insert data user to database
      const response = await API.post('/register', body, config);
  
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white border-0">
        {/*  */}
      {message && message}
      {/*  */}
        <Form className="px-1" onSubmit={(e) => handleSubmit1.mutate(e)}>
          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name="email" className="bg-group" placeholder="Email" onChange={handleChange} />
          </Form.Group>

          {/* Password */}
          <div className="mb-3 pw__container">
            <Form.Group controlId="password">
              <Form.Control type={showPw ? "text" : "password"} placeholder="Password" className="bg-group" onChange={handleChange} />
            </Form.Group>
            <div className="pw__icon-container" onClick={() => setShowPw(!showPw)}>
              {showPw ? <FaEyeSlash className="pw__icon" /> : <FaEye className="pw__icon" />}
            </div>
          </div>

          {/* Full Name */}
          {isRegister && (
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Control type="text" name="fullName" placeholder="Full Name" className="bg-group" onChange={handleChange} />
            </Form.Group>
          )}

          {/* Gender */}
          {isRegister && (
            <Form.Select className="mb-3 bg-group" onChange={handleChange} name="gender">
              <option disabled selected>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          )}

          {/* Phone
           */}
          {isRegister && (
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control name="phone" type="number" placeholder="Phone" className="bg-group" onChange={handleChange} />
            </Form.Group>
          )}

          {/* Address */}
          {isRegister && (
            <Form.Group className="mb-3" controlId="address">
              <Form.Control as="textarea" name="address" placeholder="Address" className="bg-group" onChange={handleChange} />
            </Form.Group>
          )}
          <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant={isRegister ? "light" : "danger"} type="submit" className={isRegister ? "text-danger" : "text-white"}>
              {isRegister ? "Register" : "Login"}
            </Button>
            <p className="text-muted text-center mt-2">
              {isRegister ? "Already have an account? Click " : "Don't have an account? Click "}{" "}
              <span className="switchBtn text-primary" onClick={switchMode}>
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
