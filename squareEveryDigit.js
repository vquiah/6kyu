
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    let result = num
      .toString()                     // turn number to string
      .split("")                      // turn string into array
      .map( num => parseInt(num) )    // map each index and return a number, now you have a number array
      .map( num => num * num )        // map the number array and return the square of each number
      .join("")                       // turn the number array into a string
     
    return parseInt(result)           // turn the string into a number
  }