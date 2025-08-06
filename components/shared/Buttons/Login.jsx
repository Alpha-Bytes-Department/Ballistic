import Link from "next/link";
import React from "react";

const Login = ({design = ""}) => {
  return <Link href="/login" className={`btn bg-success text-white ${design}`}>Login</Link>
};

export default Login;
