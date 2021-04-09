create directory


mkdir -p data/node1


geth account new --datadir data/node1/ --password data/password.sec


geth init --datadir data/node1 genesis.json


run 

geth --datadir data/node1  --networkid 607227
  --nodiscover  --http    

docker run -it -p 30303:30303 -v /path/on/host:/root/.ethereum ethereum/client-go


yarn network-test