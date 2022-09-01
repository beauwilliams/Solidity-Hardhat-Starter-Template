#  Hardhat-Starter-Template

## OVERVIEW

Includes deployment configurations, testing framework, contract upgrades pattern, gas usage report, security analysys audit, test coverage report.. did I also mention it's blazingly fast 😏

## FAQ

### Performance optimizations
For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable TS_NODE_TRANSPILE_ONLY to 1 in hardhat's environment. For more details see the documentation.

### Husky

ERROR ON COMMIT -> `husky > pre-commit hook failed (add --no-verify to bypass)`
RESOLUTION -> Remove errors from your smart contracts, found running `npm run lint`, or commit using --no-amend flag to temporarily bypass.

## Error running audit task
Ensure [Slither](https://github.com/crytic/slither) is installed and in your $PATH

## DEMO

![demo](https://i.ibb.co/tY00DR0/Screen-Shot-2022-07-13-at-1-57-15-pm.png)
