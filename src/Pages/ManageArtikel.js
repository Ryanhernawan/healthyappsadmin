import React from "react";
import app from "./Config";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  update,
} from "firebase/database";
import Navigationbar from "../Component/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button, Modal, Input, Alert } from "react-bootstrap";
import { uid } from "uid";

export default function ManageArtikel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseUpdate = () => setShow(false);
  const handleShowUpdate = () => setShow(true);
  const [recipesThisWeek, setRecipesThisWeek] = useState([]);
  const [recipesBOD, setRecipesBOD] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dataRecipes, setDataRecipes] = useState("");
  const [dinner, setDinner] = useState([]);



  // const [isModalOpen1, setModalOpen1] = useState(false);
  // const [isModalOpen2, setModalOpen2] = useState(false);
  // const openModal1 = () => {
  //   setModalOpen1(true);
  // };
  
  // const closeModal1 = () => {
  //   setModalOpen1(false);
  // };
  
  // const openModal2 = () => {
  //   setModalOpen2(true);
  // };
  
  // const closeModal2 = () => {
  //   setModalOpen2(false);
  // };
  
  // FETCHING DATA
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/article");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setRecipesThisWeek(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.recipesThisWeek);
    });
  }, [app]);

  // FETCHING DATA

  //  ADD DATA
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [imageURL, setImageURL] = useState("");  
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  const addData = () => {
    const db = getDatabase(app);
    const uuid = uid();
    if(!title.trim() || !linkURL.trim() || !imageURL.trim()) 
    {
      alert("Field Empty")
      return false;
    }else{
      try{

        set(ref(db, "data/article/" + uuid), {
          title,
          linkURL,
          imageURL,
          
          uuid,
        });
      }catch(error){
      alert("Add data failed ")

      }
      
    }
    setDataRecipes("");
  };
  // ADD DATA

  // DELETE DATA
  const handleDeleteThisWeek = (item) => {
    const db = getDatabase(app);

    remove(ref(db, `data/article/${item.uuid}`));
    alert("Deleted Succeed");
  };

  // UPDATE DATA
  const handleUpdate = (item) => {
    const db = getDatabase(app);
    const dbref = rf(db, `data/article/${item.uuid}`);
    update(dbref, { title: title });
  };

  return (
    <div className="px-8">
      <Navigationbar />
      <div
        class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
        style={{ color: "black" }}
      >
        <h3>
          <b>Article</b>
        </h3>
      </div>
      <div className="crud shadow-lg p-4 mb-5 mt-3 bg-body rounded">
        <div class="row ">
          <div class="col-sm-8 mt-2 mb-2 text-gred">
            <div className="search">
              <form class="form-inline">
                {/* <input
                  class="form-control mr-sm-4"
                  type="search"
                  placeholder="Search Student"
                  aria-label="Search"
                /> */}
              </form>
            </div>
          </div>
          <div class="col-sm-2 offset-sm-10  mt-3 mb-3 text-gred" style={{}}>
            <Button variant="primary" onClick={handleShow}>
              Add New
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Title </th>
                  <th>Link URL </th>
                </tr>
              </thead>

              {recipesThisWeek.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td>{item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.linkURL} </td>
                      {/* <button
                        onClick={handleShow}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button> */}
                      <button
                        onClick={() => handleDeleteThisWeek(item)}
                        style={{ height: 100, color: "red", width: 100 }}
                      >
                        Delete
                      </button>
                    </>
                  </tr>
                </tbody>
                // </div>
              ))}
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        {handleShow && (
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Article</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="inputWorkout"
                      aria-describedby="RecipesName"
                      placeholder="Article Name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div class="form-group mt-3">
                    <input
                      type="url"
                      class="form-control"
                      id="inputLinkUrl"
                      aria-describedby="LinkURL"
                      placeholder="Link URL"
                      value={linkURL}
                      onChange={(e) => setLinkURL(e.target.value)}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="url"
                      class="form-control"
                      id="inputLinkUrl"
                      aria-describedby="LinkURL"
                      placeholder="Image URL"
                      value={imageURL}
                      onChange={(e) => setImageURL(e.target.value)}
                    />
                  </div>

                  <button
                    // type="submit"
                    class="btn btn-success mt-4"
                    onClick={addData}
                  >
                    Add Data
                  </button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}

        {/* <!--- Model Box ---> */}
     
      </div>
    </div>
  );
}
