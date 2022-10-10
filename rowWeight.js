// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
function rowWeights(array){
    var odd = 0
    var even = 0
      for(var i=0;i<array.length;i++){
        if(i % 2 == 0){
        odd += array[i]
        } else {
        even += array[i]
        }
      }
      return [odd, even]
  }

  function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }
  /*
  input: arr
  output:arr
  goal: Given an array of positive integers (the weights of the people), 
  return a new array/tuple of two integers, where the first one is the total 
  weight of team 1, and the second one is the total weight of team 2
  rules/constraits:
    -arr size is at least 1
    -all num will be pos
  questions:
  examples:
    rowWeights([13, 27, 49])  ==>  return (62, 27)
  pcode:
    -create two variables one for even num and another for odd nums
    -write a conditional to push odd/even nums into
    -reduce each variable and concat them into a new variable
  */ 