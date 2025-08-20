import Link from "next/link";
import React from "react";

const Continue = ({design = ""}) => {
  return <Link href={"/contact-us"} className={`btn bg-white text-black ${design}`}>Continue</Link>
};

export default Continue;
