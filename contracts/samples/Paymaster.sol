// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "../core/BasePaymaster.sol";

contract Paymaster is BasePaymaster{

    constructor(IEntryPoint _entryPoint) BasePaymaster(_entryPoint){
    }

    function _validatePaymasterUserOp(PackedUserOperation calldata /*userOp*/, bytes32 /*userOpHash*/, uint256 /*maxCost*/)
    internal virtual override returns (bytes memory context, uint256 validationData){
        // return should be 0
        return (abi.encode(msg.sender),0);
    }

    function _postOp(
        PostOpMode mode,
        bytes calldata context,
        uint256 actualGasCost,
        uint256 actualUserOpFeePerGas
    ) internal override virtual {
        (mode, context, actualGasCost, actualUserOpFeePerGas); // unused params
        // subclass must override this method if validatePaymasterUserOp returns a context
    }

}