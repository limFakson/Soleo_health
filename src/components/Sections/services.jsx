import React from "react";
import "./sections.css";

function services() {
  return (
    <div className="mt-4">
      <hr className="section_hr" />
      <section id="services" className="my-4 sm:mx-8">
        <div className="service m-4">
          <h1 className="text-center text-4xl font-semibold font-[Oswald] text-[#152456]">
            Explore Our Pharmacy Services
          </h1>
        </div>
        <div className="services-selection sm:flex sm:gap-12 lg:ml-6 sm:h-[420px] lg:h-[300px] ">
          <div className="selector sm:w-[28%] lg:w-[23%] sm:border-[#152456] py-4">
            <ul className="max-sm:flex max-sm:border-b px-2 ">
              <li className="point sm:pl-2 lg:pl-4 py-6 border-b border-[#152456] sm:border-r-4 px-2 ">
                Featured Services
              </li>
              <li className="point sm:pl-2 lg:pl-4 py-6 border-b border-[#152456] sm:border-r-2 px-2">
                Healthcare Expertise
              </li>
              <li className="point sm:pl-2 lg:pl-4 py-6 border-b border-[#152456] sm:border-r-2 px-2">
                Patient-Centered Approach
              </li>
              <li className="point sm:pl-2 lg:pl-4 py-6 sm:border-r-2 border-[#152456] max-sm:border-b ">
                Wellness Tips
              </li>
            </ul>
          </div>
          <div className="selectee py-10 pl-4 lg:pl-12">
            <div className="featured text-base">
              <ol>
                <li>
                  <strong>Prescription Filling and Refills:</strong>
                  <ul>
                    <li>
                      Fast and convenient prescription filling services with
                      options for online refills.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Medication Counseling:</strong>
                  <ul>
                    <li>
                      Personalized consultations with pharmacists to discuss
                      medication usage, side effects, and adherence.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Immunizations:</strong>
                  <ul>
                    <li>
                      Comprehensive immunization services including flu shots,
                      vaccinations, and travel vaccines.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Medication Therapy Management (MTM):</strong>
                  <ul>
                    <li>
                      Specialized MTM programs to optimize medication
                      effectiveness and minimize risks.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Health Screenings:</strong>
                  <ul>
                    <li>
                      Regular health screenings for blood pressure, cholesterol,
                      diabetes, and more.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Medication Delivery Services:</strong>
                  <ul>
                    <li>
                      Convenient prescription delivery options for patients who
                      need medications brought to their doorstep.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="expertise"></div>
            <div className="approach"></div>
            <div className="tips"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default services;
