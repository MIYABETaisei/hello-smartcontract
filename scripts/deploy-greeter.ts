import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Ethereum!");

  await greeter.deployed();
  console.log(
    `Greeter Deploy Tx: https://ropsten.etherscan.io/tx/${greeter.deployTransaction.hash}`
  );
  console.log(`Greeter Contract Address: ${greeter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
