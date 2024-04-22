import React from "react";
import img4 from "../../../assets/img-4.jpg";

function Job() {
  return (
    <div className="py-8">
      <hr className="section_hr" />
      <section id="recruit" className="my-4 sm:mx-12">
        <div className="text-center sm:px-12 lg:px-[12rem] py-4 ">
          <h1 className="text-4xl font-semibold font-[Oswald] text-[#152456] pb-2 ">
            Join Our Team! Explore Job Opportunities
          </h1>
          <p className="text-base font-medium text-center">
            We are looking for talented individuals to join our pharmacy team.
            Discover exciting job opportunities and make a difference in
            healthcare.
          </p>
        </div>
        {/* Job Openings & Recruitment Divide */}
        <div className="flex justify-start item-center m-4">
          {/* Job Openings */}
          <div className="p-2 w-[65%] ">
            <img
              className="h-[25rem] w-full object-cover object-bottom "
              src={img4}
              alt=""
            />
          </div>
          {/* Recruitment Divide */}
          <div className="p-2">
            <h2>Apply Now</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Job;
