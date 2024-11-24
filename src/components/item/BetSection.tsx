"use client";
import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";
import { toast } from "react-toastify";

const userName = "Ronaldo";
const userImageUrl = "/img/Ronaldo.png";

interface BetSectionProps {
  options: string[];
}

const BetSection: React.FC<BetSectionProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSliderChange = (newValue: number[]) => {
    setAmount(newValue[0]);
  };

  const handleSubmit = () => {
    toast.success(`Bet ${amount} ADA on ${selectedOption}`);
    console.log("Confirmed Bet", {
      option: selectedOption,
      amount,
    });
  };

  return (
    <div className="bg-stone-900 p-6 rounded-2xl w-full">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={userImageUrl}
          alt={userName}
          width={50}
          height={50}
          className="rounded-full size-14"
        />
        <div className="font-bold text-white">{userName}</div>
      </div>

      <label className="block m-2 font-bold text-white">Outcome</label>

      <div className="flex gap-4 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`flex-1 py-2 rounded-full ${
              selectedOption === option
                ? "bg-green-500 text-white font-bold"
                : "bg-stone-800 text-gray-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="border-stone-700 border-b"></div>

      <label className="block m-2 font-bold text-white">Amount</label>
      <div className="flex justify-between items-center gap-4 flew-row">
        <div className="flex mb-6 w-1/3">
          <div className="flex items-center border-gray-600 bg-stone-900 p-3 border rounded-2xl">
            <input
              type="number"
              className="bg-transparent w-full text-white outline-none"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
            <span className="ml-2 text-gray-400">ADA</span>
          </div>
        </div>

        <div className="flex mb-6 w-2/3">
          <Slider.Root
            className="relative flex items-center w-full h-5 touch-none"
            value={[amount]}
            max={500}
            step={1}
            onValueChange={handleSliderChange}
          >
            <Slider.Track className="relative bg-stone-600 rounded-full h-[3px] grow">
              <Slider.Range className="absolute bg-amber-600 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block bg-white hover:bg-gray-300 shadow-lg rounded-full w-4 h-4 focus:outline-none"
              aria-label="Amount"
            />
          </Slider.Root>
        </div>
      </div>

      {amount > 0 && (
        <div className="border-stone-700 mb-6 pt-4 border-t">
          <div className="flex justify-between mb-2 text-gray-400">
            <span>Network Fee</span>
            <span>0.57 ADA</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-400">
            <span>Platform Fee</span>
            <span>0.23 ADA</span>
          </div>
          <div className="flex justify-between font-bold text-green-500">
            <span>Potential Return</span>
            <span>{(amount * 2).toFixed(2)} ADA (200%)</span>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <PrimaryButton
          classNames={`w-full py-3 rounded-full ${
            amount > 0
              ? "bg-orange-500 text-white"
              : "bg-stone-700 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          disabled={amount === 0}
        >
          Confirm Bet
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BetSection;
