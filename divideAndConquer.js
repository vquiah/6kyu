// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// FUNDAMENTALSSTRINGSARRAYS

function divCon(x){
    let num = []
    let str = []
    for( let s of x){
      if(typeof s === "string"){
       let n = s
       str.push(s)
      }else{
        num.push(s)
      }
    }
      return num.reduce((e,r)=>e+r,0) - str.reduce((a,v)=>+a+ +v,0) 
    
    }
    /*
    input: array of str and num int
    output: single num
    goal: add up str int and sub num from array, return a num
    rules/contraits: 
    question
      -will there be neg num?
      -will the array always be mixed?
    example:
      [9, 3, '7', '3'] ==> 2
      9+3= 12
      '7'+'3'='10'
      12 - '10'=3
      
    psuedocode:
    
      loop through array
      create two variables
        -if typeof push into array
      reduce both variables
      return the sub of that 
      
    */ 