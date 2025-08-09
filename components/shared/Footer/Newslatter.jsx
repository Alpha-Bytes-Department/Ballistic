"use client"
import React from "react";


const Newslatter = () => {
  const handleSubmit = (event)=>{
    event.preventDefault();
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <h6 className=" font-bold">Subscribe to Newsletter</h6>
      <fieldset className="w-80">
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item focus-within:border-0 border-0 focus:outline-0 bg-white text-black"
          />
          <button className="btn bg-[#3d8c40] text-white">Subscribe</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Newslatter;
