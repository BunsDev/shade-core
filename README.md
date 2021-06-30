# Shade Cash

Shade Cash is a non-custodial FTM privacy solution based on zkSNARKs, a fork of [Tornado Cash](https://tornado.cash). It improves transaction privacy by breaking the on-chain link between the recipient and destination addresses. It uses smart contracts that accept FTM deposits that can be withdrawn by a different address. Whenever FTM is withdrawn by the new address, there is no way to link the withdrawal to the deposit, ensuring complete privacy.

To make a deposit user generates a secret and sends its hash (called a commitment) along with the deposit amount to the Shade smart contract. The contract accepts the deposit and adds the commitment to its list of deposits.

Later, the user decides to make a withdrawal. To do that, the user should provide a proof that he or she possesses a secret to an unspent commitment from the smart contract’s list of deposits. zkSnark technology allows that to happen without revealing which exact deposit corresponds to this secret. The smart contract will check the proof, and transfer deposited funds to the address specified for withdrawal. An external observer will be unable to determine which deposit this withdrawal came from.

## Requirements

1. `node v11.15.0`
2. `npm install -g npx`

## Add your ftmscan API key and setup other parameters if need it:

*@/truffle-config.js*

```bash
api_keys: {
  ftmscan: '***', // ftm scan API key
},
```
## Make sure that *truffle-plugin-verify* has FTM network support:

*@/node_modules/truffle-plugin-verify/constants.js*

```bash
const API_URLS = {
  ...  
  250: 'https://api.ftmscan.com/api',
  4002: 'https://testnet.ftmscan.com/api',
}
const EXPLORER_URLS = {
  ...   
  250: 'https://ftmscan.com/address',
  4002: 'https://testnet.ftmscan.com/address',
}
```

## Create ***.env*** file in root folder and add private key:
```bash
PRIVATE_KEY="***"
```

## Usage on FTM Testnet

1. `npm install`
2. `npm run build` - this may take 10 minutes or more
3. `npm run migrate` - this will deploy all contracts on the FTM Testnet network
4. `npx truffle run verify ContractName@Address --network ftmtest` - verify 'ContractName' with address 'Address' (add your ftmscan API key in truffle-config.js)

## Usage on FTM Mainnet

1. `npm install`
2. `npm run build` - this may take 10 minutes or more
3. `npm run migrate` - this will deploy all contracts on the FTM Mainnet network
4. `npx truffle run verify ContractName@Address --network ftmmain` - verify 'ContractName' with address 'Address' (add your ftmscan API key in truffle-config.js)

For usage examples and ideas check [here](https://github.com/tornadocash/tornado-core/blob/master/cli.js)
