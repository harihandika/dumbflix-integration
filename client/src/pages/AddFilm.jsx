import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useMutation } from 'react-query';
import { API } from '../config/api';
import { useNavigate } from 'react-router';

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
  const title = "Add Film";
  document.title = "Dumbflix | " + title;
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    title: "",
    thumbnailFilm: "",
    year: "",
    desc: "",
    categoryId: "",
    link:"",
  });

  const getCategories = async () => {
    try {
      const response = await API.get("/categorys");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]:
          e.target.type === "file" ? e.target.files : e.target.value,
      });
      console.log("handle change", e.target.name);
      // Create image url for preview
      if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
    };
  
    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
  
        // Configuration
        const config = {
          headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.token}`,
          },
        };
  
        // Store data with FormData as object
        const formData = new FormData();
        formData.set("title", form.title);
        formData.set(
          "image",
          form.thumbnailFilm[0],
          form.thumbnailFilm[0].name
        );
        formData.set("year", form.year);
        formData.set("desc", form.desc);
        formData.set("category_id", form.categoryId);
        formData.set("link", form.link);
        console.log("form",form);
  
        // Insert film data
        const response = await API.post("/film", formData, config);
        console.log(response);
  
        navigate("/homeadmin");
      } catch (error) {
        console.log(error);
      }
    });
  
    useEffect(() => {
      getCategories();
    }, []);

  const fileInput = useRef(null);
  const handleFileInput = (e) => fileInput.current.click();

  const [formValues, setFormValues] = useState([{ title: "", link: "" }]);

  let handleChange1 = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { title: "", link: "" }]);
  };

  let handleSubmit1 = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };


  return (
    <>
      <div style={{ backgroundColor: "black", marginTop: "11vh" }}>
        <div>
          <h2 className="text-light col-2 d-flex justify-content-end">
            Add Film
          </h2>
        </div>
        <form
          onSubmit={(e) => handleSubmit.mutate(e)}
          className="d-flex justify-content-center"
        >
          <div className="row g-2 d-flex justify-content-center">
            <div style={{ width: "68vw", marginLeft: "30px" }}>
              <div className="form-floating">
                <Form.Group className="mt-3 me-3">
                  <Form.Control
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    placeholder="Title"
                    className="bg-dark text-white"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-2">
              <div className="form-floating">
                <Form.Group className=" mt-3 ms-2 d-flex"
                style={{height:"8vh"}}>
                  {/* {preview && (
                    <div>
                      <img
                        src={preview}
                        style={{
                          maxWidth: "40px",
                          maxHeight: "10px",
                          objectFit: "cover",
                        }}
                        alt={preview}
                      />
                    </div>
                  )} */}
                  <Form.Label
                    for="fileattach"
                    className="d-block p-2 bg-dark text-white rounded border"
                    type="file"
                    style={{ cursor: "pointer" }}
                  >
                    Attach Thumbail
                    <BsPaperclip className="text-danger mx-2" />
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="fileattach"
                    name="thumbnailFilm"
                    onChange={handleChange}
                    hidden
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-10 d-flex justify-content-center">
              <Form.Control
                type="number"
                placeholder="Year"
                name="year"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="col-10 d-flex justify-content-center">
              <select
                className="form-select bg-dark text-white mt-3"
                aria-label="Default select example"
                onChange={handleChange}
                name="categoryId"
              >
                <option value="">Category</option>
                {categories.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="col-10 d-flex justify-content-center input-group-lg">
              <textarea
                className="form-control bg-dark text-white mt-3"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
                name="desc"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-10 d-flex justify-content-center mt-4">
              <Form.Control
                type="text"
                placeholder="LinkFilm"
                name="link"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </div>
            <div className="col-10 d-flex justify-content-end">
              <button
                class="btn btn-danger float-md-end btn-lg  d-grid gap-2 col-2 mt-3"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFilm;
