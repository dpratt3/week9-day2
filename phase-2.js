const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sums = []
  for(let i = 1; i <= 10; i+= increment){
    sums.push(addNums(i))
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
}

module.exports = [addNums10, addManyNums10];