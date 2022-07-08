default:
	@just --list
install:
	npm install
compile:
	npx hardhat compile
deploy-localhost:
	npx hardhat run scripts/deploy.ts --network localhost
deploy-testnet:
	npx hardhat run scripts/deploy.ts --network goerli
verify-testnet:
	npx hardhat run scripts/verify.ts --network goerli
test:
	npx hardhat test test/Token.test.ts
node:
	npx hardhat node
format:
	npx prettier --write 'contracts/**/*.sol'
audit:
	npx hardhat audit
