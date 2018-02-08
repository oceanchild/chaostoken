var ChaosToken = artifacts.require("ChaosToken");

module.exports = function(deployer) {
  deployer.deploy(ChaosToken);
};
