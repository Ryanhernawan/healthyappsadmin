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

export default function ManageWorkout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allWorkout, setAllWorkout] = useState([]);
  const [recipesBOD, setRecipesBOD] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dataRecipes, setDataRecipes] = useState("");
  const [dinner, setDinner] = useState([]);
  const [categoryWO, setCategoryWO] = useState("");
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModalWithData = (item) => {
    setUuid(item);
    setIsModal2Open(true);
  };

  // FETCHING DATA

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/Workout/AllWorkout");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setAllWorkout(dWorkout);
      console.log("Console Log Set Data", data);
      console.log("data.recipesThisWeek", data.recipesThisWeek);
    });
  }, [app]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/Workout/recomendationWorkout");
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
    const dbRef = ref(db, "data/Workout/trandingWorkout");
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
    if (categoryWO == "ABS") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/ABS");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "ARMS") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/ARMS");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "Advance") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/Advance");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "BACK") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/BACK");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "BUTT") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/BUTT");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "Beginner") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/Beginner");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "CHEST") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/CHEST");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "Intermediate") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/Intermediate");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    } else if (categoryWO == "LEGS") {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/Workout/categoryWorkout/LEGS");
      setCategory("");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dWorkout = Object.values(data);
        setLunch(dWorkout);
        console.log("Console Log Set Data", data);
        console.log("data.recipesThisWeek", data.lunch);
      });
    }
  }, [categoryWO]);

  // END FETCHING DATA

  //  ADD DATA
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [imageURL, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [level, setLevel] = useState("");
  const [uuid, setUuid] = useState();

  const addData = () => {
    const db = getDatabase(app);
    const uuid = uid();
    if(!title.trim() || !videoURL.trim() || !imageURL.trim || !category.trim() || !time.trim() || !level.trim()){
      alert("Field Empty")
    }else{
      if (category == "All Workout") {
        set(ref(db, "data/Workout/AllWorkout/" + uuid), {
          title,
          time,
          videoURL,
          imageURL,
          category,
          level,
          uuid,
        });
      }
      if(level == "Beginner"){
        set(ref(db, "data/Workout/categoryWorkout/Beginner/" + uuid), {
          title,
          time,
          videoURL,
          imageURL,
          category,
          level,
          uuid,
        });
      }
      if(level == "Intermediate"){
        set(ref(db, "data/Workout/categoryWorkout/Intermediate/" + uuid), {
          title,
          time,
          videoURL,
          imageURL,
          category,
          level,
          uuid,
        });
      }
      if(level == "Advance"){
        set(ref(db, "data/Workout/categoryWorkout/Advance/" + uuid), {
          title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    if (category == "Recommendation") {
      set(ref(db, "data/Workout/recomendationWorkout/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    if (category == "Trending Workout") {
      set(ref(db, "data/Workout/trandingWorkout/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
    if (category == "ABS") {
      set(ref(db, "data/Workout/categoryWorkout/ABS/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    if (category == "ARMS") {
      set(ref(db, "data/Workout/categoryWorkout/ARMS/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
    if (category == "BACK") {
      set(ref(db, "data/Workout/categoryWorkout/BACK/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
    if (category == "BUTT") {
      set(ref(db, "data/Workout/categoryWorkout/BUTT/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
    if (category == "CHEST") {
      set(ref(db, "data/Workout/categoryWorkout/CHEST/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
    if (category == "LEGS") {
      set(ref(db, "data/Workout/categoryWorkout/LEGS/" + uuid), {
        title,
        time,
        videoURL,
        imageURL,
        category,
        level,
        uuid,
      });
    }
    
  }
    setDataRecipes("");
  };
  // ADD DATA
  
  // DELETE DATA
  const handleDeleteAll = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/Workout/AllWorkout/${item.uuid}`));
  };
  
  const handleDeleteRecommendation = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/Workout/recomendationWorkout/${item.uuid}`));
  };

  const handleDeleteTranding = (item) => {
    const db = getDatabase(app);
    remove(ref(db, `data/Workout/trandingWorkout/${item.uuid}`));
  };

  const handleDeleteCategory = (item) => {
    const db = getDatabase(app);
    if (categoryWO == "ABS") {
      remove(ref(db, `data/Workout/categoryWorkout/ABS/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "ARMS") {
      remove(ref(db, `data/Workout/categoryWorkout/ARMS/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "BACK") {
      remove(ref(db, `data/Workout/categoryWorkout/BACK/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "BUTT") {
      remove(ref(db, `data/Workout/categoryWorkout/BUTT/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "LEGS") {
      remove(ref(db, `data/Workout/categoryWorkout/LEGS/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "Advance") {
      remove(ref(db, `data/Workout/categoryWorkout/Advance/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "Beginner") {
      remove(ref(db, `data/Workout/categoryWorkout/Beginner/${item.uuid}`));
      alert("Deleted Succeed");
    }
    if (categoryWO == "Intermediate") {
      remove(ref(db, `data/Workout/categoryWorkout/Intermediate/${item.uuid}`));
      alert("Deleted Succeed");
    }
  };

  // UPDATE DATA
  const [newTitle, setNewTitle] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newImageURL, setNewImageURl] = useState("");
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newLevel, setNewLevel] = useState("")

  const handleUpdate = (item) => {
    const db = getDatabase(app);
    // UPDATE ALL WORKOUT
    if (newCategory == "All Workout") {
      const dbRef = ref(db, `data/Workout/AllWorkout/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }

    // END UPDATE ALL WORKOUT

    // UPDATE RECOMMENDTION
    if(newCategory == "Recommendation"){
      const dbRef = ref(db, `data/Workout/recomendationWorkout/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }
    // END UPDATE RECOMMENDTION

    // UPDATE TRENDING WORKOUT
    if(newCategory == "Trending Workout"){
      const dbRef = ref(db, `data/Workout/trandingWorkout/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }
    // END TRENDING WORKOUT

    // UPDATE ADVANCE WORKOUT
     if(newLevel == "Advance"){
      const dbRef = ref(db, `data/Workout/categoryWorkout/Advance/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }
    // END ADVANCE WORKOUT

    // UPDATE BEGINNER WORKOUT
    if(newLevel == "Beginner"){
      const dbRef = ref(db, `data/Workout/categoryWorkout/Beginner/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }
    // END BEGINNER WORKOUT

    // UPDATE INTERMEDIATE WORKOUT
    if(newLevel == "Beginner"){
      const dbRef = ref(db, `data/Workout/categoryWorkout/Intermediate/${uuid}`);
      if (newTitle != " ") {
        update(dbRef, { title: newTitle }).then(() => {
          alert("Update Succed");
        });
      }
      if(newTime != " "){
        update(dbRef, {time: newTime}).then(() => {
          alert("Update Succed")
        })
      }
      if(newImageURL != " "){
        update(dbRef, {imageURL: newImageURL}).then(() => {
          alert("Update Succed")
        })
      }
      if(newVideoURL != " "){
        update(dbRef, {videoURL: newVideoURL}).then(() =>{
          alert("Update Succed")
        })
      }
      if(newCategory != " "){
        update(dbRef, {category:newCategory}).then(() =>{
          alert("Update Succed")
        })
      } 
    }
    // END INTERMEDIATE WORKOUT
  };

  return (
    <div className="px-8">
      <Navigationbar />
      <div
        class="col-sm-3 offset-sm-2 m-5 mb-2 text-gred"
        style={{ color: "black" }}
      >
        <h3>
          <b>All Workout</b>
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
                  <th>WorkoutName </th>
                  <th>Time </th>
                  <th>Video URL </th>
                  <th>Image URL</th>
                </tr>
              </thead>

              {allWorkout.map((item) => (
                // <div >
                <tbody key={item.id}>
                  <tr>
                    <>
                      <td>{item.uuid}</td>
                      <td> {item.title}</td>
                      <td> {item.time} </td>
                      <td> {item.videoURL} </td>
                      <td>{item.imageURL}</td>
                      <button
                        onClick={() => openModalWithData(item.uuid)}
                        style={{ height: 100, color: "green", width: 100 }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteAll(item)}
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
            <b>Recomendation Workout</b>
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
                  <th>WorkoutName </th>
                  <th>Time </th>
                  <th>Video URL </th>
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
                        onClick={() => handleDeleteRecommendation(item)}
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
            <b>Trending Workout</b>
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
                  <th>WorkoutName </th>
                  <th>Time </th>
                  <th>Link URL </th>
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
                        onClick={() => handleDeleteTranding(item)}
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
            <b>Category Workout</b>
          </h3>
          <div class="form-group mt-3">
            <label htmlFor="dropdown">Choose Category: </label>
            <select
              id="dropdown"
              value={categoryWO}
              onChange={(e) => setCategoryWO(e.target.value)}
              style={{ marginLeft: 10 }}
            >
              <option value="">Choose...</option>
              <option value="Advance">Advance</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="ABS">ABS</option>
              <option value="ARMS">ARMS</option>
              <option value="BACK">BACK</option>
              <option value="BUTT">BUTT</option>
              <option value="CHEST">CHEST</option>
              <option value="LEGS">LEGS</option>
            </select>
            <p>Data Berdasarkan Kategori: {categoryWO}</p>
          </div>
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
                  <th>WorkoutName </th>
                  <th>Time </th>
                  <th>Video URL </th>
                </tr>
              </thead>

              {lunch.map((item) => (
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
                        onClick={() => handleDeleteCategory(item)}
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
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Workout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputWorkout"
                    aria-describedby="WorkoutName"
                    placeholder="Workout Name"
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
                    value={imageURL}
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
                    <option value="All Workout">All Workout</option>
                    <option value="Recommendation">Recommendation</option>
                    <option value="Trending Workout">Trending Workout</option>
                    <option value="ABS">ABS</option>
                    <option value="BACK">BACK</option>
                    <option value="ARMS">ARMS</option>
                    <option value="CHEST">CHEST</option>
                    <option value="LEGS">LEGS</option>
                    <option value="BUTT">BUTT</option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <label htmlFor="dropdown">Choose Level: </label>
                  <select
                    id="dropdown"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    style={{ marginLeft: 10 }}
                  >
                    <option value="">Choose...</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advance">Advance</option>
                  </select>
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
                    placeholder="Workout Name"
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
                    <option value="All Workout">All Workout</option>
                    <option value="Recommendation">Recommendation</option>
                    <option value="Trending Workout">Trending Workout</option>
                    <option value="ABS">ABS</option>
                    <option value="BACK">BACK</option>
                    <option value="ARMS">ARMS</option>
                    <option value="CHEST">CHEST</option>
                    <option value="LEGS">LEGS</option>
                    <option value="BUTT">BUTT</option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <label htmlFor="dropdown">Choose Level: </label>
                  <select
                    id="dropdown"
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                    style={{ marginLeft: 10 }}
                  >
                    <option value="">Choose...</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advance">Advance</option>
                  </select>
                </div>
                <button
                  // type="submit"
                  class="btn btn-success mt-4"
                  onClick={handleUpdate}
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

    // </div>
  );
}
