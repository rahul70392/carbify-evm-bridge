const {ethers, run} = require('hardhat')
require('dotenv').config()

const main = async () => {
  const [deployer] = await hre.ethers.getSigners()
  const accountBalance = await deployer.getBalance()

  console.log('Deploying contracts with account: ', deployer.address)
  console.log('Account balance: ', accountBalance.toString())

  let contractFactory = await hre.ethers.getContractFactory(
    'WCarbify'
  )
  let contract = await contractFactory.deploy(process.env.BRIDGE_WALLET)

  console.log(
    'contract WCarbify deployed to address: ',
    contract.address,
  )
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()

// 0x19b669b6A0a7E52A774521c424F2Bf19515DC105  destination goerli eth
