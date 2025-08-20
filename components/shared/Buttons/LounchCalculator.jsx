

import Link from "next/link";
import React from "react";

const LounchCalculator = ({design = ""}) => {
  return <Link href="/calculator" className={`btn ${design}`}>Lounch Calculator</Link>
};

export default LounchCalculator;
