import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row bg-[#e4f3e5] my-10 py-10 px-10 rounded relative overflow-hidden">
      <div className="space-y-5">
        <h1 className="text-xl lg:text-5xl">
          Precision{" "}
          <span className="text-red-500 font-extrabold tracking-tight font-klear-bold">
            Ballistics
          </span>
        </h1>
        <div className="flex relative">
          <Image
            width={120}
            height={35}
            alt="bullet"
            className="-rotate-90 absolute -left-12 top-10"
            src="/images/Bullet.png"
          />
          <div className="ms-10 space-y-5">
            <h2 className="text-xl lg:text-5xl">Real-Time Accuracy</h2>
            <p className="text-sm lg:text-base text-[#666666]">
              Get accurate drop charts based on your weapon, ammo, and current
              environment — right in your browser.
            </p>
          </div>
          <div className="w-40 h-40 absolute top-37 left-10">
            <Image alt="bullet vec" src="/images/bullet.svg" className="hover:text-red-700 cursor-pointer" width={290} height={60}/>
          </div>
        </div>
      </div>
      <Image className="" src="/images/HeliCupter.png" width={808} height={463} alt="helicapter" />
      <h1 className="text-[#E539350D] font-playfair-display-regular absolute right-0 -bottom-13 xl:-bottom-36 text-[7rem] md:-bottom-24 md:text-[15rem] xl:text-[20rem] tracking-tight">
        Ballestic
      </h1>
    </div>
  );
};

export default Banner;
