import React, { useRef } from "react";
import "./Hero.css";
import "../Sections/Section.css";
import img4 from "../../assets/img4.png";

function hero() {
  return (
    <>
      <header className="w-full pt-4 bg-[#E3EFFF] mb-2">
        <div className="nav">
          <div className="logo"></div>
        </div>
        <div className="hero lg:flex justify-between items-center mt-[3rem] mx-12 max-sm:mx-8">
          <div className="pl-4 lg:w-[50%] sm:mr-[4rem] mr-4 mb-4 ">
            <h1 className="hero-heading text-5xl font-bold font-[Oswald] text-[#152456] lg:leading-[3.2rem] mb-2">
              Welcome to Soleo Health, Your Trusted Health Partner
            </h1>
            <h2 className="text-lg font-normal  ">
              Providing Quality Care & Medications Since 2005
            </h2>
            <div className="pt-4 lg:pt-8">
              <button className="bg-[#152456] text-[#E3EFFF] rounded-xl py-4 px-6 ">
                Join Our Team
              </button>
            </div>
          </div>
          <div className="img  ">
            <img src={img4} alt="" className="w-[40rem]" />
          </div>
        </div>
        <div className="options bg-white sm:flex justify-center item-center rounded-3xl border-[#bddbff] border ">
          <div className="about point border-[#152456] max-sm:border-b sm:border-r sm:w-[33.33%] text-center py-4 lg:px-8 sm:px-8 max-sm:px-8 ">
            <i className="fa-solid fa-circle-exclamation"></i>
            <h2 className="font-bold text-xl">Learn More</h2>
            <p className="font-normal">
              Explore how we can support you on your wellness journey.
            </p>
          </div>
          <div className="services point border-[#152456] max-sm:border-y sm:border-x sm:w-[33.33%] text-center py-4 px-8 ">
            <i className="fa-solid fa-stethoscope"></i>
            <h2 className="font-bold text-xl">Pharmacy Services</h2>
            <p className="font-normal">
              Discover a range of pharmacy services.
            </p>
          </div>
          <div className="opportunities point border-[#152456] max-sm:border-t sm:border-l sm:w-[33.33%] text-center py-4 px-8 ">
            <i className="fa-solid fa-user-doctor"></i>
            <h2 className="font-bold text-xl">Job Opportunities</h2>
            <p className="font-normal">
              Join Our Team! Explore Job Opportunities
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default hero;
