// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Natsu is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Natsu", "SUAR") {}

    function safeMint(address to, string memory uri) public onlyOwner {
        //This Check Is USed To Limit NFT Supply
        require(_tokenIdCounter.current() != 5, "Maximum amount of tokens have been minted!");

        // Storing Current Counter Value
        uint256 tokenId = _tokenIdCounter.current();

        //Incrementing Counter
        _tokenIdCounter.increment();

        //Minting NFT
        _safeMint(to, tokenId);

        //Giving NFT a URI
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}