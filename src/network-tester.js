// yarn network-test

const Web3 = require("web3");


// const NETWORK_ADDRESS = "http://localhost:8545";
// const NETWORK_ADDRESS = "http://192.168.1.180:7545";

// const NETWORK_ADDRESS = "http://localhost:30356";

const NETWORK_ADDRESS = "http://192.168.1.180:30356";
const NETWORK_ADDRESS_WS = "ws://192.168.1.180:31037";

async function main() {

  const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_ADDRESS));
  await web3.eth.net.isListening().then(() => console.log("connected")).catch((e) => console.log("error", e));

  const web3ws = new Web3(new Web3.providers.WebsocketProvider(NETWORK_ADDRESS_WS));
  await web3ws.eth.net.isListening().then(() => console.log("connected")).catch((e) => console.log("error", e));
}

main().then(() => {
  console.log("done");
  process.exit(0);
}
).catch(console.error);
