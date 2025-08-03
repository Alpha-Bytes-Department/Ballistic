import Link from "next/link";
import React from "react";
import logo from "@/public/logo/logo.png";
import Image from "next/image";
import NavPath from "./NavPath";
import SecondNav from "./SecondNav";

const Navbar = () => {

    

  return (
    <nav className="flex flex-col gap-10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavPath/>
            </ul>
          </div>
          <Link href="/" className=" hidden lg:block">
            <Image alt="logo" width={200} height={50} src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10">
            <NavPath/>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </div>
      </div>
      <SecondNav/>
    </nav>
  );
};

export default Navbar;


