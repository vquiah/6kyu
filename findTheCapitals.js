 // DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
    let final = []
      let split = word.split('')
   
    for (let s of split){
      if (s === s.toUpperCase()){
        final.push(split.indexOf(s))
        
      }
    }    
    return final
  };
  
  /*
  input: str
  output: array, num
  goal: return an ordered liste of containing the indexes of all capital letters in the str
  rules/constraits:
  questions: 
  example: HaPpY ==> [0,2,4]
  
  psuedocode:
    create an empty array variable
    split word
    loop through letter, pushing the index of the uppercase letters into array
    return array
    
    
  
  
  */ 