import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

task("transferfrom", "Transfers amount of tokens from one address to another address")
  .addParam("from", "Address from which we want to transfer tokens")
  .addParam("to", "Address to transfer")
  .addParam("value", "Amount of tokens to transfer")
  .setAction(async (taskArgs, hre) => {
    const erc20 = await hre.ethers.getContractAt("ERC20", process.env.CONTRACT_ADDR!);
    await erc20.transferFrom(taskArgs.from, taskArgs.to, taskArgs.value);
    console.log(`${taskArgs.value} tokens transfered to ${taskArgs.to}!`);
  });