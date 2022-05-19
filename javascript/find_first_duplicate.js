// create a function with an array of numbers as argument
function findFirstDuplicate(arr){

  //declare an empty array to store the results
      let results = []

  // itereate through the numbers array using a loop
    for (nums of arr) {
  
     //using if/else statement, check to see if there's a number more than once
      //if yes, return the first number found to the new array
      if (results[nums]) {
      return nums
    }
     //else return -1
     else {
       return results[nums] = nums
     }
  }
   //return -1
  return -1
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution








