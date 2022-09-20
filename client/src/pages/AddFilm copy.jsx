// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperclip, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Button, Alert, Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { styles } from "./Styles";
// import { useState } from "react";
// import { useMutation } from "react-query";
// import { API } from "../../config/api";
// import { RiAttachmentFill } from "react-icons/ri";

// const AddFilm = () => {
//   const getCategories = async () => {
//     try {
//       const response = await API.get("/categories");
//       setCategories(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const navigate = useNavigate();

//   const [rates, setRates] = useState([
//     { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
//   ]);

//   const addRate = () => {
//     setRates([
//       ...rates,
//       { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
//     ]);
//   };

//   const [message, setMessage] = useState(null);

//   const [categories, setCategories] = useState([]); //Store all category data
//   const [categoryId, setCategoryId] = useState([]); //Save the selected category id
//   const [preview, setPreview] = useState(null); //For image preview

//   const [form, setForm] = useState({
//     title: "",
//     thumbnailfilm: "",
//     year: "",
//     description: "",
//     category_id: 0,
//   });

//   const handleChange = (e) => {
//     console.log("punya si ", e.target.name);
//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.type === "file" ? e.target.files : e.target.value,
//     });

//     // Create image url for preview
//     if (e.target.type === "file") {
//       let url = URL.createObjectURL(e.target.files[0]);
//       setPreview(url);
//     }
//   };

//   const handleSubmit = useMutation(async (e) => {
//     try {
//       e.preventDefault();

//       // Configuration Content-type
//       const config = {
//         headers: {
//           "Content-type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.token}`,
//         },
//       };

//       const formData = new FormData();
//       formData.set("title", form?.title);
//       formData.set("description", form?.description);
//       formData.set("year", form?.year);
//       formData.set("category_id", form?.category_id);
//       formData.set(
//         "thumbnailfilm",
//         form.thumbnailfilm[0],
//         form.thumbnailfilm[0].name
//       );

//       console.log(form);

//       const response = await API.post("/film", formData, config);
//       console.log(response);

//       navigate("/list-film");

//       // Handling response here
//     } catch (error) {
//       const alert = (
//         <Alert variant="danger" className="py-1">
//           Failed
//         </Alert>
//       );
//       setMessage(alert);
//       console.log(error);
//     }
//   });

//   useEffect(() => {
//     console.log(form);
//     getCategories();
//   }, [form.thumbnailfilm]);

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           handleSubmit.mutate(e);
//         }}
//       >
//         <div style={styles.container} className="mt-4 mb-4">
//           <h4>Add Film</h4>
//           <div className="form-group mb-2">
//             <div
//               style={{
//                 display: "flex",
//                 gap: "10px",
//               }}
//             >
//               <Form.Group
//                 style={{ width: "30rem" }}
//                 controlId="formBasicAttache"
//               >
//                 <Form.Control
//                   type="text"
//                   name="title"
//                   // data-id=""
//                   // id="titlefilm"
//                   className="formBasicAttache"
//                   placeholder="Title"
//                   style={styles.customInputTitle}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group
//                 style={{ marginLeft: "18rem", width: "12rem" }}
//                 controlId="formBasicAttache"
//               >
//                 <label for="attachThumbnail" className="labelThumbnail rounded">
//                   Attach{" "}
//                   <span>
//                     <RiAttachmentFill style={{ fontSize: "30px" }} />
//                   </span>
//                 </label>
//                 <input
//                   id="attachThumbnail"
//                   type="file"
//                   onChange={handleChange}
//                   name="thumbnailfilm"
//                 />
//               </Form.Group>
//             </div>
//           </div>
//           <div className="form-group mb-4">
//             <div>
//               <div className="form-group mb-2">
//                 <input
//                   type="text"
//                   name="year"
//                   data-id=""
//                   id="year"
//                   className="linkFilm"
//                   placeholder="Year"
//                   style={styles.customInput}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mb-2">
//                 <select
//                   name="category_id"
//                   id="list"
//                   onChange={handleChange}
//                   style={styles.customInput}
//                 >
//                   <option disabled selected>
//                     Category
//                   </option>
//                   <option value="1">TV Series</option>
//                   <option value="2">Movie</option>
//                 </select>
//               </div>
//               <div className="form-group mb-0">
//                 <textarea
//                   style={styles.textarea}
//                   placeholder="Description"
//                   id="desc"
//                   name="description"
//                   rows="4"
//                   cols="50"
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>

