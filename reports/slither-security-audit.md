Summary
 - [missing-zero-check](#missing-zero-check) (1 results) (Low)
 - [too-many-digits](#too-many-digits) (1 results) (Informational)
 - [unused-state](#unused-state) (2 results) (Informational)
## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-0
[AuthUpgradeable.transferOwnership(address).newOwner](contracts/access-upgradeable/AuthUpgradeable.sol#L70) lacks a zero-check on :
		- [owner = newOwner](contracts/access-upgradeable/AuthUpgradeable.sol#L72)

contracts/access-upgradeable/AuthUpgradeable.sol#L70


## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-1
[TokenUpgradeable.initialize()](contracts/token-upgradeable/TokenUpgradeable.sol#L23-L28) uses literals with too many digits:
	- [_mint(_msgSender(),1000000000)](contracts/token-upgradeable/TokenUpgradeable.sol#L27)

contracts/token-upgradeable/TokenUpgradeable.sol#L23-L28


## unused-state
Impact: Informational
Confidence: High
 - [ ] ID-2
[AuthUpgradeable.__gap](contracts/access-upgradeable/AuthUpgradeable.sol#L88) is never used in [TokenUpgradeableV2](contracts/token-upgradeable/TokenUpgradeableV2.sol#L16-L33)

contracts/access-upgradeable/AuthUpgradeable.sol#L88


 - [ ] ID-3
[AuthUpgradeable.__gap](contracts/access-upgradeable/AuthUpgradeable.sol#L88) is never used in [TokenUpgradeable](contracts/token-upgradeable/TokenUpgradeable.sol#L17-L36)

contracts/access-upgradeable/AuthUpgradeable.sol#L88


