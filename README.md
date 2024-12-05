Implementation of contracts for [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) account abstraction via alternative mempool.

# Resources

[Vitalik's post on account abstraction without Ethereum protocol changes](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a)

[Discord server](http://discord.gg/fbDyENb6Y9)

[Bundler reference implementation](https://github.com/eth-infinitism/bundler)

[Bundler specification test suite](https://github.com/eth-infinitism/bundler-spec-tests)


## Lysto deployment
Make sure that the account used for deployment have minimum of 1.2 ETH for paymaster to deposit to entrypoint contract

- To deploy AccountFactory
```
npx hardhat run scripts/deployFactory.js --network sepolia 
```

- To deploy Paymaster
```
npx hardhat run scripts/deployPaymaster.js --network sepolia 
```