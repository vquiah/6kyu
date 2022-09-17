// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = arr => {
//   let num =0
//   let str =arr.toString().split(',').join('')
//   let final = Number(str.toString(2))
//   return final
//   console.log(final) 

  
// };

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

/*
input: array of num
output: single num
goal: convert the array to its equivlanet binary value of an int
rules/constriates:
  -length of array not limited to 4
  -array will contain only 1s and 0s
questions:
example:
  Testing: [0, 0, 0, 1] ==> 1
  Testing: [0, 0, 1, 0] ==> 2
psuedocode:
  create a new number variable
  loop through array and push el into new variable as numbers
  convert variable to binary value .toString()
*/ 