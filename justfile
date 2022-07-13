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
	npx nyc hardhat test
node:
	npx hardhat node
format:
	npx prettier --write 'contracts/**/*.sol'
audit:
	npx hardhat audit
print-audit:
	cat ./audit/audit.md
print-gas-usage:
	cat gasUsageReport.md
