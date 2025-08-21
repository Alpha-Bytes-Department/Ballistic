import React from "react";
import Image from "next/image";

const Features = ({design = ""}) => {
  return (
    <div className={`space-y-5 ${design}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src="/images/Bullet.png"
              width={170}
              height={50}
              alt="bullet"
            />
          </div>
          <h1 className="text-2xl font-bold">Feature</h1>
          <div>
            <Image
              src="/images/Bullet.png"
              width={170}
              height={50}
              alt="bullet"
              className="rotate-180"
            />
          </div>
        </div>
        <h1>Treating all skin co</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-12 lg:gap-20 mx-auto">
        <div className="w-[424px] h-[424px] relative flex flex-col items-center">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/feature1.jpg"
              alt="feature1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-20 w-20 -mt-10 rounded-full bg-[#2C2C2C] border-8 border-white text-white flex justify-center items-center text-xl font-bold z-10">
            <span>1.</span>
          </div>
          <div className="text-center px-2">
            <h1 className="text-lg font-semibold mt-2">
              Real-Time Environmental Data
            </h1>
            <p className="text-sm mt-1">
              Automatically pulls local wind, temperature, and altitude for
              hyper-accurate results.
            </p>
          </div>
        </div>

        <div className="w-[424px] h-[424px] relative flex flex-col items-center">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/feature2.jpg"
              alt="feature2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-20 w-20 -mt-10 rounded-full bg-[#2C2C2C] border-8 border-white text-white flex justify-center items-center text-xl font-bold z-10">
            <span>2.</span>
          </div>
          <div className="text-center px-2">
            <h1 className="text-lg font-semibold mt-2">
              Custom Weapon & Ammo Profiles
            </h1>
            <p className="text-sm mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="w-[424px] h-[424px] relative flex flex-col items-center">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/feature3.jpg"
              alt="feature3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-20 w-20 -mt-10 rounded-full bg-[#2C2C2C] border-8 border-white text-white flex justify-center items-center text-xl font-bold z-10">
            <span>3.</span>
          </div>
          <div className="text-center px-2">
            <h1 className="text-lg font-semibold mt-2">
              Ballistics Calculator
            </h1>
            <p className="text-sm mt-1">
              Uses physics-based calculations to ensure real-world accuracy, no
              fluff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
