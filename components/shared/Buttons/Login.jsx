import Link from "next/link";
import React from "react";

const Login = ({design = ""}) => {
  return <Link href="/auth/login" className={`btn ${design}`}>Login</Link>
};

export default Login;
