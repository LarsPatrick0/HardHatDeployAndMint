npm init
npm install --save-dev hardhat
npx hardhat
 Create an empty hardhat.config.js

npm install @alch/alchemy-web3

npm install @openzeppelin/contracts
npm install @nomiclabs/hardhat-ethers


mkdir contracts
mkdir scripts
mkdir test

npm install dotenv --save
//npm install --deprecate
npm install --save-dev @nomiclabs/hardhat-ethers 
 

add .env on root

(add contract to contract folder)

npx hardhatb compile

npx hardhat run scripts/deploy.js --network polygon_mumbai

returns address of contract = xdbe9C3aFfdbB7ae9Bd9065A25e8a8f8e655cd953

npx hardhat run scripts/mint.js --network polygon_mumbai