import React from "react";

const Continue = ({design = ""}) => {
  return <button className={`btn bg-success text-white ${design}`}>Continue</button>;
};

export default Continue;
