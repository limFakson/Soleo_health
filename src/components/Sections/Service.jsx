import React, { useRef } from "react";

function Service() {
  const boy = useRef();
  const girl = useRef();
  const featuredCLick = () => {
    if (boy.current) {
      boy.current.style.display = "none";
    }
    console.log("clicked");
  };

  return (
    <div>
      <hr className="section_hr" />
      <section className="my-8" id="services">
        <div className="m-4">
          <h1 className="text-center text-4xl font-semibold font-[Oswald] text-[#152456] ">
            Explore Our Pharmacy
          </h1>
        </div>
        <div className="sm:flex sm:gap-12 lg:ml-6 sm:h-[420px] lg:h-[22rem]">
          <div className="py-4">
            <ul className="border-b px-2 border-[#152456] ">
              <li
                className="point border-b-2 border-[#152456] border-r px-2"
                onClick={featuredCLick}
              >
                Featured Services
              </li>
            </ul>
          </div>
          <div className="py-9">
            <div ref={boy} className="block">
              <h1>blck boy</h1>
            </div>
            <div ref={girl} className="hidden">
              <h1>black girls</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
