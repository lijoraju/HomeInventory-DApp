# Home Inventory Decentralized Application (DApp)

## Overview

The Home Inventory DApp is a decentralized application built on the Ethereum blockchain that allows users to manage their home inventory using smart contracts. This DApp enables users to create, update, and transfer ownership of items securely and transparently on the blockchain.

## Features

- **Smart Contract:** The project includes a Solidity smart contract that manages inventory items, their details, ownership, and transfers.

- **Web3 Integration:** The DApp utilizes the web3.js library to connect the front-end with the Ethereum blockchain, enabling interaction with the smart contract functions.

- **User-Friendly Interface:** The front-end interface provides a user-friendly and intuitive way for users to interact with the DApp's features.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lijoraju/HomeInventory-DApp.git

2. Install dependencies:
   ```bash
   cd home-inventory-dapp
   npm install
   
3. Configure Ganache:
   * Start a local Ethereum blockchain using Ganache.
   * Update the truffle-config.js with the Ganache network configuration.
     
5. Compile and deploy the smart contract:
   ```bash
   truffle compile
   truffle migrate --network ganache
   
6. Run the development server:
   ```bash
   npm start

7. Access the DApp in your browser at `http://localhost:3000`.

### Usage
* Create new items in your home inventory by filling in the required details.
* Update item details as needed.
* Transfer ownership of items to other Ethereum addresses.

