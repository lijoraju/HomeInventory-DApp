// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HomeInventory {
    address public owner;

    struct Item {
        string name;
        string description;
        uint256 purchaseDate;
        uint256 purchasePrice;
        string category;
        string model;
        string serialNumber;
        string location;
        string condition;
        address owner;
        uint256 id;
    }

    struct Auction {
        uint256 itemId;
        address highestBidder;
        uint256 highestBid;
        uint256 basePrice;
        uint256 endTime;
        uint256 depositedAmount; // Deposited amount for the highest bid
    }

    mapping(uint256 => Item) public items;
    mapping(uint256 => address[]) public ownershipHistory;
    mapping(uint256 => Auction) public auctions;
    uint256 public nextItemId = 1;
    uint256 public nextAuctionId = 1;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function createItem(
        string memory _name,
        string memory _description,
        uint256 _purchaseDate,
        uint256 _purchasePrice,
        string memory _category,
        string memory _model,
        string memory _serialNumber,
        string memory _location,
        string memory _condition
    ) external onlyOwner {
        Item memory newItem = Item({
            name: _name,
            description: _description,
            purchaseDate: _purchaseDate,
            purchasePrice: _purchasePrice,
            category: _category,
            model: _model,
            serialNumber: _serialNumber,
            location: _location,
            condition: _condition,
            owner: msg.sender,
            id: nextItemId
        });

        items[nextItemId] = newItem;
        ownershipHistory[nextItemId].push(msg.sender);
        nextItemId++;
    }

    function startAuction(uint256 _itemId, uint256 _basePrice, uint256 _durationInHours) external onlyOwner {
        require(_itemId > 0 && _itemId < nextItemId, "Invalid item ID");
        require(auctions[_itemId].endTime == 0, "Auction already started");

        auctions[_itemId] = Auction({
            itemId: _itemId,
            highestBidder: address(0),
            highestBid: 0,
            basePrice: _basePrice,
            endTime: block.timestamp + _durationInHours * 1 hours,
            depositedAmount: 0
        });
    }

    function placeBid(uint256 _itemId, uint256 _bidAmount) external payable {
        require(_itemId > 0 && _itemId < nextItemId, "Invalid item ID");
        Auction storage auction = auctions[_itemId];
        require(auction.endTime > 0, "Auction not started");
        require(auction.endTime > block.timestamp, "Auction ended");
        require(_bidAmount > auction.highestBid, "Bid amount must be higher than current highest bid");
        require(msg.value == _bidAmount, "Bid amount must be sent with the transaction");

        // Refund previous bidder
        if (auction.highestBidder != address(0)) {
            address payable previousBidder = payable(auction.highestBidder);
            previousBidder.transfer(auction.depositedAmount); // Refund the previous bidder
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = _bidAmount;
        auction.depositedAmount = _bidAmount; // Deposit the bid amount
    }

    function finalizeAuction(uint256 _itemId) external {
        require(_itemId > 0 && _itemId < nextItemId, "Invalid item ID");
        Auction storage auction = auctions[_itemId];
        require(auction.endTime > 0, "Auction not started");
        require(auction.endTime <= block.timestamp, "Auction not ended");
        require(auction.highestBidder != address(0), "No bids received");

        Item storage item = items[_itemId];
        address payable winningBidder = payable(auction.highestBidder); // Convert to payable address
        uint256 depositedAmount = auction.depositedAmount;

        // Transfer ownership and remove from auction
        item.owner = winningBidder;
        delete auctions[_itemId];

        // Transfer deposited amount to new owner (current owner)
        winningBidder.transfer(depositedAmount);

        ownershipHistory[_itemId].push(winningBidder);
    }

    function getAuctionDetails(uint256 _itemId) external view returns (Auction memory) {
        require(_itemId > 0 && _itemId < nextItemId, "Invalid item ID");
        return auctions[_itemId];
    }

    function getAuctionItems() external view returns (Auction[] memory) {
        uint256 itemCount = 0;

        for (uint256 i = 1; i < nextItemId; i++) {
            if (auctions[i].endTime > 0 && auctions[i].endTime > block.timestamp) {
                itemCount++;
            }
        }

        Auction[] memory auctionItems = new Auction[](itemCount);
        itemCount = 0;

        for (uint256 i = 1; i < nextItemId; i++) {
            if (auctions[i].endTime > 0 && auctions[i].endTime > block.timestamp) {
                auctionItems[itemCount] = auctions[i];
                itemCount++;
            }
        }

        return auctionItems;
    }

    function getItem(uint256 _id) external view returns (Item memory) {
        require(_id > 0 && _id < nextItemId, "Invalid item ID");
        return items[_id];
    }

    function updateItem(
        uint256 _id,
        string memory _name,
        string memory _description,
        uint256 _purchaseDate,
        uint256 _purchasePrice,
        string memory _category,
        string memory _model,
        string memory _serialNumber,
        string memory _location,
        string memory _condition
    ) external onlyOwner {
        require(_id > 0 && _id < nextItemId, "Invalid item ID");
        Item storage item = items[_id];
        require(item.owner == msg.sender, "You don't own this item");

        item.name = _name;
        item.description = _description;
        item.purchaseDate = _purchaseDate;
        item.purchasePrice = _purchasePrice;
        item.category = _category;
        item.model = _model;
        item.serialNumber = _serialNumber;
        item.location = _location;
        item.condition = _condition;
    }

    function transferOwnership(uint256 _id, address _newOwner) external {
        require(_id > 0 && _id < nextItemId, "Invalid item ID");
        Item storage item = items[_id];
        require(item.owner == msg.sender, "You don't own this item");

        // Check if the item's auction is not in progress
        require(auctions[_id].endTime == 0 || auctions[_id].endTime <= block.timestamp, "Auction in progress, cannot transfer ownership");

        ownershipHistory[_id].push(_newOwner); // Record ownership change
        item.owner = _newOwner;
    }

    function getMyItems() external view returns (Item[] memory) {
        uint256 itemCount = 0;

        for (uint256 i = 1; i < nextItemId; i++) {
            if (items[i].owner == msg.sender) {
                itemCount++;
            }
        }

        Item[] memory ownedItems = new Item[](itemCount);
        itemCount = 0;

        for (uint256 i = 1; i < nextItemId; i++) {
            if (items[i].owner == msg.sender) {
                ownedItems[itemCount] = items[i];
                itemCount++;
            }
        }

        return ownedItems;
    }

    function getOwnershipHistory(uint256 _id) external view returns (address[] memory) {
        require(_id > 0 && _id < nextItemId, "Invalid item ID");
        return ownershipHistory[_id];
    }
}
