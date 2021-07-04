/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
