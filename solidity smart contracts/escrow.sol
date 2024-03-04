//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
    
    function ownerOf(uint256 _tokenId) external view returns (address);
}

contract Escrow {
    mapping(uint256 => bool) public isListed;
    mapping(uint256 => uint256) public price;
    mapping(uint256 => address) public seller;

    event NFTListed(uint256 nftId, uint256 price,address seller);
    event NFTPurchased(uint256 nftId,string userId,address buyer);
    event NFTWithdrawn(uint256 nftId, address seller);

    function listNFT(uint256 _nftId, uint256 _price, address nftaddr) external {
        require(!isListed[_nftId], "NFT is already listed");
        require(_isContractOwner(msg.sender, nftaddr, _nftId), "Not NFT owner");
        IERC721(nftaddr).transferFrom(msg.sender, address(this), _nftId);
        isListed[_nftId] = true;
        price[_nftId] = _price;
        seller[_nftId] = msg.sender;
        emit NFTListed(_nftId, _price, msg.sender);
    }

    function purchaseNFT(uint256 _nftId, address nftaddr,string memory userId) external payable {
        require(isListed[_nftId], "NFT not listed");
        require(msg.value >= price[_nftId], "Incorrect payment amount");
        IERC721(nftaddr).transferFrom(address(this), msg.sender, _nftId);
        payable(seller[_nftId]).transfer(msg.value);
        // Reset state variables and delete mappings
        _withdrawListing(_nftId);
        emit NFTPurchased(_nftId,userId, msg.sender);
    }

    function withdrawListing(uint256 _nftId,address nftaddr) external {
        require(isListed[_nftId], "NFT not listed");
        require(msg.sender==seller[_nftId], "Not seller");
        IERC721(nftaddr).transferFrom(address(this),msg.sender, _nftId);
        // Reset state variables and delete mappings
        _withdrawListing(_nftId);
         emit NFTWithdrawn(_nftId, msg.sender);
    }

    function _withdrawListing(uint256 _nftId) internal {
        isListed[_nftId] = false;
        delete price[_nftId];
        delete seller[_nftId];
    }

    function _isContractOwner(address owner, address _nftContract, uint256 _nftId) internal view returns (bool) {
        IERC721 nft = IERC721(_nftContract);
        return nft.ownerOf(_nftId) == owner;
    }
}