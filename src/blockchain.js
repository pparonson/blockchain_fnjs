// import * as R from "ramda";

import * as block from "./block";

const initializeBlockchain = () => [createGenesisBlock()];

const createGenesisBlock = () => block.initializeBlock(
  0, 
  {
    amount: 50,
    message: "genesisBlock"
  }, 
  "0"
);

const getLatestBlock = chain => chain[chain.length - 1];

const getPreviousHash = chain => getLatestBlock(chain).hash;

// returns new array with new added block
const addBlock = (_data, _chain) => {
  let index = _chain.length;
  let previousHash = getPreviousHash(_chain);
  let newBlock = block.initializeBlock(index, _data, previousHash)

  // add the block to the new chain array and return it
  return [..._chain, newBlock];
};

const isChainValid = _chain => {
  let latestBlockPreviousHash = getLatestBlock(_chain).previousHash;
  let previousBlockHash = _chain[getLatestBlock(_chain).index - 1].hash;

  return latestBlockPreviousHash === previousBlockHash ? true : false;
};

export {
  initializeBlockchain,
  addBlock,
  isChainValid
}