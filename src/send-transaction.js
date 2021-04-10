// node  src/send-transaction.js

const ethers = require("ethers");
// const NETWORK_ADDRESS = "http://localhost:8545";
const NETWORK_ADDRESS = "http://localhost:31118";
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
//   const counter = await hre.ethers.contractFactory.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

const accountAddress = "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65";
const senderAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const senderPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";


// const senderPrivateKey = "0x348f40e0b3c3d55b626ec085c115fc25578a10a76b9afcd27d4c48094d707348";

const provider = new ethers.providers.JsonRpcProvider(NETWORK_ADDRESS);
const blocknumber = await provider.getBlockNumber();
console.log("blocknumber", blocknumber.toString());

const wallet = new ethers.Wallet(senderPrivateKey, provider);

const sender_balance = await provider.getBalance(senderAddress);
console.log("sender balance", sender_balance.toString());

const account_balance = await provider.getBalance(accountAddress);
console.log("receiver balance", account_balance.toString());

const gasPrice = await provider.getGasPrice();
tx = {
  to: accountAddress,
  value: ethers.utils.parseEther("5"),
  gasLimit: "0x61A80",
  gasPrice: gasPrice.add(gasPrice.div(5)),
}

await wallet.sendTransaction(tx).then((signedTX)=>{
    console.log("signedTX", signedTX);
    // customHttpProvider.sendTransaction(signedTX).then(console.log);
});

const account_balance2 = await provider.getBalance(accountAddress);

console.log("account_balance after:", ethers.utils.formatUnits(account_balance2.toString()));
// console.log("account_balance after:", account_balance2.toString());
//   console.log("Counter Address:", counte.address)
//   const counter = await Counter.deploy();

//   await counter.deployed();

//   console.log("Counter deployed to:", counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
