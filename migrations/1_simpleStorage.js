var MyContract = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
}; 