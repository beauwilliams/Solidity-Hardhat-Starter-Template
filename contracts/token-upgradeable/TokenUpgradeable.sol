// SPDX-License-Identifier: BSD-4-Clause

pragma solidity >=0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "../access-upgradeable/AuthUpgradeable.sol";

/**
 * @title Token Contract
 * @author Beau Williams (@beauwilliams)
 * @dev Smart contract for Token
 */

contract TokenUpgradeable is
    Initializable,
    UUPSUpgradeable,
    ERC20Upgradeable,
    AuthUpgradeable
{
    function initialize() public initializer {
        __UUPSUpgradeable_init();
        __AuthUpgradeable_init();
        __ERC20_init("TokenUpgradeable", "TKU");
        _mint(_msgSender(), 1000000000);
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {
        initialize();
    }

    function _authorizeUpgrade(address) internal override authorised {}
}
