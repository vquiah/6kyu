// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
            s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
  };
  // input: str
  // output: arr
  // goal: return an array where even indices and old indices
  // rules/constriats: 
  //   -0 is considered even
  //   -strings will be lowecases
  //   -no spaces in str
  // questions:
  // example:
  //   -capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
  // pcode:
  //   1. conditional for both even and odd indices (need their own variables?)
  //   2.concat both varibales into a final variable and return result