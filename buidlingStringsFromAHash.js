// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


const solution = pairs =>
    Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',');
// function solution(pairs){
//   return Object.keys(pairs).map(function(value){return value + " = " + pairs[value];}).join(',');
// }

// function solution(pairs) {
//   let string = ""
//   for ( let key in pairs) {
//     string += key + " = " + pairs[key] + "," 
//  } 
//  return string.slice(0,-1)  
// }

  
/*
PREP
input: object
output: str
ruls/req: 
  formate in 'key = value' seperated by comma except for last pair
questions:
  ...
example: 
  {a: 1, b: '2'} // should return "a = 1,b = 2"
psuedocode:
1. loop thru object to give individual els
2. split on : or replace : with =
3. join using , seperator
*/ 