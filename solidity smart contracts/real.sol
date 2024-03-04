// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RealEstate is ERC721URIStorage {
    address public admin;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public a = 0x18CbdCc86f6DFa77034921DB5F7309bDe58Db569;//adddress where escrow.sol is deployed
    constructor() ERC721("Real Estate", "REAL") {}
    event NFTMinted(uint256 tokenId, string tokenURI);
    event ContractApproved(uint256 tokenId);

    function mint(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newId = _tokenIds.current();
        _mint(msg.sender, newId);
        _setTokenURI(newId, tokenURI);
        emit NFTMinted(newId,tokenURI);
        return newId;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    function getTokenURIById(uint256 tokenId) public view returns (string memory) {
        address owner = ownerOf(tokenId);
        if (owner != address(0)) {
            return tokenURI(tokenId);
        } else {
            return "Token not yet minted";
        }
    }

    function approveContract(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not the NFT owner");
        approve(a, tokenId);//Approve the escorw.sol to buy and sell nft
        emit ContractApproved(tokenId);
    }
   

}