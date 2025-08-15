import Banner from "@/components/LandingPage/Banner";
import BallisticCalculator from "@/components/Calculator/BallisticCalculator/BallisticCalculator";
import Login from "@/components/shared/Buttons/Login";
import Signup from "@/components/shared/Buttons/Signup";
import Image from "next/image";
import Features from "@/components/Features/Features";
import BannerUpdate from "@/components/LandingPage/BannerUpdate";

export default function Home() {

  
  return (
    <div>
      <BannerUpdate/>
      <div className="flex flex-col-reverse xl:flex-row gap-20 my-10">
        <BallisticCalculator design="w-full xl:w-9/12"/>
        <div className="flex flex-col gap-5 w-full xl:w-3/12">
        <Image alt="bullet" src="/images/bullet.png" width={170} height={55} className="mx-auto"/>
          <div className="text-xl bg-[#e4f3e5] py-3 text-center">Please Login</div>
            <p>Register to save your loads for viewing at a later time.</p>
            <Login/>
            <Signup/>
        </div>
      </div>
      <Features/>
    </div>
  );
}
