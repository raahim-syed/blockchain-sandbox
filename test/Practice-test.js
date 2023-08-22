const Person = artifacts.require("../contracts/Person.sol");

contract("Person", (accounts) => {
    it("initializes with the correct values", async () =>{
        const person = await Person.deployed();
    });

})