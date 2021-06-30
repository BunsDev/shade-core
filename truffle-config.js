require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')

module.exports = {
  networks: {
    bsctest: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://data-seed-prebsc-1-s1.binance.org:8545/'),
      network_id: 97,
      gas: 6000000,
      gasPrice: utils.toWei('30', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY_MAINNET, 'https://bsc-dataseed.binance.org/'),
      network_id: 56,
      gas: 6000000,
      gasPrice: utils.toWei('30', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    ftmtest: {      
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://rpc.testnet.fantom.network/'),
      network_id: 4002,
      gas: 6000000,
      gasPrice: utils.toWei('30', 'gwei'),
      //confirmations: 2,
      //timeoutBlocks: 200,      
      skipDryRun: true,
      deploymentPollingInterval: 10000,
      networkCheckTimeout: 10000,
    },
    ftmmain: {      
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://rpcapi.fantom.network'), // https://rpcapi.fantom.network
      network_id: 250,
      gas: 6000000,
      gasPrice: utils.toWei('50', 'gwei'), 
      skipDryRun: true,
      deploymentPollingInterval: 4000,
      networkCheckTimeout: 20000,
      //timeoutBlocks: 200,
      //confirmations: 0,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.17',    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        // evmVersion: "byzantium"
      }
    },
    external: {
      command: 'node ./compileHasher.js',
      targets: [{
        path: './build/Hasher.json'
      }]
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '***', // ftm scan API key
    ftmscan: '***', // ftm scan API key
    bscscan: '***', // ftm scan API key
  }  
}
