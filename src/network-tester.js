const Web3 = require("web3");

// const NETWORK_ADDRESS = "http://localhost:8545";
const NETWORK_ADDRESS = "http://localhost:31629";

const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_ADDRESS));

web3.eth.net.isListening().then(() => console.log("connected")).catch((e) => console.log("error", e));

