import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Myfooter from "./components/Myfooter";


function App() {
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
          <Myfooter/>
      </BrowserRouter>
  );
}

export default App;