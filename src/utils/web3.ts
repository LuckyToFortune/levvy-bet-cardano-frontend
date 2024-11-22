import * as L from "lucid-cardano";
import axios from "axios";
import {
  blockfrostApiKeys,
  blockfrostApiUrls,
  zeroAddress,
  transactionValidTime,
  defaultDecimals,
  supportedWallets
} from "../constant";

declare const window: any;

export const checkCanConnect = (walletKey: string) => {
  if (
    walletKey &&
    window?.cardano &&
    window?.cardano[walletKey] &&
    typeof window.cardano[walletKey].enable == "function"
  ) {
    return true;
  }
  return false;
};

export const getAssetsFromStakeAddress = async (stakeAddress: string) => {
  const bech32StakeAddress = convertHexAddressToBech32(stakeAddress);
  if (!bech32StakeAddress) {
    return {
      lovelace: "0",
    };
  }
  const { lovelace = "0" } = await getWalletAssets(
    bech32StakeAddress,
  );
  return {
    lovelace,
  };
};

export const convertHexAddressToBech32 = (stakeHexAddress: string) => {
  try {
    if (!stakeHexAddress) {
      return "";
    }
    const bech32StakeAddress = L.C.Address.from_bytes(
      L.fromHex(stakeHexAddress),
    ).to_bech32(undefined);
    return bech32StakeAddress;
  } catch (_) {
    try {
      const bech32StakeAddress =
        L.C.Address.from_bech32(stakeHexAddress).to_bech32(undefined);
      return bech32StakeAddress;
    } catch (_) {
      return "";
    }
  }
};

export const getWalletAssets = async (stakeAddress: string) => {
  try {
    const res = await axios.post(`api/wallet`, {
      stakeAddress,
    });
    return {
      lovelace: res.data?.lovelace || "0",
    };
  } catch (err) {
    throw err;
  }
};

export const getWalletExtensionStatus = () => {
  let extensions: Record<string, any> = {};
  supportedWallets.map((walletInfo) => {
    let installed = false;
    if (window.cardano && window.cardano[walletInfo.key]) {
      installed = true;
    }
    extensions[walletInfo.key] = {
      name: walletInfo.name,
      installed,
      icon: walletInfo.icon,
    };
  });
  return extensions;
};

export const shortenAddress = (addr: string) => {
  return `${addr.slice(0, 6)}...${addr.slice(-3)}`;
}