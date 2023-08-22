const {ethers} = require("hardhat");

async function main(){
    //Deploying Contract To The Chain
    const Natsu = await ethers.getContractFactory("Natsu");
    const deployedToken = await Natsu.deploy();

    console.log("Contract Deployed At: " + deployedToken.address);
}

main().then(() => process.exit(0))
.catch(err => {
    console.log(err);
    process.exit(1);
})

//Contract Address
//0xD427BA5f14ED9045d6Fbf3AEF3827e1D1D6474D9