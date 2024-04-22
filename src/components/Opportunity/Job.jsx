import React from "react";

function Job() {
  const jobClick = () => {
    console.log("full will");
  };
  return (
    <div>
      <ul>
        <li onClick={jobClick}>grains</li>
      </ul>
    </div>
  );
}

export default Job;
