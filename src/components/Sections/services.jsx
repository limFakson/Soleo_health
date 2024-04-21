import React, { useRef, useState } from "react";
import "./sections.css";

function services() {
  const [isActive, setIsActive] = useState(false);

  const readService = useRef(null);

  const handleServiceClick = () => {
    console.log("handleServiceClick called");
    if (readService.current) {
      console.log("services");
    }
    setIsActive(!isActive);
  };

  return (
    <div className="mt-4">
      <hr className="section_hr" />
      <section id="services" className="my-8 sm:mx-8">
        <div className="service m-4">
          <h1 className="text-center text-4xl font-semibold font-[Oswald] text-[#152456]">
            Explore Our Pharmacy Services
          </h1>
        </div>
        <div className="services-selection sm:flex sm:gap-12 lg:ml-6 sm:h-[420px] lg:h-[300px] ">
          <div className="selector sm:w-[28%] lg:w-[23%] sm:border-[#152456] py-4">
            <ul className="mobile-selector max-sm:flex sm:hidden border-b px-2 border-[#152456] ">
              <li
                ref={readService}
                className={`point border-b-2 border-[#152456] border-r px-2 ${
                  isActive ? "active" : ""
                }`}
                onClick={handleServiceClick}
              >
                Featured Services
              </li>
              <li
                // ref={}
                className="point border-[#152456] border-r px-2"
                // onClick={handleServiceClick}
              >
                Healthcare Expertise
              </li>
              <li
                // ref={}
                className="point border-[#152456] border-r px-2"
                // onClick={handleServiceClick}
              >
                Patient-Centered Approach
              </li>
              <li
                // ref={}
                className="point border-[#152456] "
                // onClick={handleServiceClick}
              >
                Wellness Tips
              </li>
            </ul>
            <ul className="larger-selector max-sm:hidden sm:block px-2 border-[#152456] ">
              <li className="point sm:px-2 lg:pl-6 py-6 sm:border-b border-[#152456] border-r-4 ">
                Featured Services
              </li>
              <li className="point sm:px-2 lg:pl-6 py-6 sm:border-b border-[#152456] border-r-2 ">
                Healthcare Expertise
              </li>
              <li className="point sm:px-2 lg:pl-6 py-6 sm:border-b border-[#152456] border-r-2">
                Patient-Centered Approach
              </li>
              <li className="point sm:px-2 lg:pl-6 py-6 sm:border-r-2 border-[#152456] ">
                Wellness Tips
              </li>
            </ul>
          </div>
          <div className="selectee py-9 max-sm:py-4 pl-4 lg:pl-12 max-sm:px-8">
            <div className="featured selecteed block text-base">
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
            <div className="expertise selecteed text-base hidden">
              <ol>
                <li>
                  <strong>Pharmacist Credentials:</strong>
                  <ul>
                    <li>
                      Our pharmacists are highly qualified with advanced degrees
                      (PharmD) and are licensed professionals with years of
                      experience in pharmacy practice. They are committed to
                      providing safe and effective medication management
                      tailored to each patient's needs.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Experience and Knowledge:</strong>
                  <ul>
                    <li>
                      Our pharmacy team brings extensive experience and
                      specialized knowledge in various areas of pharmacy,
                      including clinical pharmacy, community pharmacy, and
                      specialty pharmacy. We stay updated with the latest
                      advancements to ensure optimal patient care.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Medication Management Skills:</strong>
                  <ul>
                    <li>
                      We excel in medication management, offering expertise in
                      dosage adjustments, drug interactions, and therapeutic
                      monitoring. Our pharmacists work closely with patients and
                      healthcare providers to optimize treatment outcomes.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Patient Education:</strong>
                  <ul>
                    <li>
                      We prioritize patient education, providing valuable
                      information on medication use, disease management, and
                      lifestyle modifications. Empowering patients with
                      knowledge is key to improving health outcomes.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Clinical Services:</strong>
                  <ul>
                    <li>
                      Our clinical services include medication therapy
                      management (MTM), medication reviews, and chronic disease
                      management. We offer personalized consultations to ensure
                      safe and effective use of medications..
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Collaborative Care:</strong>
                  <ul>
                    <li>
                      We believe in collaborative care and work closely with
                      healthcare providers to deliver comprehensive patient
                      care. By collaborating with physicians and specialists, we
                      ensure integrated treatment plans for our patients.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="approach selecteed text-base hidden">
              <h2>
                At Soleo Health, we prioritize your health and well-being above
                all else. Our patient-centered approach is designed to provide
                personalized care and support tailored to your unique needs.
                Here's how we ensure a patient-centered experience:
              </h2>
              <ul>
                <li>
                  <strong>Individualized Care: </strong>
                  <span>
                    We take the time to understand your health concerns,
                    preferences, and goals to develop personalized treatment
                    plans.
                  </span>
                </li>
                <li>
                  <strong>Comprehensive Consultations: </strong>
                  <span>
                    Our pharmacists offer thorough consultations to answer your
                    questions, address any medication-related issues, and
                    provide education on proper medication use.
                  </span>
                </li>
                <li>
                  <strong>Collaborative Decision-Making: </strong>
                  <span>
                    We involve you in the decision-making process regarding your
                    healthcare, empowering you to make informed choices about
                    your treatment.
                  </span>
                </li>
                <li>
                  <strong>Accessible and Supportive: </strong>
                  <span>
                    We are here to listen and support you throughout your health
                    journey, offering compassionate care and guidance every step
                    of the way.
                  </span>
                </li>
                <li>
                  <strong>Follow-Up and Monitoring: </strong>
                  <span>
                    We follow up with patients to ensure treatment effectiveness
                    and make adjustments as needed to optimize outcomes.
                  </span>
                </li>
                <li>
                  <strong>Community Engagement: </strong>
                  <span>
                    We actively engage with our community to promote health
                    awareness and provide resources for better health outcomes.
                  </span>
                </li>
              </ul>
              <h3>
                At Soleo Health, you are not just a patient; you are a valued
                member of our healthcare family. Experience the difference of
                our patient-centered approach today.
              </h3>
            </div>
            <div className="tips selecteed text-base hidden">
              <ol>
                <li>
                  <strong>Medication Management:</strong>
                  <ul>
                    <li>
                      Take medications as prescribed by your healthcare
                      provider. Set reminders or use pill organizers to stay on
                      track.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Healthy Eating:</strong>
                  <ul>
                    <li>
                      Include a variety of fruits, vegetables, whole grains, and
                      lean proteins in your diet. Limit processed foods and
                      sugary beverages.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Regular Exercise:</strong>
                  <ul>
                    <li>
                      Aim for at least 30 minutes of moderate exercise most days
                      of the week. Find activities you enjoy, such as walking,
                      swimming, or yoga.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Stress Management:</strong>
                  <ul>
                    <li>
                      Practice relaxation techniques like deep breathing,
                      meditation, or mindfulness to reduce stress levels.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Hydration:</strong>
                  <ul>
                    <li>
                      Drink plenty of water throughout the day to stay hydrated
                      and support overall health.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Smoking Cessation:</strong>
                  <ul>
                    <li>
                      If you smoke, consider quitting. Seek support from
                      healthcare professionals and explore smoking cessation
                      programs.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default services;
