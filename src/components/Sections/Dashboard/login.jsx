import React, { useRef, useState } from "react";

function Login() {
  const swipeRef = useRef(null);
  const { isHidden, setIsHidden } = useState();
  const handleSwipe = () => {
    // swipeRef.current.style.position = "relative";
    setIsHidden(true);

    setTimeout(() => {
      setIsHidden(true);
    }, 500);
  };
  return (
    <div>
      <div
        className={`bg-[#000000d3] swipe flex items-center justify-center h-svh w-full fixed ${
          isHidden ? "hidden" : ""
        }`}
        ref={swipeRef}
      >
        <div className="bg-[#e3efff] w-[28rem] max-sm:w-[23rem] h-[15rem] rounded-xl">
          <div className="admin py-12 px-6 sm:px-8">
            <h1 className="font-[Oswald] text-3xl text-[#152456] font-bold ">
              <strong className="font-[Oswald]">Welcome,</strong> Admin
            </h1>
            <p className="font-medium py-2 text-lg">
              Input name for proper identification
            </p>
            <div className="pt-4 rounded-md w-[20rem] flex h-[4.5rem] ">
              <input
                type="text"
                className="w-full h-full outline-none pl-4 text-lg"
                placeholder="Enter Your Name"
              />
              <button className="bg-[#152456] w-[4rem]" onClick={handleSwipe}>
                <i class="text-[#fff] text-lg fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
