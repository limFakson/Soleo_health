import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Soleo_Health_logo.png";
import "../Sections/Section.css";

function Footer() {
  return (
    <div>
      <section id="footer" className="bg-[#fff] h-[18rem] grid px-8 sm:px-16 ">
        <div className="flex items-start justify-center sm:p-4 ">
          <Link to="/">
            <div className="nav w-[150px] point ">
              <img src={logo} alt="" className="w-full" />
            </div>
          </Link>
        </div>
        <div className="caption justify-self-center self-end pb-8 ">
          <p className="sm:text-sm text-[10px] text-[#152456] ">
            Copyright © 2023 build with Soleo Health. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
