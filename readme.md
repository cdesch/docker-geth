create directory


mkdir -p data/node1


geth account new --datadir data/node1/ --password data/password.sec


geth init --datadir data/node1 genesis.json


run 

geth --datadir data/node1  --networkid 607227 --nodiscover  --http --http.api personal,eth,net,web3,admin,mine --mine --miner.threads=1 --miner.etherbase=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
geth attach data/node1/geth.ipc --exec admin.peers


docker run -it -p 30303:30303 -v /path/on/host:/root/.ethereum ethereum/client-go


yarn network-test