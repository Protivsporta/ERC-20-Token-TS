import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

task("approve", "Allows address to withdraw from your account multiple times, up to the value amount")
  .addParam("spender", "Address that would be approved to withdraw from your account")
  .addParam("value", "Amount of tokens to approve")
  .setAction(async (taskArgs, hre) => {
    const erc20 = await hre.ethers.getContractAt("ERC20", process.env.CONTRACT_ADDR!);
    await erc20.approve(taskArgs.spender, taskArgs.value);
    console.log(`${taskArgs.value} tokens was approved to ${taskArgs.spender}!`);
  });
