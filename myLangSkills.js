// DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// function myLanguages(results) {
//   let res = []
//   let r = Object.values(results).sort((a,b)=>a-b)
//   console.log(Object.values(results))
//   console.log(Object.keys(results).sort((a,b)=>a-b))
//   let s = Object.values(results).filter(z=> z > 60)
//   if(Object.values(results) >60){
// //     res.push(Object.keys(results))
//     console.log(Object.keys(results))
//   }
//   console.log(res)
//   return res
  
// }
function myLanguages(results) {
    let result = [];
    for (let i in results) {
      if (results[i] > 59) {
        result.push(i);
      }
    }
    return result.sort((a, b) => results[b] - results[a]);
  }