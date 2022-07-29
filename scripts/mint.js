 


const CONTRACT_ADDRESS =  process.env.CONTRACTADDRESS 
const META_DATA_URL0 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/bike1.json';
const META_DATA_URL1 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/city.json';
const META_DATA_URL2 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/coaster.json';
const META_DATA_URL3 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/countrystreet.json';
const META_DATA_URL4 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/food.json';
const META_DATA_URL5 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/notabike.json';
const META_DATA_URL6 = 'https://storageapi.fleek.co/4a523833-7583-4f0f-9adb-1ce2c69ea7c8-bucket/notabike2.json';

async function mintNFT(_CONTRACT_ADDRESS , _metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ImpactCollectionContract")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(_CONTRACT_ADDRESS).mintNFT(owner.address, _metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL6)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });

