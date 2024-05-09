import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Admin from "./components/Pages/Admin";

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
