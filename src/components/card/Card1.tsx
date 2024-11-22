import React from "react";
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";

interface Card1Props {
  imageURL: string;
  description: string;
  buttonText: string;
}

const Card1: React.FC<Card1Props> = ({ imageURL, description, buttonText }) => {
  return (
    <div className="relative border-gray-500 p-2 border rounded-xl w-full h-full overflow-hidden">
      <div className="relative rounded-md w-full h-3/5 overflow-hidden">
        <Image src={imageURL} alt="Card1" fill className="rounded" />
      </div>
      <div className="p-1">{description}</div>

      <div className="right-1 bottom-1 left-0 absolute p-2 w-full">
        <PrimaryButton classNames="rounded-full bg-amber-600 w-full text-white text-lg px-6">
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Card1;
