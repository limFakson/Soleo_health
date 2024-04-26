import React from "react";
import Img1 from "../../../assets/patient-1.jpg";
import Img2 from "../../../assets/patient-2.jpg";
import Img3 from "../../../assets/patient-3.jpg";

function show() {
  return (
    <div className="py-8">
      <hr className="section_hr" />
      <section id="testimonial">
        <div className="testimonial">
          <div className="testimonial-heading sm:px-12 lg:px-[12rem] max-sm:px-8 py-4">
            <h2 className="text-center text-4xl max-sm:text-2xl font-semibold font-[Oswald] text-[#152456] pb-2">
              Our Patients Feedback About Us
            </h2>
            <p className="text-base max-sm:text-sm font-medium text-center">
              Explore the positive experiences and valuable feedback from our
              patients. Learn why they trust us for their healthcare needs and
              how we strive to exceed expectations.
            </p>
          </div>
          <div className="testimonial-boxs flex overflow-x-hidden p-4 flex-wrap gap-4 justify-center relative w-full ">
            <div className="testimonials flex flex-row-reverse gap-6  lg:w-[45%] mx-2 sm:p-8 p-4 items-start justify-center bg-[#e3efff]  ">
              <div className="content pr-6 ">
                <p className="text-sm sm:text-base ">
                  I am incredibly grateful for the exceptional care and service
                  provided by this pharmacy. The staff is friendly,
                  knowledgeable, and truly cares about their patients. I highly
                  recommend them for anyone seeking reliable and compassionate
                  healthcare.
                </p>
                <div className="author-name mt-6">
                  <h3 className="font-[Oswald] font-semibold text-xl ">
                    Emily H.
                  </h3>
                </div>
              </div>
              <div className="author pt-2">
                <div className="author-img ">
                  <img
                    src={Img1}
                    alt="patient 1"
                    className="w-[30rem] object-left object-cover rounded-[50%] h-[4.4rem] sm:h-[6.5rem] "
                  />
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-row-reverse gap-6 lg:w-[45%] mx-4 sm:p-8 p-4 items-start justify-center bg-[#e3efff]  ">
              <div className="content pr-6 ">
                <p className="text-sm sm:text-base ">
                  Choosing this pharmacy was one of the best decisions I made
                  for my health. They go above and beyond to ensure I receive my
                  medications on time and are always available to answer any
                  questions I have. I trust them completely with my healthcare
                  needs.
                </p>
                <div className="author-name mt-6">
                  <h3 className="font-[Oswald] font-semibold text-xl ">
                    Jessica W.
                  </h3>
                </div>
              </div>
              <div className="author pt-2">
                <div className="author-img ">
                  <img
                    src={Img2}
                    alt="patient 1"
                    className="w-[30rem] object-left object-cover rounded-[50%] h-[4.4rem] sm:h-[6.5rem] "
                  />
                </div>
              </div>
            </div>
            <div className="testimonials flex flex-row-reverse gap-6 lg:w-[45%] mx-4 p-4 sm:p-8 items-start justify-center bg-[#e3efff]  ">
              <div className="content pr-6 ">
                <p className="text-sm sm:text-base ">
                  I've been a loyal patient of this pharmacy for years, and they
                  continue to impress me with their professionalism and
                  dedication. The pharmacists are attentive and provide
                  personalized advice tailored to my health concerns. I wouldn't
                  go anywhere else!
                </p>
                <div className="author-name mt-6">
                  <h3 className="font-[Oswald] font-semibold text-xl ">
                    Williams G.
                  </h3>
                </div>
              </div>
              <div className="author pt-2">
                <div className="author-img ">
                  <img
                    src={Img3}
                    alt="patient 1"
                    className="w-[30rem] object-left object-cover rounded-[50%] h-[4.4rem] sm:h-[6.5rem] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default show;
