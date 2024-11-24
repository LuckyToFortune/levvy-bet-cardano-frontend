"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Holder {
  imageUrl: string;
  userName: string;
  shares: string;
  type: string;
}

interface HolderSectionProps {
  holders: Holder[];
}

const HolderSection: React.FC<HolderSectionProps> = ({ holders }) => {
  const uniqueTypes = Array.from(new Set(holders.map((holder) => holder.type)));

  const [activeTab, setActiveTab] = useState<string>(uniqueTypes[0]);

  const holdersByType: Record<string, Holder[]> = uniqueTypes.reduce(
    (acc, type) => {
      acc[type] = holders.filter((holder) => holder.type === type);
      return acc;
    },
    {} as Record<string, Holder[]>
  );

  return (
    <div className="rounded-lg w-full">
      <div className="flex justify-between items-center border-gray-700 mb-4 pb-2 border-b">
        <div className="font-bold text-lg text-white">Top Holders</div>
        <div className="flex space-x-6">
          {uniqueTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`${
                activeTab === type
                  ? "text-orange-500 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Holders
            </button>
          ))}
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {holdersByType[activeTab]?.map((holder, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-stone-800 p-3 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <Image
                src={holder.imageUrl}
                alt={holder.userName}
                width={40}
                height={40}
                className="rounded-full size-12"
              />
              <span className="font-semibold text-white">
                {holder.userName}
              </span>
            </div>
            <span className="font-bold text-green-500">{holder.shares}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolderSection;
