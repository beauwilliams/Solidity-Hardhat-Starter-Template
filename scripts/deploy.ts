/* import * as fs from "fs";
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const box = await upgrades.deployProxy(BoxV1, { kind: "uups" });
  await box.deployed();

  console.log("Box deployed to " + box.address);

  console.log("saving deployment details to deployments/deploy.ts");
  let deployments = `
  export const BOX_DEPLOYMENT_ADDRESS = "${box.address}"
  `;
  let data = JSON.stringify(deployments);
  fs.writeFileSync("deployments/deploy.ts", JSON.parse(data));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
}); */

import * as fs from 'fs';
import { ethers, upgrades } from 'hardhat';
async function main() {
  console.log("deploying token contract");
  const TokenUpgradeable = await ethers.getContractFactory("TokenUpgradeable");
  const token = await upgrades.deployProxy(TokenUpgradeable, { kind: "uups" });
  await token.deployed();
  console.log(`token contract deployed to ${token.address}`)

  console.log('saving contract addresses to deployments/deploy.ts');
  let deployments = `
  export const tokenaddress = "${token.address}"
  `

  let data = JSON.stringify(deployments)
  fs.writeFileSync('deployments/deploy.ts', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
