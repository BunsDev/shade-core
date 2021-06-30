/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'ftmtest' || deployer.network === 'ftmmain') { //bsctest
    return
  }
  deployer.deploy(Migrations)
}
