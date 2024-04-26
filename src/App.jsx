import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Homepage.jsx";
import Services from "./components/Sections/Service.jsx";
import About from "./components/Sections/about.jsx";
import Vacancy from "./components/Sections/Opportunity/Job.jsx";
import Testimonial from "./components/Sections/Opportunity/Testimonial.jsx";
import Footer from "./components/Hero/Footer.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vacancy />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
