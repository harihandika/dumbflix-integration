import React, { useContext, useState } from "react";
import { useMutation } from 'react-query';
import {UserContext} from '../context/userContext';
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

const Register = ({ registerShow,
  setRegisterShow,
  registerHere, }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [state, dispatch] = useContext(UserContext);

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

      if (response?.status === 200) {
        console.log(response)
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setUserData(initialUserState);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
      
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
    <Modal  show={registerShow}
    onHide={() => setRegisterShow(false)}>
      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{"Register"}</Modal.Title>
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
              <Form.Control type={showPw ? "text" : "password"} name="password" placeholder="Password" className="bg-group" onChange={handleChange} />
            </Form.Group>
            <div className="pw__icon-container" onClick={() => setShowPw(!showPw)}>
              {showPw ? <FaEyeSlash className="pw__icon" /> : <FaEye className="pw__icon" />}
            </div>
          </div>

          {/* Full Name */}
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Control type="text" name="fullName" placeholder="Full Name" className="bg-group" onChange={handleChange} />
            </Form.Group>

          {/* Gender */}
          <Form.Group className="mb-3" controlId="gender">
          <Form.Select className="mb-3 bg-group" onChange={handleChange} name="gender">
              <option hidden selected > Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
            </Form.Group>

          {/* Phone
           */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control name="phone" type="number" placeholder="Phone" className="bg-group" onChange={handleChange} />
            </Form.Group>

          {/* Address */}

            <Form.Group className="mb-3" controlId="address">
              <Form.Control as="textarea" name="address" placeholder="Address" className="bg-group" onChange={handleChange} />
            </Form.Group>

          <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant={ "danger" }type="submit" className={"text-light"}>
              { "Register"}
            </Button>
            <p className="text-muted text-center mt-2">
              {"Already have an account? Click "}
              <span className="switchBtn text-light" onClick={registerHere} style={{cursor:"pointer"}}>
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
