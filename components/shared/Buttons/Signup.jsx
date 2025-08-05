import React from "react";

const Signup = ({design = ""}) => {
  return <button className={`btn bg-success text-white ${design}`}>Sign Up</button>;
};

export default Signup;