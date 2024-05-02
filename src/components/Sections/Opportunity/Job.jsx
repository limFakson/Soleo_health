import React from "react";
import img4 from "../../../assets/img-4.jpg";
import { Link } from "react-router-dom";

function Job() {
  return (
    <div className="py-4">
      <hr className="section_hr" />
      <section id="recruit" className="mt-6 ">
        <div className="text-center sm:px-12 lg:px-[12rem] max-sm:px-8 py-4 ">
          <h1 className="text-4xl max-sm:text-3xl font-semibold font-[Oswald] text-[#152456] pb-2 ">
            Join Our Team! Explore Job Opportunities
          </h1>
          <p className="text-base max-sm:text-sm font-medium text-center">
            We are looking for talented individuals to join our pharmacy team.
            Discover exciting job opportunities and make a difference in
            healthcare.
          </p>
        </div>
        {/* Job Openings & Recruitment Divide */}
        <div className="lg:flex justify-center items-start pt-4 gap-2 lg:gap-4 px-8 max-sm:px-6 ">
          {/* Job Openings */}
          <div className="p-2 lg:w-[50%] border-[#152456] border-[3px] rounded-3xl ">
            <img
              className="h-[23rem] w-full object-cover object-bottom rounded-3xl "
              src={img4}
              alt="office-discussion"
            />
          </div>
          {/* Recruitment Divide */}
          <div className="py-4 max-sm:pt-6 sm:px-8 lg:w-[50%] ">
            <div className="job-details text-[#152456] ">
              <h2 className="pt-2 pb-1 text-2xl font-semibold font-[Oswald] text-left ">
                Exciting Remote Job Opportunity with Flexible Schedule!
              </h2>
              <h3 className="text-base font-medium text-left ">
                Are you looking for a remote job with great pay and flexibility?
                Join Soleo Health INC as a Data Entry Representative!
              </h3>
              <p className="py-2 text-lg">
                <ul>
                  <li>
                    <strong>Position: </strong>
                    Data Entry Representative (No phone calls required)
                  </li>
                  <li>
                    <strong>Remote Work: </strong>
                    100% Remote (Permanent)
                  </li>
                  <li>
                    <strong>Training: </strong>Comprehensive training provided
                  </li>
                  <li>
                    <strong>Equipment: </strong>All equipment provided by the
                    company
                  </li>
                  <li>
                    <strong>Starting Wage: </strong>$25.50 per hour
                  </li>
                  <li>
                    <strong>Job Schedule: </strong>Part-time or Full-time with
                    flexible hours
                  </li>
                  <li>
                    <strong>Position Type: </strong>Permanent Data Entry
                    Representative
                  </li>
                  <li>
                    <strong>Benefits: </strong>
                    Enjoy 401(k) with matching, Health, Dental, Vision
                    insurance, and more!
                  </li>
                </ul>
              </p>
              <a href="#application-page">
                <button className="bg-[#e3efff] p-4 rounded-lg mt-2 ">
                  Apply For Position
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Job;
