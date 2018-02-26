//import * as R from "ramda";

import * as block from "./block";

function initializeBlockchain() {
  return [createGenesisBlock()];
}

function createGenesisBlock() {
  return block.initializeBlock(0, {message: "genesisBlock"}, "0");
}

function getLatestBlock(chain) {
  return chain[chain.length - 1];
}

// returns new array with new added block
function addBlock(_data, _chain) {
  //let chain = _chain;
  let _index = _chain.length;
  let _timestamp = Date.now();
  let latest = getLatestBlock(_chain);
  let _previousHash = getLatestBlock(_chain).hash;

  let newBlock =  {
    index: _index,
    timestamp: _timestamp,
    data: _data,
    previousHash: _previousHash,
    hash: block.calculateHash(
      _index,
      _timestamp,
      _data,
      _previousHash
    )
  };

  _chain.push(newBlock);
}


export {
  initializeBlockchain,
  addBlock
}