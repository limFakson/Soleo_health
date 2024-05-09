import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Sections/Menu/Service";
import About from "../Sections/Menu/about";
import Vacancy from "../Sections/Opportunity/Job";
import Footer from "../Hero/Footer";
import Apply from "../Sections/Application/Apply";

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
