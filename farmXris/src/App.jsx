import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Farming from "./Components/Farming";
import Contact from "./Components/Contact";




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
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
