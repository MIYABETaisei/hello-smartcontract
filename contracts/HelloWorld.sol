// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {
    string public myString = "Hello World";

    function setString(string memory _s) external {
        myString = _s;
    }
}
