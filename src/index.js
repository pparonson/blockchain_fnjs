import * as R from "ramda";

import * as sum from "./sum/sum";
import * as block from "./block";
import * as chain from "./blockchain";

// test creation of a newBlockchain
let newBlockchain = chain.initializeBlockchain();

// refactor with currying and composition
let newBlockchain2 = chain.addBlock(
  {
    amount: 4,
    message: "test"
  }, 
  newBlockchain
);

let newBlockchain3 = chain.addBlock(
  {
    amount: 10,
    message: "test"
  }, 
  newBlockchain2
);

R.forEach(item => console.log(`${JSON.stringify(item, null, 2)}`), 
  newBlockchain3);

console.log(chain.isChainValid(newBlockchain3));