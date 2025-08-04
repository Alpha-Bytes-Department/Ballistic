import React from "react";

const Login = ({design = ""}) => {
  return <button className={`btn bg-success text-white ${design}`}>Login</button>;
};

export default Login;
