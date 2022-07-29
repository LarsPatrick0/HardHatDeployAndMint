require("ethers");
async function main() {

    const mintContractFactory = await ethers.getContractFactory("ImpactCollectionContract");
 
    // Start deployment, returning a promise that resolves to a contract object
    const mintContract = await mintContractFactory.deploy();   
    console.log("Contract deployed to address:", mintContract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });