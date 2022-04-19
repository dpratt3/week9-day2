const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here

  let sums = []
  for (let i = 1; i <= 10; i++) {

    startTime = Date.now()
    sums.push(addNums(i * increment))
    endTime = Date.now()

    console.log(`Runtime: ${endTime - startTime}ms`);  // Runtime: 15ms

  }
  return sums;
}
// Then, add timing code
addNums10Timing(10 ** 7)

// Your code here




function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let sums = []
  for (let i = 1; i <= 10; i++) {
    sums.push(addManyNums(i * increment))
  }
  return sums;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
