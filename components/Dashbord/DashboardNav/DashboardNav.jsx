"use client";
import Logout from "@/components/shared/Buttons/Logout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGun, FaUser } from "react-icons/fa6";
import { FiLogOut, FiTarget } from "react-icons/fi";
import { MdSaveAs } from "react-icons/md";

const DashboardNav = () => {
  return (
    <div className="flex h-screen bg-black text-white w-[250px]">
      <div className="flex flex-col justify-between items-center w-full">
        <div className="m-5">
          <div>
            <Image width={180} height={100} alt="logo" src={"/logo/logo.png"} />
            <nav className="flex flex-col gap-5 mt-8">
              <div className="flex gap-3">
                <FaUser className="text-lg text-white" />
                <Link href={"/dashboard/profile"} className="text-white">
                  Profile
                </Link>
              </div>
              <div className="flex gap-3">
                <FaGun className="text-lg text-white" />
                <Link href={"/dashboard/guns"} className="text-white">
                  Guns
                </Link>
              </div>
              <div className="flex gap-3">
                <FiTarget className="text-lg text-white" />
                <Link href={"/dashboard/scopes"} className="text-white">
                  Scopes
                </Link>
              </div>
              <div className="flex gap-3">
                <MdSaveAs className="text-lg text-white" />
                <Link href={"/dashboard/saved_info"} className="text-white">
                  Saved info
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="mb-10 w-full border-t-2 border-white">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
