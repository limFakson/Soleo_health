import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Sections/Service.jsx";
import About from "./components/Sections/about.jsx";
import Vacancy from "./components/Sections/Opportunity/Job.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vacancy />
    </>
  );
}

export default App;
