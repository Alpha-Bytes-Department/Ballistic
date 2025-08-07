import React from "react";

const Continue = ({design = ""}) => {
  return <button className={`btn bg-[#3d8c40] text-white ${design}`}>Continue</button>;
};

export default Continue;
