create directory


kubectl apply -f deployments
kubectl delete -f deployments

mkdir -p data/node1


geth account new --datadir data/node1/ --password data/password.sec


geth init --datadir data/node1 genesis.json


run 

geth --datadir data/node1  --networkid 607227 --nodiscover  --http --http.api personal,eth,net,web3,admin,mine --mine --miner.threads=2 --miner.etherbase=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266

geth attach data/node1/geth.ipc --exec admin.peers


docker run -it -p 30303:30303 -v /path/on/host:/root/.ethereum ethereum/client-go
docker run --rm -it -v $(pwd)/data/node1:/root/data -v $(pwd)/genesis.json:/root/files/genesis.json ethereum/client-go:alltools-latest geth init --datadir /root/data /root/files/genesis.json

## Testers
yarn network-test
node  src/send-transaction.js



geth --datadir data/node1  --networkid 607227 --nodiscover  --http --http.api personal,eth,net,web3,admin,mine --unlock 0x5240834dc33a997def6f2487159a572905a779fe --password data/password.sec --mine --miner.threads=2 --miner.etherbase=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266

echo -n 'password' | base64
echo -n '{"address":"5240834dc33a997def6f2487159a572905a779fe","crypto":{"cipher":"aes-128-ctr","ciphertext":"de143f536b58d1dec47742c860214f82e18ae28ad9ce8510691e5f6f6c2bfa0a","cipherparams":{"iv":"ba7371b55bd8ccac02b5534c62aa6357"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"c2858e4dc5cff0c2fa6965736768fd15f1afcb73d5a6cb68491bae273e3db13e"},"mac":"973a0b728500802e361e928819af29468082f5ce30bf68cd1e993a5c8299833b"},"id":"1a15f94f-5bae-4c8e-8e42-b73e6338a8a0","version":3}' | base64


echo -n '0x44dadb7C2df005Fa0635DE835c75C3B33720F469' | base64
echo -n '{"address":"5240834dc33a997def6f2487159a572905a779fe","crypto":{"cipher":"aes-128-ctr","ciphertext":"de143f536b58d1dec47742c860214f82e18ae28ad9ce8510691e5f6f6c2bfa0a","cipherparams":{"iv":"ba7371b55bd8ccac02b5534c62aa6357"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"c2858e4dc5cff0c2fa6965736768fd15f1afcb73d5a6cb68491bae273e3db13e"},"mac":"973a0b728500802e361e928819af29468082f5ce30bf68cd1e993a5c8299833b"},"id":"1a15f94f-5bae-4c8e-8e42-b73e6338a8a0","version":3}' | base64
9709da2884f4b020f54f841bb0bc6a1368de5700a74c0a692e8f51eeb8e9ba90
   

geth --datadir /opt/geth/node account import /opt/geth/config/private_key --password /opt/geth/secret/password
geth --datadir /opt/geth/node account import /opt/geth/config/private_key
keystore_secret: |
    {"address":"5240834dc33a997def6f2487159a572905a779fe","crypto":{"cipher":"aes-128-ctr","ciphertext":"de143f536b58d1dec47742c860214f82e18ae28ad9ce8510691e5f6f6c2bfa0a","cipherparams":{"iv":"ba7371b55bd8ccac02b5534c62aa6357"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"c2858e4dc5cff0c2fa6965736768fd15f1afcb73d5a6cb68491bae273e3db13e"},"mac":"973a0b728500802e361e928819af29468082f5ce30bf68cd1e993a5c8299833b"},"id":"1a15f94f-5bae-4c8e-8e42-b73e6338a8a0","version":3}
  
docker ingress

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml
https://kubernetes.github.io/ingress-nginx/deploy/#verify-installation

kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml

Alethio
https://github.com/Alethio/ethereum-lite-explorer#with-memento


   docker run -p 8080:80 -e APP_NODE_URL="http://192.168.1.180:31629" alethio/ethereum-lite-explorer

memento
https://alethio.gitbook.io/memento/running-memento/via-docker   

kubectl apply -f meme
kubectl delete -f meme


docker run --name memento -d -v /Users/cj1/projects/docker-geth/memento:/config/ -p 3000:3000 -p 3001:3001 alethio/memento:latest
