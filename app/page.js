import Banner from "@/components/LandingPage/Banner";
import BallisticCalculator from "@/components/shared/BallisticCalculator/BallisticCalculator";
import Login from "@/components/shared/Buttons/Login";
import Signup from "@/components/shared/Buttons/Signup";
import bullet from "@/public/images/bullet.png"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="flex gap-20 my-10">
        <BallisticCalculator/>
        <div className="flex flex-col gap-5 w-3/12">
        <Image alt="bullet" src={bullet} width={170} height={50} className="mx-auto"/>
          <div className="text-xl bg-primary py-3 text-center">Please Login</div>
            <p>Register to save your loads for viewing at a later time.</p>
            <Login/>
            <Signup/>
        </div>
      </div>
    </div>
  );
}
