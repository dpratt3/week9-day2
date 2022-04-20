const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {

  let sums = []
  for (let i = 1; i <= 10; i++) {
    //console.time()
    let start = Date.now()
    sums.push(addNums(i * increment))
    let end = Date.now()

    console.log(end - start)
  }
  return sums;
}

addNums10Timing(10**8)

// Your code here

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  // Your code here
  let sums = []
  for(let i = 1; i <= 15; i++){
    let start = Date.now()
    sums.push(addManyNums(i * increment))
    let end = Date.now()
    console.log(end - start)
  }
  return sums;
}

addManyNums10Timing(10)

n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
