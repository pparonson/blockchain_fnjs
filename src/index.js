import * as R from "ramda";

import * as sum from "./sum/sum";
import * as block from "./block";
import * as blockchain from "./blockchain";

// let result  = sum.add(1);
// console.log(result);
// let result2 = result(2);
// console.log(result2);

// test creating of a newBlock
// let newBlock = block.initializeBlock(0, {message: "testBlock"});
// console.log(JSON.stringify(newBlock, null, 2));

// test creation of a newBlockchain
let newBlockchain = blockchain.initializeBlockchain();
R.forEach(item => console.log(`${JSON.stringify(item, null, 2)}`), 
  newBlockchain);

blockchain.addBlock({amount: 4}, newBlockchain);
blockchain.addBlock({amount: 10}, newBlockchain);

R.forEach(item => console.log(`${JSON.stringify(item, null, 2)}`), 
  newBlockchain);