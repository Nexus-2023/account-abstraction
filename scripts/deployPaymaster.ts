// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')
import {Paymaster,EntryPoint,TestHelpers} from '../typechain';
async function main () {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Payamster = await hre.ethers.getContractFactory('Paymaster')
  const payamster = await Payamster.deploy("0xD1DA0921A6fD9e36D13d83bF2Bf2819292474cD9")

  await payamster.deployed()
  console.log('payamster deployed to:', payamster.address)
  await payamster.deposit({value:hre.ethers.utils.parseEther("1.1")})

  // await payamster.deposit({value:hre.ethers.utils.parseEther("1")})
}

async function main2 () {
  let entrypoint: EntryPoint;
  const Entrypoint = await hre.ethers.getContractFactory('EntryPoint')
  entrypoint = await Entrypoint.deploy("0x271F3a7506D0E82c29431a996575eEd486e175Dd")

  // await payamster.deployed()
  console.log('entrypoint deployed to:', entrypoint.address)
  await entrypoint.simulateHandleOp()

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
