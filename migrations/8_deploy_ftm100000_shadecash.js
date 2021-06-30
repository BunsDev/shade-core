/* global artifacts */
const FTMShadeCash = artifacts.require('FTMShadeCash')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await FTMShadeCash.link(hasherContract, hasherInstance.address)
    const shadecash = await deployer.deploy(FTMShadeCash, verifier.address, '100000000000000000000000', 20, accounts[0])
    console.log('ShadeCash address FTM 100 000 ', shadecash.address)
  })
}
