import React from "react";

function Job() {
  const jobClick = () => {
    console.log("full will");
  };
  return (
    <div>
      <section id="recruit" className="p-4">
        <h1 className="font-[Oswald] font-semibold ">
          Join Our Team! Explore Job Opportunities
        </h1>
        <p>
          We are looking for talented individuals to join our pharmacy team.
          Discover exciting job opportunities and make a difference in
          healthcare.
        </p>
        {/* Job Openings & Recruitment Divide */}
        <div className="flex justify-start item-center m-4">
          {/* Job Openings */}
          <div className="p-2">
            <ul>
              <li>Pharmacist</li>
              <li>Pharmacy Technician</li>
            </ul>
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
