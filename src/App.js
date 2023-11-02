import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login'
import ManageRecipe from "./Pages/ManageRecipe";
import ManageWorkout from "./Pages/ManageWorkout";
import ManageArtikel from "./Pages/ManageArtikel";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ManageRecipe" element={<ManageRecipe />} />
            <Route path="/ManageWorkout" element={<ManageWorkout />} />
            <Route path="/ManageArtikel" element={<ManageArtikel />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
