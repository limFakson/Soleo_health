import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Sections/Service";
import About from "../Sections/about";
import Vacancy from "../Sections/Opportunity/Job";
import Testimonial from "../Sections/Opportunity/Testimonial";
import Footer from "../Hero/Footer";

function Home() {
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

export default Home;
