import React from "react";
import "./sections.css";
import img5 from "../../assets/img-5.png";

function about() {
  return (
    <div className="mt-4 bg-[#E3EFFF] mb-4 pb-4">
      <hr className="section_hr" />
      <section id="about-us" className="my-8 sm:ml-12 sm:mx-8 mx-4 ">
        <div className="about">
          <div className="fst-section text-[#152456] lg:flex py-4 pl-4 ">
            <div className="txt lg:w-[60%] gap-4 max-sm:mr-4 ">
              <h1 className="text-3xl font-[Oswald] font-semibold mb-4 ">
                About Us
              </h1>
              <span>
                <h1 className="text-base font-medium">
                  <strong>Welcome to Soleo Health</strong>
                  <br />
                  Soleo Health is a pioneering national provider of specialized
                  pharmacy services for complex medical conditions, delivered at
                  home or alternate care sites.
                </h1>
              </span>
              <br />
              <span>
                <h1 className="text-base font-medium">
                  <strong>What is Complex Specialty Pharmacy?</strong>
                  <br />
                  As a trusted leader in complex specialty pharmacy services,
                  Soleo Health offers high-cost therapies that require
                  meticulous clinical oversight and interventions. We ensure
                  exceptional patient care regardless of the care setting,
                  administration method, or insurance plan, with a proven track
                  record of delivering real-world outcomes. <br /> <br /> Our
                  dedicated team includes renowned physician specialists, nurse
                  practitioners, clinical pharmacists, registered nurses,
                  reimbursement experts, and patient care ambassadors. We
                  collaborate closely with referring partners to deliver an
                  unparalleled patient experience.
                </h1>
              </span>
            </div>
            <div className="img pt-4 lg:w-[50%] ">
              <img src={img5} alt="medicine_img" className="w-[55rem] " />
              <span>
                <h1 className="text-base font-medium">
                  <strong>National Reach, Local Care</strong>
                  <br />
                  With pharmacy licensure in all 50 states and national nursing
                  coverage, we provide comprehensive patient management across
                  the United States. Soleo Health's commitment to quality care
                  has earned us prestigious accreditations from ACHC, The Joint
                  Commission, URAC, and the National Association of Boards of
                  Pharmacy.
                </h1>
              </span>
            </div>
          </div>
          <div className="about-goals lg:bg-white rounded-xl flex max-lg:gap-2 my-2">
            <div className="goals border-[#152456] max-lg:border-x lg:border-r p-4 ">
              <h1 className="text-sm font-normal">
                <span className="mr-6">
                  <strong>Our Mission</strong>
                </span>
                <br />
                At Soleo Health, we foster a culture of innovation, offering
                leading healthcare solutions to simplify complex care.
              </h1>
            </div>
            <div className="goals border-[#152456] border-x p-4 ">
              <h1 className="text-sm font-normal">
                <span className="mb-2">
                  <strong>Our Vision</strong>
                </span>
                <br />
                We aspire to be the undisputed leader in delivering exceptional
                care to patients receiving complex therapies across diverse care
                settings.
              </h1>
            </div>
            <div className="goals border-[#152456] border-x p-4 overflow-y-scroll ">
              <h1 className="text-sm font-normal">
                <span className="mb-2">
                  <strong>Our Values</strong>
                </span>
                <li>
                  Improve Patients' Lives Every Day: We prioritize patient
                  well-being in all our endeavors.
                </li>
                <li>
                  Passion and Dedication: We approach our work with unwavering
                  passion and dedication.
                </li>
                <li>
                  Encourage Innovation: We value creative thinking and foster an
                  environment of unlimited ideas.
                </li>
                <li>
                  Ownership Mentality: We make decisions with accountability and
                  integrity.
                </li>
                <li>
                  Integrity and Ethics: We strive to always do the next right
                  thing.
                </li>
                <li>
                  Fun and Collaboration: We believe in enjoying our work and
                  collaborating as a team.
                </li>
              </h1>
            </div>
            <div className="goals border-[#152456] max-lg:border-x lg:border-l p-4">
              <h1 className="text-sm font-normal">
                <span className="mb-2">
                  <strong>Our Accomplishments</strong>
                </span>
                <br />
                Explore our journey and accomplishments, which speak volumes
                about our commitment to excellence and innovation in patient
                care.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
