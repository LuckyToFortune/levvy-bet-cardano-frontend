export const supportedWallets = [
  { name: "Eternl Wallet", key: "eternl", icon: "eternl.svg" },
  { name: "Nami Wallet", key: "nami", icon: "nami.svg" },
  { name: "Vespr Wallet", key: "vespr", icon: "vespr.svg" },
];

export const savedWalletSelectionKey = "geo-wallet";

export const tokens = [{ name: "ADA", value: "ADA" }];

export const blockfrostApiUrls = {
  mainnet: "https://cardano-mainnet.blockfrost.io/api/v0/",
  preprod: "https://cardano-preprod.blockfrost.io/api/v0/",
};

export const blockfrostApiKeys = {
  mainnet: process.env.blockfrostApiKeyMainnet,
  preprod: process.env.blockfrostApiKeyPreprod,
};

export const zeroAddress =
  "addr1vyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkdl5mw";

export const transactionValidTime = 1000 * 120;

export const defaultDecimals = 1000000;
