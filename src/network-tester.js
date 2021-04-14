// yarn network-test

const Web3 = require("web3");


// const NETWORK_ADDRESS = "http://localhost:8545";
// const NETWORK_ADDRESS = "http://192.168.1.180:7545";

// const NETWORK_ADDRESS = "http://localhost:30356";

const NETWORK_ADDRESS = "http://192.168.1.180:30356";
const NETWORK_ADDRESS_WS = "ws://localhost:31037";


const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_ADDRESS));

web3.eth.net.isListening().then(() => console.log("connected")).catch((e) => console.log("error", e));

