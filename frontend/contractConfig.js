// contractConfig.js
window.contractConfig = {
    contractAddress: '0xD2F5793e91D3043002f478aa06A023D4FAE12777',
    contractABI: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchaseDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchasePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_category",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_model",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_serialNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_location",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_condition",
                    "type": "string"
                }
            ],
            "name": "createItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                }
            ],
            "name": "finalizeAuction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bidAmount",
                    "type": "uint256"
                }
            ],
            "name": "placeBid",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_autoRenew",
                    "type": "bool"
                }
            ],
            "name": "setAutoRenew",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_basePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_durationInHours",
                    "type": "uint256"
                }
            ],
            "name": "startAuction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchaseDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchasePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_category",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_model",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_serialNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_location",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_condition",
                    "type": "string"
                }
            ],
            "name": "updateItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "auctions",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "highestBidder",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "highestBid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "basePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "depositedAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "autoRenew",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                }
            ],
            "name": "getAuctionDetails",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "itemId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "highestBidder",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "highestBid",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "basePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "depositedAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "autoRenew",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct HomeInventory.Auction",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAuctionItems",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "itemId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "highestBidder",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "highestBid",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "basePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "depositedAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "autoRenew",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct HomeInventory.Auction[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getItem",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "purchaseDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "purchasePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "category",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "model",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "serialNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "condition",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct HomeInventory.Item",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMyItems",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "purchaseDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "purchasePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "category",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "model",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "serialNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "condition",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct HomeInventory.Item[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getOwnershipHistory",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "items",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "purchaseDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "purchasePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "category",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "model",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "serialNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "condition",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextAuctionId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextItemId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ownershipHistory",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
