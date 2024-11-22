import { useDispatch, useSelector } from "react-redux";
import { supportedWallets } from "@/constant";
import { useWallet } from "@/providers/WalletContext";
import { setWalletConnectModalState } from "@/store/modalSlice";
import React from "react";
import Image from "next/image";

const WalletConnectModal = () => {
  const {
    connect,
  } = useWallet();

  const { walletConnectModalState } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setWalletConnectModalState(false));
  };

  const handlePreventCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const handleConnectWallet = async (walletKey: string) => {
    const done = await connect(walletKey);
    if (done) dispatch(setWalletConnectModalState(false));
  };

  return walletConnectModalState ? (
    <div
      className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-transparent text-black"
      onClick={handleCloseModal}
    >
      <div
        className="flex h-fit w-[30rem] flex-col items-center gap-3 rounded-[4rem] bg-black p-10 bg-opacity-20 border-primary border-2"
        onClick={(e) => handlePreventCloseModal(e)}
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="float-left text-2xl font-semibold">
            <span className="text-primary">Select</span> Wallet
          </h1>
          <div
            className="float-right text-xl cursor-pointer"
            onClick={handleCloseModal}
          >
            ⨉
          </div>
        </div>
        <div className="mt-8 mx-auto flex w-4/5 flex-col justify-center gap-6 pt-4">
          {supportedWallets.map((item) => (
            <div
              className="flex w-fit items-center gap-4 cursor-pointer hover:scale-105 duration-500"
              key={item.key}
              onClick={() => handleConnectWallet(item.key)}
            >
              <Image src={`img/wallet/${item.icon}`} className="h-12 w-12" width={12} height={12} alt="wallet icon" />
              <div className="text-lg">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default WalletConnectModal;
