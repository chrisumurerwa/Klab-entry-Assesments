import { useState } from "react";
import "./App.css";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Farming from "./Components/Farming";
import Contact from "./Components/Contact";
import Mentorship from "./Components/Mentorship";
import Veterinary from "./Components/Veterinary";
import Main from "./Dashboard/components/Main";
import DashboardLayout from "./Dashboard/components/DashboardLayout";

import Users from "./Dashboard/components/Users";
import Milkproduction from "./Dashboard/components/Milkproduction";
import MedicalCheckup from "./Dashboard/components/MedicalCheckup";
import Births from "./Dashboard/components/Births";

function App() {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/Farming" element={<Farming/>}/>
              <Route path="/Mentorship" element={<Mentorship/>}/>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Veterinary" element={<Veterinary/>}/>
            </Route>

            <Route path="/Login" element={<Login/>} />
            <Route path="/" element={<DashboardLayout/>} >
            <Route path="/" index element={<Main/>}/>
            <Route path="/Dashboard"  element={<Main/>}/>
            <Route path="/Users" element={<Users/>}/>
            <Route path="/Milkproduction" element={<Milkproduction/>}/>
            <Route path="/MedicalCheckup" element={<MedicalCheckup/>}/>
            <Route path="/Births" element={<Births/>}/>
            </Route>

          </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
