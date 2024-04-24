import React from "react";
import img4 from "../../../assets/img-4.jpg";

function Job() {
  return (
    <div className="py-8">
      <hr className="section_hr" />
      <section id="recruit" className="my-4 ">
        <div className="text-center sm:px-12 lg:px-[12rem] max-sm:px-8 py-4 ">
          <h1 className="text-4xl max-sm:text-2xl font-semibold font-[Oswald] text-[#152456] pb-2 ">
            Join Our Team! Explore Job Opportunities
          </h1>
          <p className="text-base max-sm:text-sm font-medium text-center">
            We are looking for talented individuals to join our pharmacy team.
            Discover exciting job opportunities and make a difference in
            healthcare.
          </p>
        </div>
        {/* Job Openings & Recruitment Divide */}
        <div className="sm:flex justify-center items-center py-4 gap-2 lg:gap-4 px-8 max-sm:px-6 ">
          {/* Job Openings */}
          <div className="p-2 sm:w-[60%] border-[#152456] border-[3px] rounded-3xl ">
            <img
              className="h-[23rem] w-full object-cover object-bottom rounded-3xl "
              src={img4}
              alt="office-discussion"
            />
          </div>
          {/* Recruitment Divide */}
          <div className="py-2 max-sm:pt-6 max-sm:px-4 sm:px-2 lg:px-16 sm:w-[40%] ">
            <span className="">
              <h2 className="text-2xl text-center font-semibold pb-2 ">
                Apply Now
              </h2>
              <p className="text-base text-center sm:text-left pb-2 ">
                Explore our job openings and select the type of position you're
                interested in applying for:
              </p>
            </span>
            <div className="job_option flex p-2 justify-evenly text-center pt-4 lg:pt-8 ">
              <div className="point part-time bg-[#e3efff] p-2 lg:py-4 lg:px-6 rounded-lg ">
                <h3 className="text-xl ">
                  Apply <br /> as
                </h3>
                <h3 className="text-lg">Part Time</h3>
              </div>
              <div className="point full-time bg-[#e3efff] p-2 lg:py-4 lg:px-6 rounded-lg ">
                <h3 className="text-xl font-medium ">
                  Apply <br /> as
                </h3>
                <h3 className="text-lg font-normal ">Full Time</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Job;
