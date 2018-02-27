// import * as R from "ramda";
import sha256 from 'crypto-js/sha256'; 

/*
* index: index of this block in the chain
* timestamp: timestamp of block creation
* data: details of the transaction
* previousHash: hash of the previous block
* hash: hash of this block
*/
const initializeBlock = (index = 0,  _data, previousHash = "") => {
  let timestamp = Date.now();
  let data = _data;
  //let previousHash = _previousHash;

  return {
    index, 
    timestamp, 
    data, 
    previousHash,
    hash: calculateHash(index, timestamp, data, previousHash)
  };
}

// impure: sha256 causes side effects
const calculateHash = (index, timestamp, data, previousHash) => 
  sha256(index + timestamp + JSON.stringify(data) + previousHash).toString();

export {
  initializeBlock,
  calculateHash
}