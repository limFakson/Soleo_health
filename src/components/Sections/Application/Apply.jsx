import React from "react";
import "./Apply.css";

function Apply() {
  return (
    // {/* Application receies request to make part or full time
    // checked depending on what buttton clicked at home page */}
    <div>
      <section
        id="application-page"
        className="w-full h-full fixed top-0 left-0 overflow-y-scroll "
      >
        <div className="pt-[6rem] relative bg-[#000003c0] ">
          <div className="application">
            <div className="bg-[#e3efff] h-svh apply-container text-[#152456] p-4 pb-8 ">
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
                  <div className="information">
                    <p className="hidden">
                      How did you get your previous jobs? What were your main
                      responsibilities? Achievements? Have you been in the
                      military before? What type of jobs have you had? Are you
                      willing to work flexible or long hours? Do you have a HP
                      laserjet printer, copier and scanner? Are you seeking
                      employment in a company of a certain size? What is your
                      credit scores? How long do you intend working for this
                      company ? Are you seeking a Full time or Part time
                      Position? Whats your mobile phone carrier ? Do you operate
                      with any financial institution Credit Card? Tell Us why
                      you feel you are the right person for this Job? How would
                      you like to be Paid ? Weekly Or Bi- Weekly / Direct
                      deposit What bank do you operate with? Mobile Phone
                      Carrier ( Postpaid / Prepaid )
                    </p>
                    <span>
                      <p>Are you currently employed?</p>
                      <input type="radio" name="Yes" id="" />
                      <label htmlFor="yes">Yes</label>
                      <input type="radio" name="no" id="" />
                      <label htmlFor="no">No</label>
                    </span>
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
