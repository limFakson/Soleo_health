import React from "react";
import "./Apply.css";

function Apply() {
  return (
    // {/* Application receies request to make part or full time
    // checked depending on what buttton clicked at home page */}
    <div>
      <section id="application-page" className="w-full h-full ">
        <div className="pt-[1rem] relative bg-[#000003c0] ">
          <div className="application flex justify-center items-center">
            <div className="bg-[#e3efff] h-auto lg:w-[60rem] apply-container text-[#152456] p-4 pb-8 ">
              <div className="p-4 sm:px-[3rem] lg:px-[10rem] ">
                <h1 className="font-[Oswald] text-3xl sm:text-4xl text-center font-bold py-2 leading-[50px] ">
                  Apply for avaliable positions in Soleo Health
                </h1>
                <h3 className="text-lg sm:text-xl pb-2 text-center pt-1 font-medium">
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
                  <div className="information flex flex-wrap justify-center gap-4">
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
                      <input type="radio" name="no" id="" className="ml-2" />
                      <label htmlFor="no">No</label>
                    </span>
                    <span>
                      <p>Are you currently employed?</p>
                      <input type="radio" name="Yes" id="" />
                      <label htmlFor="yes">Yes</label>
                      <input type="radio" name="no" id="" className="ml-2" />
                      <label htmlFor="no">No</label>
                    </span>
                    <span>
                      <p>Are you currently employed?</p>
                      <input type="radio" name="Yes" id="" />
                      <label htmlFor="yes">Yes</label>
                      <input type="radio" name="no" id="" className="ml-2" />
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
