import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Details from "./components/Pages/FormDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
