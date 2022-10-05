// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values ){
//   let result = []
//   let s = values.filter(a=>a%2==0)
//   return s
//   console.log(s)
//  }
const noOdds =  values =>  values.filter(a=>a%2==0)
/*
input: arr of num
output: arr of num
goal: return arr without odd int
rules/constriats:
  -all arr will be int
  -return new arr in it's given order
question:
  -will arr be enpty?
example:
  [0,1,2,3] )==>[0,2]
pcode:
create a new variable for even num
loop thu given arr
push even int into var
return new var

*/ 