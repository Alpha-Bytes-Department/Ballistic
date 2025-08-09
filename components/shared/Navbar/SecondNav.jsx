import React from "react";

const SecondNav = () => {
  return (
    <div className="flex justify-between flex-col gap-3 md:gap-0 md:flex-row mx-3">
      <div className="space-x-2.5 lg:space-x-5">
        <button className="btn bg-transparent btn-md px-2 lg:px-5 rounded-[8px] border-[1px] border-black text-black">
          Bullet
        </button>
        <button className="btn bg-transparent btn-md px-2 lg:px-5 rounded-[8px] border-[1px] border-black text-black">
          Gun
        </button>
        <button className="btn bg-transparent btn-md px-2 lg:px-5 rounded-[8px] border-[1px] border-black text-black">
          New
        </button>
        <button className="btn bg-transparent btn-md px-2 lg:px-5 rounded-[8px] border-[1px] border-black text-black">
          Scope
        </button>
        <button className="btn bg-transparent btn-md px-2 lg:px-5 rounded-[8px] border-[1px] border-black text-black">
          Calculator
        </button>
      </div>
      <div>
        <label className="input border-black focus-within:border-0 w-full lg:w-[30vw] rounded-[8px] bg-white">
          <input type="search"  placeholder="Search" className="text-black" />
          <svg
            className="h-[1em] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default SecondNav;
