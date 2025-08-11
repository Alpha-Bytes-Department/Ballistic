"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap h-full">
      <div className="bg-[#dae9db] rounded p-2">
        <Image src="/logo/logo.png" alt="logo" width={246} height={99} />
      </div>
      <div className="bg-[#dae9db] p-8 rounded flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <h3>
            Old User?{" "}
            <Link href="/auth/signup" className="text-[#63a065]">
              Login
            </Link>
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <label className="flex flex-col" htmlFor="email">
              <h1>Frist Name</h1>
              <div className="flex border gap-2 rounded p-2 items-center">
                <input
                  className="focus:outline-0 flex-grow min-w-0"
                  type="text"
                  name="calibar"
                  id="calibar"
                />
              </div>
            </label>
            <label className="flex flex-col" htmlFor="email">
              <h1>Last name</h1>
              <div className="flex border gap-2 rounded p-2 items-center">
                <input
                  className="focus:outline-0 flex-grow min-w-0"
                  type="text"
                  name="calibar"
                  id="calibar"
                />
              </div>
            </label>
          </div>
          <label className="flex flex-col" htmlFor="email">
            <h1>Email Address</h1>
            <div className="flex border gap-2 rounded p-2 items-center">
              <input
                className="focus:outline-0 flex-grow min-w-0"
                type="text"
                name="calibar"
                id="calibar"
              />
            </div>
          </label>
          <label className="flex flex-col" htmlFor="email">
            <h1>Phone</h1>
            <div className="flex border gap-2 rounded p-2 items-center">
              <PhoneInput
               country={'us'}
               inputStyle={{width: "100%",border:"none", backgroundColor: "transparent"}}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
            </div>
          </label>
          <label className="flex flex-col" htmlFor="email">
            <div className="flex justify-between">
              <h1>Password</h1>
              <p><FaEyeSlash className="inline"/> hide</p>
            </div>
            <div className="flex border gap-2 rounded p-2 items-center">
              <input
                className="focus:outline-0 flex-grow min-w-0"
                type="text"
                name="calibar"
                id="calibar"
              />
            </div>
          </label>
          <div className="flex my-2">
            <Link
              href="/auth/login2"
              className="flex gap-2 bg-[#3d8c40] text-white p-3 rounded items-center justify-center ms-auto"
            >
              Sign in <FaArrowCircleRight />
            </Link>
          </div>
        </div>
        <h1 className="text-center">Or</h1>
        <div className="flex flex-col gap-3">
          <button className="p-3 border rounded-4xl cursor-pointer">
            <FcGoogle className="inline text-xl" />
            Continue with Google
          </button>
          <button className="p-3 border rounded-4xl cursor-pointer">
            <FaApple className="inline text-xl" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
