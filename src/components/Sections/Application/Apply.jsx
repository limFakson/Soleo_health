import React from "react";
import "./Apply.css";
import { useEffect, useState } from "react";

function Apply() {
  const apiUrl = import.meta.env.VITE_API_LINK;
  const [locationData, setLocationData] = useState({
    address: "",
    state: "",
    country: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locationData: {
      address: "",
      state: "",
      country: "",
    },
    employmentStatus: "",
    job: "",
    responsibilty: "",
    military: "",
    FICC: "",
    creditScore: "",
    phoneCarrier: "",
    seekingJob: "",
    Duration: "",
    schedule: "",
    equipment: "",
    letter: "",
    payment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
    setFormData({
      ...formData,
      locationData: { ...locationData, [name]: value },
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
  const createData = async (formData) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  const handleSubmit = (e, formData) => {
    e.preventDefault();
    console.log("formData:", formData);
    console.log();
    createData(formData);
    // Add your form submission logic here
    // For example, sending the form data to a server
    window.location.reload();
  };

  return (
    // {/* Application receies request to make part or full time
    // checked depending on what buttton clicked at home page */}
    <div>
      <section id="application-page" className="w-full h-full ">
        <div className="py-[1rem] relative bg-[#000003c0] ">
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
              <div className="form sm:px-4 lg:px-8">
                <form
                  onSubmit={(e) => handleSubmit(e, formData)}
                  // action=""
                  // method="POST"
                  className="form grid"
                  // onSubmit={form}
                >
                  <div className="personal-information pt-4 pb-2 flex flex-wrap justify-center ">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="custom-input"
                      name="name"
                      // required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="custom-input"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      // required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      className="custom-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      // required
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      className="custom-input"
                      value={locationData.address}
                      onChange={handleLocationChange}
                      // required
                    />
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      className="custom-input"
                      value={locationData.state}
                      onChange={handleLocationChange}
                      // required
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      className="custom-input"
                      name="country"
                      value={locationData.country}
                      onChange={handleLocationChange}
                      // required
                    />
                  </div>
                  <div className="information px-4 sm:px-8 sm:flex item-center gap-4 ">
                    <p className="hidden">What type of jobs have you had?</p>
                    <div className="past-job sm:w-[50%]">
                      <span>
                        <p className="text-base pb-1">
                          Are you currently employed?
                        </p>
                        <input
                          type="radio"
                          name="employmentStatus"
                          id=""
                          className="mr-1"
                          value="Yes"
                          onChange={handleRadioChange}
                          // required
                        />
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          name="employmentStatus"
                          id=""
                          className="ml-2 mr-1"
                          value="No"
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="no">No</label>
                      </span>
                      <span>
                        <p className="text-base pb-1 pt-2">
                          How did you get your previous or current job?
                        </p>
                        <textarea
                          name="job"
                          cols="25"
                          rows="2"
                          value={formData.job}
                          onChange={handleInputChange}
                        ></textarea>
                      </span>
                      <span>
                        <p className="text-base pb-1 pt-2">
                          What were your main responsibilities and achievements?
                        </p>
                        <textarea
                          name="responsibilty"
                          cols="25"
                          rows="2"
                          value={formData.responsibilty}
                          onChange={handleInputChange}
                        ></textarea>
                      </span>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Have you been in the military before?
                        </p>
                        <input
                          type="radio"
                          name="military"
                          value="Yes"
                          onChange={handleRadioChange}
                          className="mr-1"
                        />
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          name="military"
                          value="No"
                          onChange={handleRadioChange}
                          className="ml-2 mr-1"
                        />
                        <label htmlFor="no">No</label>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Do you operate with any financial institution Credit
                          Card?
                        </p>
                        <input
                          type="radio"
                          name="FICC"
                          value="Yes"
                          onChange={handleRadioChange}
                          className="mr-1"
                        />
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          name="FICC"
                          value="No"
                          onChange={handleRadioChange}
                          className="ml-2 mr-1"
                        />
                        <label htmlFor="no">No</label>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          What is your credit scores?
                        </p>
                        <textarea
                          name="creditScore"
                          cols="25"
                          rows="2"
                          value={formData.creditScore}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Whats your mobile phone carrier ?
                        </p>
                        <textarea
                          name="phoneCarrier"
                          id=""
                          cols="25"
                          rows="2"
                          value={formData.phoneCarrier}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="now-job sm:w-[50%]">
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Are you seeking employment in a company of a certain
                          size?
                        </p>
                        <input
                          type="radio"
                          name="seekingJob"
                          onChange={handleRadioChange}
                          value="Yes"
                          id=""
                          className="mr-1"
                        />
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          name="seekingJob"
                          onChange={handleRadioChange}
                          value="No"
                          id=""
                          className="ml-2 mr-1"
                        />
                        <label htmlFor="no">No</label>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          How long do you intend working for this company ?
                        </p>
                        <textarea
                          name="Duration"
                          cols="30"
                          rows="2"
                          value={formData.Duration}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Are you willing to work Part time or Full time?
                        </p>
                        <input
                          type="radio"
                          name="schedule"
                          value="Part Time"
                          onChange={handleRadioChange}
                          id=""
                          className="mr-1"
                        />
                        <label htmlFor="yes">Part time</label>
                        <input
                          type="radio"
                          name="schedule"
                          value="Full Time"
                          onChange={handleRadioChange}
                          id=""
                          className="ml-2 mr-1"
                        />
                        <label htmlFor="no">Full time</label>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Do you have a HP laserjet printer, copier and scanner?
                        </p>
                        <input
                          type="radio"
                          name="equipment"
                          value="Yes"
                          onChange={handleRadioChange}
                          id=""
                          className="mr-1"
                        />
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          name="equipment"
                          value="No"
                          onChange={handleRadioChange}
                          id=""
                          className="ml-2 mr-1"
                        />
                        <label htmlFor="no">No</label>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          Tell Us why you feel you are the right person for this
                          Job?
                        </p>
                        <textarea
                          name="letter"
                          cols="30"
                          rows="2"
                          value={formData.letter}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="pb-2">
                        <p className="text-base pb-2">
                          How would you like to be Paid ? Weekly Or Bi- Weekly /
                          Direct deposit What bank do you operate with? Mobile
                          Phone Carrier ( Postpaid / Prepaid )
                        </p>
                        <textarea
                          name="payment"
                          cols="30"
                          rows="2"
                          value={formData.payment}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="cards sm:flex justify-between items-center px-4 sm:px-8 gap-4">
                    <div className="id sm:w-[50%] pb-4">
                      <p className="pb-2">
                        Please provide your Id card information
                      </p>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="ssn sm:w-[50%]">
                      <p className="pb-2">
                        Please provide your SSN card information or enter the
                        details.
                      </p>
                      <input type="file" name="" id="" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#152456] text-[#e3efff] w-[15rem] h-[3rem] sm:w-[25rem] sm:h-[4rem] text-2xl justify-self-center mt-8 "
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
