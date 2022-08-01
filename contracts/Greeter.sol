// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Greeter {
    string private text;

    constructor(string memory _text) {
        console.log("Deploying a Greeter with text:", _text);
        text = _text;
    }

    function show() external view returns (string memory) {
        return text;
    }

    function set(string memory _setTxt) external {
        text = _setTxt;
    }
}
