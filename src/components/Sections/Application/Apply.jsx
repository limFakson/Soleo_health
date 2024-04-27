import React from "react";
import "./Apply.css";

function Apply() {
  return (
    // {/* Application receies request to make part or full time
    // checked depending on what buttton clicked at home page */}
    <div>
      <section
        id="application-page"
        className="w-full h-full absolute top-0 left-0 overflow-y-scroll "
      >
        <div className="pt-[7rem] bg-[#000003b9] ">
          <div className="application">
            <div className="bg-[#e3efff] h-full apply-container text-[#152456] p-4 pb-8 ">
              <div className="p-4 sm:px-[6rem] lg:px-[18rem] ">
                <h1 className="font-[Oswald] text-4xl text-center font-bold py-2 leading-[50px] ">
                  Apply for avaliable positions in Soleo Health
                </h1>
                <h3 className="text-xl pb-2 text-center font-medium">
                  Start Your Journey with Us: Apply for Open Positions
                </h3>
              </div>
              <div className="form px-8">
                <form action="" method="post" className="form">
                  <div className="personal-information py-4 flex flex-wrap justify-center ">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="custom-input"
                      name="fname"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="custom-input"
                      name="email"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="pnumber"
                      className="custom-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      className="custom-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      className="custom-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      className="custom-input"
                      name="country"
                      required
                    />
                  </div>
                  <div className="cards"></div>
                  <button
                    type="submit"
                    className="bg-[#152456] text-[#e3efff] "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apply;
