const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  //Deploy Contract To the chain.
  deployer.deploy(Migrations);
};
