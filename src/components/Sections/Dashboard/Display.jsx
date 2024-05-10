import React, { useRef, useEffect, useState } from "react";
import "./Dashboard.css";
import logo from "../../../assets/Soleo_Health_logo.png";
import { Link } from "react-router-dom";

function Display() {
  const apiUrl = import.meta.env.VITE_API_LINK;
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataSet = await response.json();
      setData(dataSet);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchItem = async (id) => {
    console.log();
    try {
      let response = await fetch(`${apiUrl}${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataSet = await response.json();
      setInfo(dataSet);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const dataObject = [...data];
  //   console.log(dataObject[3].data);
  const handleNameClick = (e) => {
    let id = e.target.getAttribute("data-id");
    // console.log("clicked ID:", id);
    fetchItem(id);
  };

  // console.log(item.data.name);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#e3efff]">
      <header className="p-4">
        <div className="nav px-8 pb-6 ">
          <Link to="/">
            <div className="logo w-[150px] ">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
          </Link>
        </div>
        <nav></nav>
      </header>
      <main>
        <div className="pl-10">
          <h1 className="font-[Oswald] text-4xl lg:text-5xl text-[#152456] font-bold ">
            Welcome, Admin
          </h1>
        </div>
        <div className="sm:p-6 lg:px-14 p-4 text-[#152456]">
          <h2 className="pb-4 text-2xl font-[Oswald]">Submitted Details </h2>
          <div className="overflow-x-scroll">
            <table className="">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Employment Status</th>
                  <th>Job</th>
                  <th>Cover Letter</th>
                </tr>
              </thead>
              <tbody>
                {dataObject.map((item, index) => (
                  <tr key={index}>
                    <td
                      onClick={(e) => handleNameClick(e)}
                      data-id={item.id}
                      className="point hover"
                    >
                      {item.data.name}
                    </td>
                    <td>{item.data.email}</td>
                    <td>{item.data.phone}</td>
                    <td>
                      {item.data.locationData.address},
                      {item.data.locationData.state},
                      {item.data.locationData.country}
                    </td>
                    <td>{item.data.employmentStatus}</td>
                    <td>{item.data.job}</td>
                    <td>{item.data.letter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {info && (
          <div className="hidden relativex pt-4">
            <div className="personal">
              <div className="Fullname">
                <h1>Fullname: {info.data.name}</h1>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Display;
