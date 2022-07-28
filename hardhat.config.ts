require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const networks: { [key: string]: any } = {
  rinkeby: {
    url: process.env.ALCHEMY_KINKEBY_URL,
    accounts: [process.env.ACCOUNT_PRIVATE_KEY],
  },
};

const config: HardhatUserConfig = {
  defaultNetwork: "rinkeby",
  networks,
  solidity: "0.8.9",
};

export default config;
