import React, { useRef, useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const styles = {
  cardd: {
    backgroundColor: "black",
    margin: "20px",
  },
  col: {
    width: "915px",
  },
  color: {
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    resize: "none",
    borderColor: "white",
    boxShadow: "none",
  },
  select: {
    backgroundColor: "rgba(210, 210, 210, 0.25)",
  },
};

const AddFilm = () => {
  const fileInput = useRef(null);
  const handleFileInput = (e) => fileInput.current.click();

  const [formValues, setFormValues] = useState([{ title: "", link: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { title: "", link: "" }]);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <Card style={styles.cardd}>
      <Card.Body className="text-light m-3">
        <Card.Title className="mb-4">Add Film</Card.Title>
        <Form>
          {/* Title */}
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="title" style={styles.col}>
                <Form.Control
                  style={styles.color}
                  type="text"
                  placeholder="Title"
                  className="mb-3 text-white "
                  name="title"
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col>
              {/* Attach*/}
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
          {/* year*/}
          <Form.Group className="mb-3" controlId="year">
            <Form.Control
              style={styles.color}
              type="text"
              placeholder="Year"
              className="mb-3 text-white"
              name="year"
            />
          </Form.Group>

          {/* category */}
          <Form.Group className="mb-3" controlId="category">
            <Form.Select
              style={styles.color}
              aria-label="Default select example"
              className="text-secondary"
            >
              <option hidden selected>
                Category
              </option>
              <option variant="danger" value="TV Series">
                TV Series
              </option>
              <option value="Movies">Movies</option>
            </Form.Select>
          </Form.Group>

          {/* description */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              style={styles.color}
              as="textarea"
              className="mb-3 text-white "
              placeholder="Description"
              name="description"
            />
          </Form.Group>

          <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
              <div key={index}>
                <Row>
                  <Col
                    value={element.title || ""}
                    onChange={(e) => handleChange(index, e)}
                  >
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
                    placeholder="Link FIlm"
                    className="mb-3 text-white "
                    name="link"
                    value={element.link || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </Form.Group>
              </div>
            ))}
          </form>

          {/* Address */}
          <Form.Group className="mb-3" controlId="add">
            <input type="file" className="d-none" ref={fileInput} />
            <Button
              style={styles.color}
              onClick={() => addFormFields()}
              className="text-secondary text-center col-12"
            >
              <AiOutlinePlus className="text-danger" />
            </Button>
          </Form.Group>

          <Form.Group style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="danger"
              className="text-light text-center col-1"
              onClick={handleFileInput}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddFilm;
