require("dotenv").config();
const Web3 = require("web3");

const {API_KEY, PRIVATE_KEY, PUBLIC_KEY} = process.env;

const web3 = new Web3(API_KEY);

const {Contract, getTransactionCount, sendSignedTransaction} = web3.eth;
const {toHex} = web3.utils;

//Getting Contract Artifact
const contractArtifact = require("../artifacts/contracts/Natsu.sol/Natsu.json");

//Getting NFT Metadata
const metaData = require("../metadata.json");

//Contract
const contractAddress = "0xD427BA5f14ED9045d6Fbf3AEF3827e1D1D6474D9";
const contractAbi = contractArtifact.abi;

//Creating Contract Instance
const Natsu = new Contract(contractAbi, contractAddress);


//Minting NFT
async function mintNFT(){
    try{
        //Getting Transaction Count
        const nonce = await getTransactionCount(PUBLIC_KEY);

        //Creating Transaction Object
        const transactionObject = {
            from: PUBLIC_KEY,
            to: contractAddress,
            nonce: nonce,
            gas: 50000,
            data: Natsu.methods.safeMint(PUBLIC_KEY, metaData.uri).encodeABI()
        }

        //Sign Transaction
        const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, PRIVATE_KEY);

        //Sending Transaction To Blockchain
        const transactionHash = await sendSignedTransaction(signedTransaction.rawTransaction);
        
        console.log(transactionHash);

    }catch(err) {
        console.log(err)
    }
}
//0xa1a12673e8a4ebdb95dda794a0f77f26ba7b3e99b5c31854c7134bda67c47f17
mintNFT();
