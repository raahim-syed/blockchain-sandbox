require("dotenv").config();
//Modules
const Web3 = require("web3")

//Extracting environment variables
const {PRIVATE_KEY1, API_KEY} = process.env;

//Connecting to a Eth Node
const web3 = new Web3(API_KEY);

//Destructuring Common Methods
const {toHex, toWei} = web3.utils;

const privateKey = PRIVATE_KEY1;
const publicKey = "0x126429Cff58a095eDe8938d8d8993cB70204fB9a";
const reciverKey = "0xb2Ee58239e58D50C9C6EC01b3B792b2798FDCfF2";//Random User

async function sendTransaction(publicKey, privateKey, reciverKey, amount){
    //Create Transaction Object
    try{
        const txCount = await web3.eth.getTransactionCount(publicKey);

        //Creating Transaction Object
        const txObject = {
            nonce: toHex(txCount),
            to: reciverKey,
            value: toWei(amount, "ether"),
            gasLimit: toHex(21000),
            gasPrice: toHex(toWei("10", "gwei")),
        }

        //Signing Transaction Object
        const signedTransaction = await web3.eth.accounts.signTransaction(txObject, privateKey);

        //Write Trasaction to the chain
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction, (err, txhash) => {
            if(err) throw err;
            return txhash;
        })

    }catch(err){
        console.log(err);
    }
}

//Will Give Error
sendTransaction(publicKey,privateKey,reciverKey, "4");






