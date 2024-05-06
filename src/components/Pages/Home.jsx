import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Sections/Service";
import About from "../Sections/about";
import Vacancy from "../Sections/Opportunity/Job";
import Footer from "../Hero/Footer";
import Apply from "../Sections/Application/Apply";
import MyForm from "../Hero/teachJoshua";

function Home() {
  return (
    <>
      <MyForm />
      <Hero />
      <About />
      <Services />
      <Vacancy />
      {/* <Apply /> */}
      <Footer />
    </>
  );
}

export default Home;
