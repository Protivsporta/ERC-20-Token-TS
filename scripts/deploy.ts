import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const ERC20 = await ethers.getContractFactory("ERC20", signer);
  const erc20 = await ERC20.deploy("ValeryGorbunov", "VGCG", 8, 1000000000);

  await erc20.deployed();

  console.log("ERC20 deployed to:", erc20.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
