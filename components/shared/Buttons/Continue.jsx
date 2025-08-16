import React from "react";

const Continue = ({design = ""}) => {
  return <button className={`btn bg-[#2C2C2C] text-white ${design}`}>Continue</button>;
};

export default Continue;
