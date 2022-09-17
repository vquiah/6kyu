// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  
    let arr = array.reduce((a,b)=>a+b,0)
 //    let emptyA = [0]
 //    if(array === []){
 //     return array = emptyA
 //      console.log(array)
 //    }
   if(arr % 2 == 0){
       return 'even'
     }else{
       return 'odd'
     }
 }
 
 /*
 input: array of num
 output: str
 goal: determine id the sum of the given int is odd or even
 rules/constriats:
   -input is num
   -num can be pos or neg
   -array/input can be empty, if empty, consider it as [0], array with a zero
 question:
 example"
   Input: [0, 1, 4]
   Output: "odd"
   
   Input: [0]
   Output: "even"
 psuedo-code:
   use reduce to get the sum of the array int
   use conditional to test if odd or even
   
 */ 