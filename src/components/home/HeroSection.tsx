import React from "react";
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="relative border-gray-500 m-4 p-4 border rounded-xl w-full h-96 overflow-hidden">
      <div className="relative rounded-md w-full h-full overflow-hidden">
        <Image src="/img/card1.png" alt="Background" fill className="rounded" />
      </div>

      <div className="bottom-10 left-14 absolute space-x-4">
        <PrimaryButton classNames="rounded-full bg-green-400 text-white text-lg px-6 py-2">
          Bet Yes
        </PrimaryButton>
        <PrimaryButton classNames="rounded-full bg-rose-500 text-white text-lg px-6 py-2">
          Bet No
        </PrimaryButton>
      </div>
    </div>
  );
};

export default HeroSection;
