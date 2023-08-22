const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
// const Person = artifacts.require("../contracts/Person.sol");
const Todo = artifacts.require("../contracts/Todo.sol")

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.deploy(Person);
  deployer.deploy(Todo);
};
