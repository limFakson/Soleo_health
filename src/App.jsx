import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Admin from "./components/Pages/Admin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard/passby" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
