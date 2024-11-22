import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

import { blockfrostApiKeys } from "../../constant.ts";

import assert from "assert";

export default async function handler(req, res, next) {
  if (req?.method != "POST") {
    res
      .status(500)
      .send({ message: "Only POST requests allowed" });
    return;
  }
  try {
    const { stakeAddress } = req.body;
    assert(stakeAddress?.length > 0, "Stake Address is not Valid.");
    const API = new BlockFrostAPI({
      projectId: blockfrostApiKeys.mainnet, // see: https://blockfrost.io
    });

    const account = await API.accounts(stakeAddress);
    return res.status(200).send({
      lovelace: account.controlled_amount,
    });
  } catch (err) {
    // commonUtil.printErrorMessage("Blockfrost Wallet Asset", err);
    console.log(err)
    return res.status(200).send({
      lovelace: 0,
    });
  }
}