//         {rates.map((row, index) => {
//           const titleEpisodeId = `title-${index}`,
//             attachThumbnailId = `attach-${index}`,
//             linkFilmId = `link-${index}`;

//           return (
//             <div key={index} style={styles.container} className="mt-3">
//               <div className="form-group mb-2">
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(2, 1fr)",
//                     gridGap: "1rem",
//                   }}
//                 >
//                   <input
//                     type="text"
//                     name={titleEpisodeId}
//                     data-id={index}
//                     id={titleEpisodeId}
//                     className="titleEpisode"
//                     placeholder="Title Episode"
//                     style={styles.customInputTitle}
//                   />
//                   <input
//                     type="file"
//                     name={attachThumbnailId}
//                     data-id={index}
//                     id={attachThumbnailId}
//                     className="attachThumbnail"
//                     style={styles.customInputFile}
//                   />
//                   <button
//                     className="btn-grey"
//                     onClick={() => {
//                       document.getElementsByName(attachThumbnailId)[0].click();
//                     }}
//                     style={{
//                       width: "40%",
//                       height: "50px",
//                       fontSize: "15px",
//                       textAlign: "left",
//                       float: "right",
//                       justifySelf: "right",
//                     }}
//                   >
//                     Attach Thumbnail{" "}
//                     <div
//                       style={{
//                         float: "right",
//                         display: "inline",
//                         fontSize: "20px",
//                       }}
//                     >
//                       <FontAwesomeIcon icon={faPaperclip} />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//               <div className="form-group mb-2">
//                 <input
//                   type="text"
//                   name={linkFilmId}
//                   data-id={index}
//                   id={linkFilmId}
//                   className="linkFilm"
//                   placeholder="Link Film"
//                   style={styles.customInput}
//                 />
//               </div>
//             </div>
//           );
//         })}
//         <div className="form-group mb-2" style={styles.container}>
//           <button
//             className="btn-grey"
//             style={{
//               width: "100%",
//               height: "50px",
//               color: "#e50914",
//               backgroundColor: "rgba(210, 210, 210, 0.25)",
//               border: "2px solid #d2d2d2",
//             }}
//             onClick={addRate}
//           >
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//         </div>
//         <div className="d-flex form-group mb-4 justify-content-end px-5">
//           <Button
//             className="btn bg-danger text-white border-0 btn-regis px-5"
//             type="submit"
//           >
//             Save
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddFilm;

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

const AddFilm1 = () => {
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
  });

  const getCategories = async () => {
    try {
      const response = await API.get("/categorys");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChangeCategoryId = (e) => {
  //   const id = e.target.value;
  //   const checked = e.target.checked;

  //   if (checked) {
  //     // Save category id if checked
  //     setCategoryId([...categoryId, parseInt(id)]);
  //   } else {
  //     // Delete category id from variable if unchecked
  //     let newCategoryId = categoryId.filter((categoryIdItem) => {
  //       return categoryIdItem != id;
  //     });
  //     setCategoryId(newCategoryId);
  //   }
  // };
  //   console.log(setCategoryId);
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
          "thumbnailFilm",
          form.image[0],
          form.image[0].name
        );
        formData.set("year", form.year);
        formData.set("desc", form.desc);
        formData.set("category_id", form.categoryId);
  
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
            <div style={{ width: "950px", marginLeft: "35px" }}>
              <div className="form-floating">
                <Form.Group className="mt-3">
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
                <Form.Group className=" mt-2 ms-2 d-flex ">
                  {preview && (
                    <div>
                      <img
                        src={preview}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          objectFit: "cover",
                        }}
                        alt={preview}
                      />
                    </div>
                  )}
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
                className="form-select bg-dark text-white"
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
                className="form-control bg-dark text-white"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
                name="desc"
                onChange={handleChange}
              ></textarea>
            </div>
            <form onSubmit={handleSubmit1}>
            {formValues.map((element, index) => (
              <div key={index}>
                <Row>
                  <Col
                    value={element.title || ""}
                    onChange={(e) => handleChange1(index, e)}
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
                    onChange={(e) => handleChange1(index, e)}
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
            <div className="col-10 d-flex justify-content-end">
              <button
                class="btn btn-danger float-md-end btn-lg  d-grid gap-2 col-2 "
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

export default AddFilm1;
