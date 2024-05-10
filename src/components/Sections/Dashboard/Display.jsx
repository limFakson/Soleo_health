import React, { useRef, useEffect, useState } from "react";
import "./Dashboard.css";

function Display() {
  const apiUrl = import.meta.env.VITE_API_LINK;
  const [data, setData] = useState([]);
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
  const dataObject = [...data];
  //   console.log(dataObject[3].data);
  const handleNameClick = () => {
    const id = e.target.getAttribute("data-id");
    console.log("clicked ID:", id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  data.forEach((item) => {
    item.id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
  });
  setData(dataSet);

  return (
    <div className="bg-[#e3efff]">
      <header className="p-8">
        <nav></nav>
        <h1 className="font-[Oswald] text-3xl text-[#152456] font-bold ">
          <strong className="font-[Oswald]">Welcome,</strong> Admin
        </h1>
      </header>
      <main>
        <div className="sm:p-6 lg:px-12 p-2 text-[#152456] overflow-x-scroll">
          <h2 className="pb-4 text-2xl font-[Oswald]">Submitted Details </h2>
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
                  <td onClick={(e) => handleNameClick(e)} data-id={item.id}>
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
      </main>
    </div>
  );
}

export default Display;
