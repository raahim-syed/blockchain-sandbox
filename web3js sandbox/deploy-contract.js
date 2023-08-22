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
const data = require("./bytecode.json").object;
const contractAbi = require("./contract-abi.json");

console.log(data)

async function sendContractTransaction(){
    try{
        //Getting Transaction count
        const count = await getTransactionCount(PUBLIC_KEY1);

        console.log(count)

        //Create Transaction Object
        const transactionObject = {
            nonce: toHex(count),
            gasPrice: toHex(toWei("10","gwei")),
            gasLimit: toHex(10000000),
            data: data
        }

        //Signing Transaction
        const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, PRIVATE_KEY1)

        //Signing Transaction
        const hash = await sendSignedTransaction(signedTransaction.rawTransaction);

        console.log(hash)
    }catch(err){
        console.log(err)
    }
}
sendContractTransaction();
//0x4c9cc41c517986a76827bb98de843bcc40b68fb3ba4914af2662ef32e1e91e80

/*

Transaction Status:
https://api.etherscan.io/api
   ?module=transaction
   &action=getstatus
   &txhash=0x4c9cc41c517986a76827bb98de843bcc40b68fb3ba4914af2662ef32e1e91e80
   &apikey=5B5S8FUA37PBBZZC3DAD7UT335X4RSYZZZ

Contract:
https://api.etherscan.io/api
   ?module=contract
   &action=getabi
   &address=0x8fcfe47f7d75a367dd0fbd7c7e292b45e60392f3
   &apikey=5B5S8FUA37PBBZZC3DAD7UT335X4RSYZZZ

*/