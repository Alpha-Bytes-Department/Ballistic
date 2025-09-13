import BallisticCalculator from "@/components/Calculator/BallisticCalculator/BallisticCalculator";
import Features from "@/components/Features/Features";
import Graph from "@/components/HomePage/GraphAndChart/Graph";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col-reverse xl:flex-row gap-20 my-10">
        <BallisticCalculator design="w-full xl:w-9/12"/>
        <div className="flex flex-col gap-5 w-full xl:w-3/12">
            <Image alt="bullet" src="/images/Bullet.png" width={170} height={55} className="mx-auto"/>
            <div className="justify-items-center">
                <Graph/>
            </div>
        </div>
      </div>
      <Features/>
    </div>
  );
};

export default page;
