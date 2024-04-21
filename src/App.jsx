import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/hero/hero";
import Services from "./components/Sections/services.jsx";
import About from "./components/Sections/about.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
