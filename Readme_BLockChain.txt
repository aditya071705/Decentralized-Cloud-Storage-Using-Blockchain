Decentralized Cloud Storage Using Blockchain

Project Description

This project implements a decentralized cloud storage system using blockchain technology. It leverages the security and immutability of blockchain for storing file metadata and the efficiency of the InterPlanetary File System (IPFS) for decentralized file storage. By combining these technologies, the system ensures data integrity, security, and availability, while providing users with full control over their files. Tools like MetaMask, Ganache, Remix IDE, IPFS, Pinata server, and React.js are used to create a user-friendly and robust solution.


Features

- Decentralized File Storage: Files are stored on IPFS, ensuring redundancy and accessibility.
- Blockchain Integration: Metadata, including file hashes (CIDs), is stored on the blockchain, ensuring immutability.
- Secure Transactions: Transactions are signed using MetaMask for authentication and security.
- Smart Contracts: Solidity-based contracts manage file ownership and access control.
- Web3 Integration: React.js is used to build a frontend for seamless interaction with the blockchain.
- Access Control: Smart contracts enforce permissioned access to stored files.


Prerequisites

To set up and run the project, ensure you have the following installed:

1. Node.js (v14.0 or later)
2. MetaMask browser extension
3. Ganache for local blockchain setup
4. Remix IDE for smart contract development
5. IPFS for local file storage
6. Pinata Account for persistent IPFS file hosting
7. React.js for the frontend


Installation Steps

1. Blockchain Environment Setup

-- Install Ganache and create a new workspace to simulate a local Ethereum blockchain.
-- Configure MetaMask to connect to the Ganache blockchain by adding a custom RPC endpoint (e.g., http://127.0.0.1:7545).
-- Note the private keys from Ganache and import them into MetaMask for testing.

2. Smart Contract Deployment

-- Open Remix IDE and create a Solidity file (e.g., Storage.sol).
-- Write the smart contract to handle metadata storage and access control.
-- Compile the contract and deploy it to the Ganache network using the injected Web3 provider (MetaMask).
-- Copy the deployed contract’s address for frontend integration.

3. IPFS Configuration

-- Install the IPFS and initialize a local IPFS node:

   ipfs init
   ipfs daemon
   
-- Use Pinata to pin files persistently and get their CIDs.
-- Store the CIDs on the blockchain via the deployed smart contract.

4. Frontend Setup

-- Clone the project repository and navigate to the frontend directory.
-- Install dependencies using:
   
   npm install
   
-- Update the smart contract address and ABI in the frontend configuration.
-- Start the development server:
   
   npm start
   
5. Running the Project

-- Upload a file using the frontend interface.
-- File metadata (CID) is sent to the blockchain via a smart contract.
-- Retrieve the file using its CID from IPFS.



Project Structure

- contracts/: Contains Solidity smart contracts for managing file metadata and access control.
- frontend/: React.js code for the user interface.
- src/components/: React components for user interactions (e.g., file upload, retrieval).
- src/utils/: Contains Web3.js and IPFS helper functions.
- scripts/: Deployment and interaction scripts for smart contracts.


Credits:

Prof. Amith K S 
Assistant Professor
SDMIT, Ujire
Guide of this project

Created by:

Dhruti P C (USN: 4SU21AD017)
Pruthvi K R (USN: 4SU21AD036)
Spoorthi H M (USN: 4SU22AD53)
Aditya S N (USN: 4SU22AD058)

For any queries, feel free to contact: gowdaaditya11@gmail.com

