
function findFirstDuplicate(arr) {
  // type your code here
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




// create a function with an array of numbers as argument
  function findIDuplicate(arr){

  //declare an empty array to store the results
      let results = []

  // itereate through the numbers array using a loop
    for (num of arr) {
      console.log(num)
  
     //using if/else statement, check to see if there's a number more than once
      //if yes, return the first number found to the new array
      if (results[nums]) {
      return num
    }
     //else return -1
     else {
       return results[num] = num
     }
  }
   //return -1
  return -1
}



