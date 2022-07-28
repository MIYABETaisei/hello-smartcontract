import { ethers } from "hardhat";

async function main() {
  const Hello = await ethers.getContractFactory("HelloWorld");
  const hello = await Hello.deploy();

  await hello.deployed();
  console.log(
    `HelloWorld Deploy Tx: https://ropsten.etherscan.io/tx/${hello.deployTransaction.hash}`
  );
  console.log(`HelloWorld Contract Address: ${hello.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
