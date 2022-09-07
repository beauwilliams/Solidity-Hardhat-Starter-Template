/* const { ethers, upgrades } = require("hardhat");

//Specify the existing address of the contract you wish to upgrade here
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
//Specify the name of the contract to be upgraded here.
const CONTRACT_NAME='UbuntuVestingV2'

async function main() {
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  const res = await upgrades.upgradeProxy(CONTRACT_ADDRESS, UpgradedContract);
  console.log("Box upgraded");
  console.log(res.address);

}

import * as fs from "fs";
const { ethers, upgrades } = require("hardhat");
import { BOX_DEPLOYMENT_ADDRESS } from '../deployments/deploy';

async function main() {
  const CONTRACT_NAME = "BoxV2"
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  const upgraded = await upgrades.upgradeProxy({$BOX_DEPLOYMENT_ADDRESS}, UpgradedContract);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());

  console.log("saving upgraded deployment details to deployments/deploy.ts");
  let deployments = `
  export const BOX_DEPLOYMENT_ADDRESS = "${upgraded.address}"
  `;
  let data = JSON.stringify(deployments);
  fs.writeFileSync("deployments/deploy.ts", JSON.parse(data));

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); */



import { ethers, upgrades } from 'hardhat';
import { tokenaddress } from '../deployments/deploy';

//Specify the existing address of the contract you wish to upgrade here
const CONTRACT_ADDRESS = tokenaddress;
//Specify the name of the contract to be upgraded here.
const CONTRACT_NAME='TokenUpgradeableV2'

async function main() {
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  try {
    await upgrades.upgradeProxy(CONTRACT_ADDRESS, UpgradedContract);
    console.log('upgraded successfully');
  } catch (e) {
    console.log(e);
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
