import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap h-full">
      <div className="bg-[#dae9db] rounded p-2">
        <Image src="/logo/logo.png" alt="logo" width={246} height={99} />
      </div>
      <div className="bg-[#dae9db] p-8 rounded flex flex-col gap-10">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <h3>
            New User?{" "}
            <Link href="/auth/signup" className="text-[#63a065]">
              Create an account
            </Link>
          </h3>
        </div>
        <div>
          <label className="flex flex-col" htmlFor="email">
            <h1 className="font-semibold">Email Address</h1>
            <div className="flex border gap-3 rounded p-2 items-center">
              <input
                className="focus:outline-0 flex-grow min-w-0"
                type="text"
                name="calibar"
                id="calibar"
                placeholder="abcd12@gmail.com"
              />
            </div>
          </label>
          <div className="flex my-2">
            <Link
              href="/auth/login2"
              className="flex gap-2 bg-[#2C2C2C] text-white p-3 rounded items-center justify-center ms-auto"
            >
              Next <FaArrowCircleRight />
            </Link>
          </div>
        </div>
        <h1 className="text-center">Or</h1>
        <div className="flex flex-col gap-3">
            <button className="p-3 border rounded-4xl cursor-pointer"><FcGoogle className="inline text-xl"/>Continue with Google</button>
            <button className="p-3 border rounded-4xl cursor-pointer"><FaApple className="inline text-xl"/>Continue with Apple</button>
        </div>
        <p className="text-[#63a065] mt-10">Get help signing in</p>
      </div>
    </div>
  );
};

export default Login;
