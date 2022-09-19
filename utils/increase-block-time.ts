import {network} from "hardhat";

export const increaseWorldTimeInSeconds = async (seconds: number, mine = false) => {
  console.log("Increasing block time...")
  await network.provider.send('evm_increaseTime', [seconds]);
  if (mine) {
    await network.provider.send('evm_mine', []);
  }
    console.log(`Increased block tim by ${seconds} seconds`)
};
