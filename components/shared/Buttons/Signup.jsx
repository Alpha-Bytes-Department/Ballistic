import Link from "next/link";
import React from "react";

const Signup = ({design = ""}) => {
  return <Link href="/signup" className={`btn bg-[#3d8c40] text-white ${design}`}>Sign Up</Link>;
};

export default Signup;