// node src/network-tester-ethers.js
const ethers = require('ethers');
// const NETWORK_ADDRESS = "http://localhost:8545";
// const NETWORK_ADDRESS_WS = "ws://localhost:8545";
// const NETWORK_ADDRESS = "http://192.168.1.180:7545";

// const NETWORK_ADDRESS = "http://localhost:30356";

const NETWORK_ADDRESS = "http://192.168.1.180:30356";
const NETWORK_ADDRESS_WS = "ws://192.168.1.180:31037";


async function main(){

  // Check RPC
  const provider = new ethers.providers.getDefaultProvider(NETWORK_ADDRESS);
  const network = await provider.getNetwork() ;
  console.log("network: ",network );

    // const networkStatus = await provider.ready;
    // console.log("network status", networkStatus)

  const wsProvider = new ethers.providers.WebSocketProvider(NETWORK_ADDRESS_WS);
  const wsNetwork = await wsProvider.getNetwork() ;
  console.log("WS network: ", wsNetwork);
}

main().then(() => {
  console.log("done");
  process.exit(0);
}
).catch(console.error);
