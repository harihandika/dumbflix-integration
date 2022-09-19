  import React, { useContext, useState } from "react";
import { useEffect } from "react";
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
};

const Login = ({ loginShow,
  setLoginShow,
  loginHere,
  setIsLogin,}) => {
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
  const [state, dispatch] = useContext(UserContext);
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
      const response = await API.post('/login', body, config);
      
      if (response?.status === 200) {
        navigate('/');
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data,
        });

        // Status check
        console.log(response.data.data.role );
        if (response.data.data.role === 'Admin') {
          navigate('/homeadmin');
        } else {
          navigate('/');
        }
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
    <Modal show={loginShow}
    onHide={() => setLoginShow(false)}>
      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{"Login"}</Modal.Title>
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

  <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant={ "danger" } type="submit" className={"text-white"}>
              { "Login"}
            </Button>
            <p className="text-muted text-center mt-2">
              {"Already have an account? Click "}
              <span className="switchBtn text-light" onClick={loginHere} style={{cursor:"pointer"}}>
                Here
              </span>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
