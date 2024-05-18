import React from "react";
import Hero from "../Hero/Hero.jsx";
import Services from "../Sections/Menu/Service.jsx";
import About from "../Sections/Menu/about.jsx";
import Vacancy from "../Sections/Opportunity/Job.jsx";
import Footer from "../Hero/Footer.jsx";
import Apply from "../Sections/Application/Apply.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vacancy />
      <Apply />
      <Footer />
    </>
  );
}

export default Home;
