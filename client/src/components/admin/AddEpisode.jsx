import React, { useRef, useState } from "react";
import {
  Form,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Button,
} from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";

const styles = {
  col: {
    width: "465px",
  },
  color: {
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    resize: "none",
    borderColor: "white",
    boxShadow: "none",
  },
};

const AddEpisode = ({ show, handleClose }) => {
  const fileInput = useRef(null);
  const handleFileInput = (e) => fileInput.current.click();
  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ width: "1000px", justifyContent: "center", marginTop: "100px" }}
    >
      <div style={{ width: "700px" }}>
        <Modal.Header className="bg-dark text-white border-0">
          <Modal.Title className="fw-bold ">Add Episode</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white border-0">
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="titleEpisode"
                  style={styles.col}
                >
                  <Form.Control
                    style={styles.color}
                    type="text"
                    placeholder="Title Episode"
                    className="mb-3 text-white "
                    name="titleEpisode"
                  />
                </Form.Group>
              </Col>
              <Col>
                {/* Attach */}
                <Form.Group className="mb-3 ms-1" controlId="attach">
                  <input type="file" className="d-none" ref={fileInput} />
                  <Button
                    style={styles.color}
                    onClick={handleFileInput}
                    className="text-secondary"
                  >
                    Attach Thumbnail <BsPaperclip className="text-danger" />
                  </Button>
                </Form.Group>
              </Col>
            </Row>
            {/* Link Film */}
            <Form.Group className="mb-3" controlId="link">
              <Form.Control
                style={styles.color}
                type="text"
                placeholder="Link Film"
                className="mb-3 text-white "
                name="link"
              />
            </Form.Group>
            <Form.Group style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                className="text-light text-center col-4 fw-bold"
                style={{ backgroundColor: "red", border: "none" }}
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddEpisode;
