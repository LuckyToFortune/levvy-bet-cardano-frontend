"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WalletConnectButton from "../button/ConnectWalletButton";
import PrimaryButton from "../button/PrimaryButton";
import { CiUser } from "react-icons/ci";
import { VscBellDot } from "react-icons/vsc";

const MenuItems = [
  {
    value: "Loans",
    link: "",
  },
  {
    value: "Manage",
    link: "",
  },
  {
    value: "Stats",
    link: "",
  },
  {
    value: "Bet",
    link: "",
  },
  {
    value: "More",
    link: "",
  },
];

interface LandingHeaderProps {
  openModal: () => void;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ openModal }) => {
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div>
      <div className="top-0 fixed flex justify-center bg-stone-900 w-full font-semibold text-gray-400">
        <div className="flex justify-between w-full container">
          <Link className="md:block hidden p-4" href={"/"}>
            <Image src="/icons/logo.svg" width={150} height={150} alt="Logo" />
          </Link>
          <div className="md:block hidden mr-20 p-6">
            <div className="flex items-center gap-8">
              {MenuItems.map((item, index) => (
                <Link key={index} className="hover:text-white" href={item.link}>
                  {item.value}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:block hidden mr-20 p-4">
            <div className="flex items-center gap-8">
              <PrimaryButton
                classNames="rounded-full"
                onClick={handleOpenModal}
              >
                Create Bet
              </PrimaryButton>

              <div className="flex justify-center items-center border-orange-500 border rounded-full size-10">
                <VscBellDot className="text-2xl text-orange-500" />
              </div>

              <WalletConnectButton />

              <div className="flex justify-center items-center border-orange-500 border rounded-full size-10">
                <CiUser className="text-2xl text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
