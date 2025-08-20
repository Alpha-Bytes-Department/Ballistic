import BallisticCalculator from "@/components/Calculator/BallisticCalculator/BallisticCalculator";
import Login from "@/components/shared/Buttons/Login";
import Signup from "@/components/shared/Buttons/Signup";
import Image from "next/image";
import Features from "@/components/Features/Features";

export default function Home() {

  
  return (
    <div>
      <div className="flex flex-col-reverse xl:flex-row gap-20 my-10">
        <BallisticCalculator design="w-full xl:w-9/12"/>
        <div className="flex flex-col gap-5 w-full xl:w-3/12">
        <Image alt="bullet" src="/images/bullet.png" width={170} height={55} className="mx-auto"/>
          <div className="text-xl bg-[#5c5c5b] py-3 text-center text-white">Please Login</div>
            <p>Register to save your loads for viewing at a later time.</p>
            <Login design="bg-black text-white"/>
            <Signup/>
        </div>
      </div>
      <Features/>
    </div>
  );
}
