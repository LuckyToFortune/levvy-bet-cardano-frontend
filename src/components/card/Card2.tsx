"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";
import * as Slider from "@radix-ui/react-slider";

interface Card2Props {
  imageURL: string;
  description: string;
  options: string[];
  infos: { [key: string]: string | undefined }[];
}

const Card2: React.FC<Card2Props> = ({
  imageURL,
  description,
  options,
  infos,
}) => {
  const [isBetting, setIsBetting] = useState(false);
  const [value, setValue] = useState<number>(100);
  const [order, setOrder] = useState(0);
  const [option, setOption] = useState("");

  const handleBetClick = (order = 0, option = "") => {
    setOrder(order);
    setOption(option);
    setIsBetting(true); // Show the second type of content
  };

  const handleCloseBetting = () => {
    setIsBetting(false); // Return to the first card
    setOrder(0);
    setOption("");
  };

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  const handleSubmit = () => {
    console.log("Run betting with value:", value, "ADA on option:", option);
  };

  const num = options.length;
  let renderContent = <></>;
  let renderFooter = <></>;

  if (num === 2) {
    renderContent = (
      <div className="flex flex-col p-4 overflow-auto hide-scrollbar">
        {infos.map((info, index) => (
          <div key={index} className="flex flex-row justify-between">
            {Object.entries(info).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-row justify-between items-center w-full"
              >
                <span className="font-bold">{key} :</span>
                <span className="ml-2">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    renderFooter = (
      <div
        className="flex flex-row gap-2 border-stone-900 px-4 py-2 border-t"
        style={{ minHeight: "56px" }}
      >
        <PrimaryButton
          classNames="rounded-full bg-green-400 w-full text-white text-lg px-6"
          onClick={() => handleBetClick(0, options[0])}
        >
          {options[0]}
        </PrimaryButton>
        <PrimaryButton
          classNames="rounded-full bg-rose-600 w-full text-white text-lg px-6"
          onClick={() => handleBetClick(1, options[1])}
        >
          {options[1]}
        </PrimaryButton>
      </div>
    );
  } else {
    renderContent = (
      <div className="flex flex-col p-4 h-48 overflow-auto hide-scrollbar">
        {options.map((option) => (
          <div className="flex flex-row justify-between items-center m-1">
            <label className="font-bold">{option}</label>
            <button
              className="bg-green-400 px-4 rounded-full w-fill text-base text-white"
              onClick={() => handleBetClick(0, option)}
            >
              Bet
            </button>
          </div>
        ))}
      </div>
    );

    renderFooter = (
      <div
        className="flex flex-col border-stone-900 px-4 py-2 border-t h-18 overflow-auto hide-scrollbar"
        style={{ minHeight: "60px" }}
      >
        {infos.map((info, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            {Object.entries(info).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-row justify-between items-center w-full"
              >
                <span className="font-bold">{key} :</span>
                <span className="ml-2">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (isBetting) {
    renderContent = (
      <div className="flex flex-row justify-between items-center p-8">
        <div className="flex items-center border-gray-500 bg-stone-900 px-4 py-2 border rounded-lg w-1/3 text-gray-400">
          <input
            value={value}
            type="number"
            placeholder="100"
            className="bg-stone-900 custom-number-input ml-2 w-full text-gray-200 outline-none"
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <span className="ml-4 text-lg material-icons-outlined">ADA</span>
        </div>
        <div>
          <Slider.Root
            className="relative flex items-center w-[300px] h-5 touch-none text- select-none"
            value={[value]}
            max={500}
            step={1}
            onValueChange={handleSliderChange}
          >
            <Slider.Track className="relative bg-stone-600 rounded-full h-[3px] grow">
              <Slider.Range className="absolute bg-amber-600 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block bg-white hover:bg-violet3 shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 rounded-[10px] size-5 focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </div>
    );
    renderFooter = (
      <div
        className="flex flex-row gap-2 border-stone-900 px-4 py-2 border-t"
        style={{ minHeight: "56px" }}
      >
        <PrimaryButton
          classNames={`rounded-full ${
            order === 0 ? "bg-green-400" : "bg-rose-600"
          } w-full text-white text-lg px-6`}
          onClick={handleSubmit}
        >
          Bet {option}
        </PrimaryButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-stretch border-gray-500 border rounded-xl w-full h-full overflow-hidden">
      <div className="z-1 sticky flex flex-row justify-between items-center gap-4 border-stone-900 hover:bg-transparent bg-opacity-50 p-2 border rounded-t-md w-full h-16 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <div className="flex rounded-md size-14">
            <Image
              src={imageURL}
              alt="Card2"
              width={100}
              height={100}
              className="rounded w-full size-14"
            />
          </div>
          <div className="flex items-start p-1">{description}</div>
        </div>
        {isBetting && (
          <div className="flex justify-center items-start bg-stone-900 mr-4 rounded text-stone-700 hover:text-stone-500 size-10">
            <button
              className="flex justify-center items-start px-2 rounded-full text-3xl"
              onClick={handleCloseBetting}
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {renderContent}
      {renderFooter}
    </div>
  );
};

export default Card2;
