import Link from "next/link";
import React from "react";

const Signup = ({design = ""}) => {
  return <Link href="auth/signup" className={`btn bg-black text-white ${design}`}>Sign Up</Link>;
};

export default Signup;