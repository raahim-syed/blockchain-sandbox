require("dotenv").config();
//Modules
const Web3 = require("web3")

//Extracting environment variables
const {PUBLIC_KEY1, PRIVATE_KEY1, API_KEY} = process.env;

//Connecting to a Eth Node
const web3 = new Web3(API_KEY);

//Destructuring Common Methods
const {toHex, toWei} = web3.utils;
const {Contract, getTransactionCount, sendSignedTransaction} = web3.eth;

//Contract Details
const contractAddress = "0x8fcfe47f7d75a367dd0fbd7c7e292b45e60392f3";
const contractAbi = require("./contract-abi.json")

const Todo = new Contract(contractAbi, contractAddress);


//Destructuring Todo Contract
const {methods, events} = Todo;

async function sendContractTransaction(){
    try{
        //Get Transaction Count
        const transactionCount =  await getTransactionCount(PUBLIC_KEY1);

        //Creating Transaction Object
        const transactionObject = {  
            from: PUBLIC_KEY1,
            to: contractAddress,
            nonce: transactionCount,
            gas: 500000,
            data: methods.addTask("Clean Room").encodeABI(),
        }    
    
        console.log("ABI: " + transactionObject.data);
    
        //Signing Transaction Object
        const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, PRIVATE_KEY1);
    
        //Write Trasaction to the chain
        sendSignedTransaction(signedTransaction.rawTransaction, (err, txhash) => {
            if(err) throw err;
            console.log(txhash);
        })
    }catch(err){
        console.log(err)
    }
}

const contractHash = sendContractTransaction();
console.log(contractHash);
//0x632e1c4e643fcb1fc353174171d36ddd8c1f2f9a54bcb1c70b253e77acb967a8
//0xa85B61c7fb7F88Bf2c1FB24293700C2958a1E2d7
