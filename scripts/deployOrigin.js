import '@nomiclabs/hardhat-ethers'
const main = async () => {
  const [deployer] = await hre.ethers.getSigners()
  const accountBalance = await deployer.getBalance()

  console.log('Deploying contracts with account: ', deployer.address)
  console.log('Account balance: ', accountBalance.toString())

  let contractFactory = await hre.ethers.getContractFactory('Carbify')
  let contract = await contractFactory.deploy(
    'Carbify',
    'CBY',
    1000000
  )

  await contract.deployed()

  console.log(
    'contract Carbify deployed to address: ',
    contract.address
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

// 0x45A24DFeb65487C550b14F5D8c2518a71386df9D   source polygon mumbai
