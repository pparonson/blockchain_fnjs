//import * as R from "ramda";
import sha256 from 'crypto-js/sha256'; 

/*
* index: index of this block in the chain
* timestamp: timestamp of block creation
* data: details of the transaction
* previousHash: hash of the previous block
* hash: hash of this block
*/
function initializeBlock(_index = 0, _data, _previousHash = "") {
  return {
    index: _index,
    timestamp: Date.now(),
    data: _data,
    previousHash: _previousHash,
    hash: calculateHash(
      this.index, 
      this.timestamp, 
      this.data, 
      this.previousHash
    )
  };
}

function calculateHash(index, timestamp, data, previousHash) {
  return sha256(
    index + 
    timestamp + 
    JSON.stringify(data) + 
    previousHash
  ).toString();
}



export {
  initializeBlock,
  calculateHash
}