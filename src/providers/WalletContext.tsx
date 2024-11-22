import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supportedWallets, savedWalletSelectionKey } from "@/constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { checkCanConnect, getAssetsFromStakeAddress, getWalletExtensionStatus } from "@/utils/web3";

declare const window: any;

interface WalletContextValueProps {
  isConnected: boolean;
  wallet: any;
  address: string;
  networkId: number;
  stakeAddress: string;
  connectedWalletKey: string;
  connect: (walletKey: string) => Promise<boolean>;
  disconnect: () => void;
  getStakeAddress: () => void;
  adaBalance: string;
  assets: {};
  walletExtensions: {};
}

const walletContext = createContext<WalletContextValueProps>({
  isConnected: false,
  wallet: undefined,
  address: "",
  networkId: -1,
  stakeAddress: "",
  connectedWalletKey: "",
  connect: async () => false,
  disconnect: () => {},
  getStakeAddress: async () => {},
  adaBalance: "0",
  assets: {},
  walletExtensions: {},
});

const WalletContextProvider = ({ children }: any) => {
  const [walletExtensions, setWalletExtension] = useState({});
  const [wallet, setWallet] = useState<any>(undefined);
  const [address, setAddress] = useState("");
  const [stakeAddress, setStakeAddress] = useState("");
  const [networkId, setNetworkId] = useState(-1);
  const [adaBalance, setAdaBalance] = useState("0");
  const [assets, setAssets] = useState({});
  const [connectedWalletKey, setConnectedWalletKey] = useState("");

  const calculateBalances = async () => {
    if (stakeAddress.length > 0) {
      try {
        const { lovelace: newAdaBalance } =
          await getAssetsFromStakeAddress(stakeAddress);
        // setAssets(updatedAssets);
        setAdaBalance(newAdaBalance);
      } catch (err) {
        console.error(err);
        disconnect();
        // toast.error('This wallet has an issue.');
      }
    }
  };

    // calculate assets when stake address is changed
    useEffect(() => {
      if (stakeAddress.length > 0) {
        calculateBalances();
      } else {
      }
    }, [stakeAddress]);

  // update network id, and address when wallet is changed
  useEffect(() => {
    if (wallet) {
      if (
        !(
          typeof wallet.getNetworkId == "function" &&
          typeof wallet.getRewardAddresses == "function" &&
          typeof wallet.getChangeAddress == "function"
        )
      ) {
        // toast.error('This wallet has an issue.');
        disconnect();
        return;
      }
      wallet
        ?.getNetworkId()
        .then((nId: any) => {
          if (parseInt(nId) >= 0) {
            setNetworkId(nId);
          }
        })
        .catch((err: any) => {
          console.error(err);
          // toast.error(err?.message || "Couldn't get network Id.");
        });
      wallet
        ?.getRewardAddresses()
        .then((addresses: any) => {
          if (addresses && addresses?.length > 0) {
            setStakeAddress(addresses[0]);
          }
        })
        .catch((err: any) => {
          console.error(err);
          // toast.error(err?.message || "Couldn't get stake address.");
        });
      wallet
        ?.getChangeAddress()
        .then((data: any) => {
          setAddress(data);
        })
        .catch((err: any) => {
          console.error(err);
          // toast.error(err?.message || "Couldn't get change address.");
        });
    } else {
    }
  }, [wallet]);

  // getters
  const getStakeAddress = async () => {
    try {
      if (wallet) {
        const stakeAddresses = await wallet.getRewardAddresses();
        return stakeAddresses[0] || "";
      }
      return "";
    } catch (err) {
      throw err;
    }
  };

  // methods
  const connect = async (walletKey: string) => {
    try {
      const foundWallet = supportedWallets.find((e) => e.key == walletKey);
      // check supported
      if (!foundWallet) {
        throw new Error("This wallet is not supported.");
      }

      // check installed
      if (checkCanConnect(foundWallet.key)) {
        const connectedWallet = await window.cardano[walletKey].enable();
        if (connectedWallet) {
          setWallet(connectedWallet);
          setConnectedWalletKey(walletKey);
          window.localStorage.setItem(savedWalletSelectionKey, walletKey);
        }
        return true;
      } else {
        throw new Error("This Wallet extension not installed.");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const disconnect = () => {
    setWallet(undefined);
    setConnectedWalletKey("");
    setStakeAddress("");
    setAddress("");
    setNetworkId(-1);
    setAdaBalance("0");
    setAssets({});
    // window.localStorage.removeItem(appConstant.savedWalletSelectionKey);
  };

  const init = () => {
    if (!connect) {
      return;
    }
    // init wallet extension info.
    setWalletExtension(getWalletExtensionStatus());

    // restore saved connected wallet.
    const savedConnectedWalletKey =
      window.localStorage.getItem(savedWalletSelectionKey) || "";
    if (savedConnectedWalletKey?.length > 0) {
      setConnectedWalletKey(savedConnectedWalletKey);
      connect(savedConnectedWalletKey).catch((err) => {
        toast.error(err?.message || `Couldn't connect to wallet`);
      });
    }
  };

  useEffect(() => {
    if (!init) {
      return;
    }
    console.log("Wallet Init...");
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: WalletContextValueProps = {
    isConnected: wallet ? true : false,
    walletExtensions,
    wallet,
    address,
    networkId,
    stakeAddress,
    connectedWalletKey,
    connect,
    disconnect,
    getStakeAddress,
    assets,
    adaBalance,
  };

  return (
    <walletContext.Provider value={value}>{children}</walletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(walletContext);
};

export default  WalletContextProvider;
