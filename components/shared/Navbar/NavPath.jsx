"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



let navData = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/calculator",
    name: "Calculator",
  },
  {
    path: "/features",
    name: "Features",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
];









const NavPath = () => {
  const pathname = usePathname()
  return (
    <>
      {navData?.map((data, index) => (
        <li key={index}>
          <Link
            className={
              pathname === data.path
                ? `border-b-2 border-b-[#3D8C40]`
                : ""
            }
            href={data?.path}
          >
            {data?.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavPath;

