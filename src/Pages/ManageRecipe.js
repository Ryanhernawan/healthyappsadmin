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

function ManageRecipe({ route }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModal1Open, setIsModal1Open] = useState(false);

  const [recipesThisWeek, setRecipesThisWeek] = useState([]);
  const [recipesBOD, setRecipesBOD] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dataRecipes, setDataRecipes] = useState("");
  const [dinner, setDinner] = useState([]);

  // FETCHING DATA
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesThisWeek");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setRecipesThisWeek(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.recipesThisWeek);
    });
  }, [app]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesBOD");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setRecipesBOD(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.recipesBOD);
    });
  }, [app]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesCategory/breakfast");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setBreakfast(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.breakfast);
    });
  }, [app]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesCategory/lunch");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setLunch(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.lunch);
    });
  }, [app]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesCategory/dinner");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      setDinner([]);
      let data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((setDataDinner) => {
          setDinner((oldArray) => [...oldArray, setDataDinner]);
        });
      }
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.dinner);
    });
  }, [app]);

  // FETCHING DATA

  //  ADD DATA
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [uuid, setUuid] = useState();

  const addData = () => {
    const db = getDatabase(app);
    const uuid = uid();

    if(!title.trim() || !videoURL.trim() || !imageURL.trim || !category.trim() || !time.trim()){
      alert("Field Empty")
    }else{

      if (category == "Recipes This Week") {
        set(ref(db, "data/recipes/recipesThisWeek/" + uuid), {
          title,
          time,
          videoURL,
          image,
          category,
          uuid,
        });      }
        
        if (category == "Recipes Best Of The Day") {
          set(ref(db, "data/recipes/recipesBOD/" + uuid), {
            title,
            time,
            videoURL,
            image,
            category,
            uuid,
          });
        }
        if (category == "breakfast") {
          set(ref(db, "data/recipes/recipesCategory/breakfast/" + uuid), {
            title,
            time,
            videoURL,
            image,
            category,
            uuid,
          });
        }
        
        if (category == "lunch") {
          set(ref(db, "data/recipes/recipesCategory/lunch/" + uuid), {
            title,
            time,
            videoURL,
            image,
            category,
            uuid,
          });
        }
        
        if (category == "dinner") {
          set(ref(db, "data/recipes/recipesCategory/dinner/" + uuid), {
            title,
            time,
            videoURL,
            image,
            category,
            uuid,
          });
        }
        
      }
        setDataRecipes("");
      };
      // ADD DATA
      
      // DELETE DATA
      const handleDeleteThisWeek = (item) => {
        const db = getDatabase(app);
        
        remove(ref(db, `data/recipes/recipesThisWeek/${item.uuid}`));
    alert("Deleted Succeed");
  };

  const handleDeleteBOD = (item) => {
    const db = getDatabase(app);

    remove(ref(db, `data/recipes/recipesBOD/${item.uuid}`));
    alert("Deleted Succeed");
  };

  const handleDeleteBreakfast = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/recipes/recipesCategory/breakfast/${item.uuid}`));
    alert("Deleted Succeed");
  };

  const handleDeleteLunch = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/recipes/recipesCategory/lunch/${item.uuid}`));
    alert("Deleted Succeed");
  };

  const handleDeleteDinner = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/recipes/recipesCategory/dinner/${item.uuid}`));
    alert("Deleted Succeed");
  };

  // UPDATE DATA
  const [newTitle, setNewTitle] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newImageURL, setNewImageURl] = useState("");
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModalWithData = (item) => {
    setUuid(item);
    setIsModal2Open(true);
  };

  const handleUpdateThisWeek = (item) => {
    const db = getDatabase(app);
    // UPDATE THIS WEEK
    if (newCategory == "Recipes This Week") {
      const dbRef = ref(db, `data/recipes/recipesThisWeek/${uuid}`);
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        if (newTitle == " " || newTime == " " || newVideoURL == " " || newImageURL == " ") {
          update(dbRef, {
            title: data.title,
            time: data.time,
            image: data.image,
            videoURL: data.VideoURL,
          }).then(() => {
            alert("Update Succed");
          });
        } else {
          update(dbRef, {
            title: newTitle,
            time: newTime,
            videoURL: newVideoURL,
            image: newImageURL,
          }).then(() => {
            alert("Update Succed");
          });
        }
      });
    }

    // UPDATE BOD
    if (newCategory == "Recipes Best Of The Day") {
      const dbRef = ref(db, `data/recipes/recipesBOD/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }

      if (newTime != " ") {
        update(dbRef, { time: newTime }).then(() => {
          alert("Update Succed");
        });
      }
      if (newVideoURL != " ") {
        update(dbRef, { videoURL: newVideoURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newImageURL != " ") {
        update(dbRef, { image: newImageURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newCategory != " ") {
        update(dbRef, { category: newCategory }).then(() => {
          alert("Update Succed");
        });
      }
    }
    // UPDATE BREAKFAST
    if (newCategory == "breakfast") {
      const dbRef = ref(db, `data/recipes/recipesCategory/breakfast/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }

      if (newTime != " ") {
        update(dbRef, { time: newTime }).then(() => {
          alert("Update Succed");
        });
      }
      if (newVideoURL != " ") {
        update(dbRef, { videoURL: newVideoURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newImageURL != " ") {
        update(dbRef, { image: newImageURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newCategory != " ") {
        update(dbRef, { category: newCategory }).then(() => {
          alert("Update Succed");
        });
      }
    }

    // UPDATE LUNCH
    if (newCategory == "lunch") {
      const dbRef = ref(db, `data/recipes/recipesCategory/lunch/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }

      if (newTime != " ") {
        update(dbRef, { time: newTime }).then(() => {
          alert("Update Succed");
        });
      }
      if (newVideoURL != " ") {
        update(dbRef, { videoURL: newVideoURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newImageURL != " ") {
        update(dbRef, { image: newImageURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newCategory != " ") {
        update(dbRef, { category: newCategory }).then(() => {
          alert("Update Succed");
        });
      }
    }
    // UPDATE LUNCH
    if (newCategory == "dinner") {
      const dbRef = ref(db, `data/recipes/recipesCategory/dinner/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }

      if (newTime != " ") {
        update(dbRef, { time: newTime }).then(() => {
          alert("Update Succed");
        });
      }
      if (newVideoURL != " ") {
        update(dbRef, { videoURL: newVideoURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newImageURL != " ") {
        update(dbRef, { image: newImageURL }).then(() => {
          alert("Update Succed");
        });
      }
      if (newCategory != " ") {
        update(dbRef, { category: newCategory }).then(() => {
          alert("Update Succed");
        });
      }
    }
    setIsModal2Open(false);
  };

  return (
    <div className="px-8">
      <Navigationbar />
      <div
        class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
        style={{ color: "black" }}
      >
        <h3>
          <b>Recipes This Week</b>
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
            <Button variant="primary" onClick={() => setIsModal1Open(true)}>
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
                  <th>RecipesName </th>
                  <th>Time </th>
                  <th>Video URL </th>
                </tr>
              </thead>

              {recipesThisWeek.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td>{item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.videoURL} </td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
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

        <div
          class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
          style={{ color: "black", height: 10, width: "100%" }}
        >
          <h3>
            <b>Recipes Best of The Day</b>
          </h3>
        </div>

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
                  <>
                    <th>id</th>
                    <th>RecipesName </th>
                    <th>Time </th>
                    <th>Video URL </th>
                  </>
                </tr>
              </thead>

              {recipesBOD.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td>{item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.videoURL} </td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteBOD(item)}
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

        <div
          class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
          style={{ color: "black", height: 10, width: "100%" }}
        >
          <h3>
            <b>Category Breakfast</b>
          </h3>
        </div>

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
                  <th>RecipesName </th>
                  <th>Time </th>
                  <th>Video URL </th>
                </tr>
              </thead>

              {breakfast.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td>{item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.videoURL} </td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteBreakfast(item)}
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

        <div
          class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
          style={{ color: "black", height: 10, width: "100%" }}
        >
          <h3>
            <b>Category Lunch</b>
          </h3>
        </div>

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
                  <th>RecipesName </th>
                  <th>Time </th>
                  <th>Link URL </th>
                </tr>
              </thead>

              {lunch.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td> {item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.image} </td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteLunch(item)}
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

        <div
          class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
          style={{ color: "black", height: 10, width: "100%" }}
        >
          <h3>
            <b>Category Dinner</b>
          </h3>
        </div>

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
                  <th>RecipesName </th>
                  <th>Time </th>
                  <th>Link URL </th>
                </tr>
              </thead>

              {dinner.map((item) => (
                // <div >
                <tbody>
                  <tr>
                    <>
                      <td> {item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.videoURL} </td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
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
        <div className="model_box">
          <Modal
            // show={show}
            show={isModal1Open}
            onHide={() => setIsModal1Open(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Recipes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputWorkout"
                    aria-describedby="RecipesName"
                    placeholder="Recipes Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="date"
                    class="form-control"
                    id="inputDate"
                    aria-describedby="Date"
                    placeholder="Date"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="time"
                    class="form-control"
                    id="inputTime"
                    aria-describedby="Time"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="url"
                    class="form-control"
                    id="inputLinkUrl"
                    aria-describedby="LinkURL"
                    placeholder="Video URL"
                    value={videoURL}
                    onChange={(e) => setVideoURL(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="url"
                    class="form-control"
                    id="inputLinkUrl"
                    aria-describedby="LinkURL"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <label htmlFor="dropdown">Choose Category: </label>
                  <select
                    id="dropdown"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ marginLeft: 10 }}
                  >
                    <option value="">Choose...</option>
                    <option value="Recipes This Week">Recipes This Week</option>
                    <option value="Recipes Best Of The Day">
                      Recipes Best Of The Day
                    </option>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                  </select>

                  {/* <input
                    type="text"
                    class="form-control"
                    id="inputCategory"
                    aria-describedby="Category"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  /> */}
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
              <Button
                variant="secondary"
                onClick={() => setIsModal1Open(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* MODAL UPDATE */}
        <div className="model_box">
          <Modal
            // show={show}
            show={isModal2Open}
            onHide={() => setIsModal2Open(false)}
            backdrop="static"
            keyboard={false}
          
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <label style={{ marginBottom: 10, marginLeft: 3 }}>
                    ID Item: {uuid}
                  </label>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputWorkout"
                    aria-describedby="RecipesName"
                    placeholder="Recipes Name"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>

                <div class="form-group mt-3">
                  <input
                    type="time"
                    class="form-control"
                    id="inputTime"
                    aria-describedby="Time"
                    placeholder="Time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="url"
                    class="form-control"
                    id="inputLinkUrl"
                    aria-describedby="LinkURL"
                    placeholder="Video URL"
                    value={newVideoURL}
                    onChange={(e) => setNewVideoURL(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="url"
                    class="form-control"
                    id="inputLinkUrl"
                    aria-describedby="LinkURL"
                    placeholder="Image URL"
                    value={newImageURL}
                    onChange={(e) => setNewImageURl(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <label htmlFor="dropdown">Choose Category: </label>
                  <select
                    id="dropdown"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    style={{ marginLeft: 10 }}
                  >
                    <option value="">Choose...</option>
                    <option value="Recipes This Week">Recipes This Week</option>
                    <option value="Recipes Best Of The Day">
                      Recipes Best Of The Day
                    </option>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                  </select>
                </div>
                <button
                  // type="submit"
                  class="btn btn-success mt-4"
                  onClick={handleUpdateThisWeek}
                >
                  Update Data
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setIsModal2Open(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ManageRecipe;
