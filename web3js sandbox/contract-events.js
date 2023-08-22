require("dotenv").config();
//Modules
const Web3 = require("web3")

//Extracting environment variables
const {PUBLIC_KEY1, PRIVATE_KEY1, MAINNET_KEY} = process.env;

//Connecting to a Eth Node
const web3 = new Web3(MAINNET_KEY);

//Destructuring Common Methods
const {toHex, toWei} = web3.utils;
const {Contract, getTransactionCount, sendSignedTransaction} = web3.eth;

//Contract Details
const contractAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const contractAbi = require("./contract-abi.json")

//Contract Instance Created
const Todo = new Contract(contractAbi, contractAddress);

Todo.getPastEvents("AllEvents", {
    filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: "latest"
}).then(logs => {
    console.log(logs[1])
}).catch( err => console.log(err));