// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SimpleBank {
    mapping(address => uint256) private _balances;
    address _owner;
    uint public transaction;
    using SafeMath for uint256;

    constructor() {
        _owner = msg.sender;
    }

    function getContractBalance() public view returns (uint){
        return address(this).balance;
    }

    function getBalance() public view returns(uint) {
        return _balances[msg.sender];
    }

    function deposit() public payable {
        _balances[msg.sender] += msg.value;
        transaction++;
    }

    function withdraw(uint amount) public payable returns (uint){
        if(amount <= _balances[msg.sender]) {
            _balances[msg.sender] -= amount;
            payable(msg.sender).transfer(amount);
        }
        return _balances[msg.sender];
    }

}
