import React, { useState, useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProfileIcon from "../img/dataimg/ft3.jpeg";
import "../css/Profile.modules.css";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';
import {UserContext} from '../context/userContext';
import { useEffect } from "react";
import {
  FaEnvelope,
  FaFemale,
  FaMale,
  FaMapMarked,
  FaPhone,
  FaRegMoneyBillAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useRef } from "react";

const initialUserState = {
  email: "",
  password: "",
  fullName: "",
  gender: "",
  phone: "",
  address: "",
  photo: ProfileIcon,
  status: "Active",
};

const ProfileDetail = () => {
  const title = "Profile";
  document.title = "Dumbflix | " + title;

  const [previewImage, setPreviewImage] = useState(ProfileIcon)

  const [state] = useContext(UserContext);
  function handleChange(e) {
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(url)
    }
  }

  const [userData, setUserData] = useState(initialUserState);

  const navigate = useNavigate();

  // Image Upload
  const [profileSrc, setProfileSrc] = useState(userData.photo);
  const hiddenFileInput = useRef(null);
  const handleFileInput = (e) => hiddenFileInput.current.click();
  const handleFileChange = (files) => {
    setUserData({ ...userData, photo: files });
  };
  console.log("prof",state.user);
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>

          <Card
            style={{ width: "800px", height: "650px", marginTop: "70px" }}
            className="rounded shadow border-0 bg-dark text-white p-5"
          >
            <div className="d-flex justify-content-between">
              <div className="me-5">
                <h3>Personal Info</h3>
                <div className="mt-3">
                  <div className="d-flex mb-3 align-items-start">
                    <FaUserCircle className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{state.user.fullname}</h5>
                      <p className="text-muted">Full Name</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 align-items-start">
                    <FaEnvelope className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{state.user.email}</h5>
                      <p className="text-muted">Email Address</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 align-items-start">
                    <FaRegMoneyBillAlt className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.status}</h5>
                      <p className="text-muted">Status</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 align-items-start">
                    {state.user.gender === "Male" ? (
                      <FaMale className="text-danger me-3 fs-1" />
                    ) : (
                      <FaFemale className="text-danger me-3 fs-1" />
                    )}
                    <div>
                      <h5>{state.user.gender}</h5>
                      <p className="text-muted">Gender</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 align-items-start">
                    <FaPhone className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{state.user.phone}</h5>
                      <p className="text-muted">Phone Number</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaMapMarked className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{state.user.addres}</h5>
                      <p className="text-muted">Address</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
              <img src={previewImage} alt={previewImage} style={{ width: "20vw", height : "60vh" }} className="my-2" />

                <input
                  type="file"
                  ref={hiddenFileInput}
                  accept="image/*"
                  className="d-none"
                  onChange={handleChange}
                />

                <Button
                  style={{ width: "15vw" }}
                  variant="danger"
                  className="changePhotoBtn mt-2 btn-lg me-5"
                  onClick={handleFileInput}
                >
                  Change Photo
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetail ;
