# Simple Bank

This is a modified version of the Simple Bank smart contract example using Solidity. The bank contract 
does not hold any ether yet.

## Requirements

Contract deployment and testing is done via [Truffle](https://truffleframework.com/). To install Truffle:

```
npm install -g truffle
```

Note: checked with version

* Truffle v5.3.6 / Solidity >=0.4.22 <0.9.0

## Deployment and Testing

First, start a local development network:

```
truffle develop
```

This will start Truffle Develop at http://127.0.0.1:7545 together with 10 sample accounts.

Then, compile the contracts in a different terminal (truffle develop keeps running the network):

```
truffle compile>=0.4.22 ^0.8.0"
```

If there are no errors, the contracts can be deployed to the local development network:

```
truffle migrate
```

Finally, they can be tested:

```
truffle test
```

With the following expected output:

```
Using network 'development'.
   Contract: SimpleBank
    ✓ should test initial balance of account 0 in the contract (67ms)
    ✓ test balance of account 0 in the contract after deposit (250ms)
    ✓ should withdraw correct amount from account 1 in the smart contract (795ms)


  3 passing (1s)
```
