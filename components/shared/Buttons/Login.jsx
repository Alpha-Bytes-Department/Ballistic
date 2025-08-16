import Link from "next/link";
import React from "react";

const Login = ({design = ""}) => {
  return <Link href="/auth/login" className={`btn bg-[#2C2C2C] text-white ${design}`}>Login</Link>
};

export default Login;
