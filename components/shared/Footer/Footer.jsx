import React from "react";
import Image from "next/image";
import Newslatter from "./Newslatter";

const Footer = () => {
  return (
    <footer className="bg-[#e4f3e5] text-black">
      <div className="footer sm:footer-horizontal p-10">
        <nav className="space-y-3">
          <Image width={200} height={50} alt="logo" src='/logo/logo.png' />
          <div className="max-w-80">
            The purpose of a FAQ is generally to provide information on frequent questions or concerns.
          </div>
          <div className="flex gap-2">
            <Image width={30} height={30} src='/icons/tweeter.png' alt="tweeter"/>
            <Image width={30} height={30} src='/icons/facebook.png' alt="facebook"/>
            <Image width={30} height={30} src='/icons/insta.png' alt="insta"/>
            <Image width={30} height={30} src='/icons/linkedin.png' alt="linkdin"/>
          </div>
        </nav>
        <nav className="space-y-3">
          <h6 className=" font-bold">Company</h6>
          <a className="link link-hover">Feature</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="space-y-3">
          <h6 className=" font-bold">Help</h6>
          <a className="link link-hover">Customer Support</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <Newslatter/>
      </div>
      <div className="text-center py-3 font-klear-light">
        © Copyright 2025, All Rights Reserved by Klear
      </div>
    </footer>
  );
};

export default Footer;
