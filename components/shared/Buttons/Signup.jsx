import Link from "next/link";
import React from "react";

const Signup = ({design = ""}) => {
  return <Link href="/signup" className={`btn bg-success text-white ${design}`}>Sign Up</Link>;
};

export default Signup;