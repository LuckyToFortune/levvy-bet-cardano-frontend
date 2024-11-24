import React from "react";
import Image from "next/image";

interface TitleSectionProps {
  imageUrl: string;
  title: string;
  volume: string;
  date: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  imageUrl,
  title,
  volume,
  date,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-start gap-6">
        <div className="flex size-20">
          <Image
            src={imageUrl}
            alt="image"
            width={100}
            height={100}
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <h1 className="font-bold text-2xl text-white">{title}</h1>
          </div>
          <div className="flex flex-row justify-between gap-4 text-gray-400">
            <p>
              Date : <span className="font-medium">{date}</span>
            </p>
            <p>
              Volume : <span className="font-medium">{volume}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
