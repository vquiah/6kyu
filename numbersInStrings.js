// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(s){
    return Math.max(...s.match(/\d+/g))
  };
  
  /*
  input: num and letter..str
  output: num
  task: given a str of mixed letters and nums, return the largest num grouping
  rules/req: 
    -return the largest grouping num
    -no leading zeros
    -
  question: 
    -will there be an empty str? no
    -
  example: 
    -solve("gh12cdy695m1") = 695
    
  psuedocode:
    
  */ 