import Image from "next/image";
import React from "react";
import LounchCalculator from "../shared/Buttons/LounchCalculator";

const Banner = () => {
  return (
    <div className="bg-[url('/images/banner.jpg')] w-full bg-no-repeat bg-cover bg-center h-[85vh] shadow-[0_0_10px_100px_#00000040_inset]">
      <div className="space-y-5 text-white flex items-center h-full mx-10">
        <div>
          <h1 className="text-xl lg:text-5xl">
            Precision{" "}
            <span className="text-green-500 tracking-tight font-klear-bold">
              Ballistics
            </span>
          </h1>
          <div className="flex flex-col relative">
            <Image
              width={120}
              height={35}
              alt="bullet"
              className="-rotate-90 absolute -left-12 top-10"
              src="/images/Bullet.png"
            />
            <div className="ms-10 space-y-5">
              <h2 className="text-xl lg:text-5xl">Real-Time Accuracy</h2>
              <p className="text-sm lg:text-base">
                Get accurate drop charts based on your weapon, ammo, and current
                environment — right in your browser.
              </p>
            </div>
            <div className="mt-9">
              <LounchCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
