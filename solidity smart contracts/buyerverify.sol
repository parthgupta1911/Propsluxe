// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract buyerVerification {
    address public admin;
    uint256 public minimumPayment = 1000000000000000; // 0.001 eth


    event VerificationFeePaid(string  propertyId,string name,address payer);


    constructor() {
        admin = msg.sender;
    }

    function payVerificationFee(string memory propertyId,string memory id) external payable {
        require(msg.value >= minimumPayment, "Insufficient payment for verification");
        emit VerificationFeePaid(propertyId,id, msg.sender);
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No funds to withdraw");
        payable(admin).transfer(contractBalance);
    }

   
    function deposit() external payable {}

}