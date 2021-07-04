/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Token = artifacts.require("Token");
const dBank = artifacts.require("dBank");

module.exports = async function(deployer) {
	//deploy Token
	await deployer.deploy(Token); //1 - create token instance

	//assign token into variable to get it's address
	const token = await Token.deployed(); //2 - assign live token instance to a variable
	
	//pass token address for dBank contract(for future minting)
	await deployer.deploy(dBank, token.address); //3 - create instance of bank to consume token at address 

	//assign dBank contract into variable to get it's address
	const dbank = await dBank.deployed(); //4 - assign live instance of bank of live token

	//change token's owner/minter from deployer to dBank
	await token.passMinterRole(dbank.address) //5 - assign token minting of token instance to bank at address
};