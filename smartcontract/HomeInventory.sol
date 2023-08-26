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

    mapping(uint256 => Item) public items;
    mapping(uint256 => address[]) public ownershipHistory; // Ownership history mapping
    uint256 public nextItemId = 1;

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
        ownershipHistory[nextItemId].push(msg.sender); // Record initial owner
        nextItemId++;
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
