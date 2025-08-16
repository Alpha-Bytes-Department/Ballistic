import Link from "next/link";
import React from "react";

const Signup = ({design = ""}) => {
  return <Link href="auth/signup" className={`btn bg-[#2C2C2C] text-white ${design}`}>Sign Up</Link>;
};

export default Signup;