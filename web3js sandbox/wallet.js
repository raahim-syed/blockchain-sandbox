require("dotenv").config();
//Modules
const Web3 = require("web3")

//Extracting environment variables
const {PUBLIC_KEY1, PRIVATE_KEY1, API_KEY} = process.env;

//Connecting to a Eth Node
const web3 = new Web3(MAINNET_KEY);


web3.eth.accounts.create();
web3.eth.accounts.encrypt(key, password);
web3.eth.accounts.wallet();
web3.eth.accounts.wallet.create(3);
