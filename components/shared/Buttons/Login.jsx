import Link from "next/link";
import React from "react";

const Login = ({design = ""}) => {
  return <Link href="/auth/login" className={`btn bg-[#3d8c40] text-white ${design}`}>Login</Link>
};

export default Login;
