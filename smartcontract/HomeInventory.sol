// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HomeInventory {
    address public owner;
    
    struct Item {
        string name;
        string description;
        uint256 purchaseDate; // Pass Unix timestamp here
        uint256 purchasePrice;
        string category;
        string model;
        string serialNumber;
        string location;
        string condition;
        address owner;
        uint256 id;
    }

    Item[] public items;
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
            id: nextItemId++
        });
        
        items.push(newItem);
    }

    function getItemsCount() external view returns (uint256) {
        return items.length;
    }

    function getItem(uint256 _index) external view returns (Item memory) {
        require(_index < items.length, "Invalid index");
        return items[_index];
    }

    function updateItem(
        uint256 _index,
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
        require(_index < items.length, "Invalid index");
        require(items[_index].owner == msg.sender, "You don't own this item");
        
        items[_index].name = _name;
        items[_index].description = _description;
        items[_index].purchaseDate = _purchaseDate;
        items[_index].purchasePrice = _purchasePrice;
        items[_index].category = _category;
        items[_index].model = _model;
        items[_index].serialNumber = _serialNumber;
        items[_index].location = _location;
        items[_index].condition = _condition;
    }

    function transferOwnership(uint256 _index, address _newOwner) external {
        require(_index < items.length, "Invalid index");
        require(items[_index].owner == msg.sender, "You don't own this item");

        items[_index].owner = _newOwner;
    }

    function getMyItems() external view returns (Item[] memory) {
        uint256 itemCount = 0;

        // Count the number of items owned by the caller
        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].owner == msg.sender) {
                itemCount++;
            }
        }

        // Create an array to hold the owned items
        Item[] memory ownedItems = new Item[](itemCount);
        itemCount = 0;

        // Populate the ownedItems array with owned items
        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].owner == msg.sender) {
                ownedItems[itemCount] = items[i];
                itemCount++;
            }
        }

        return ownedItems;
    }
}
