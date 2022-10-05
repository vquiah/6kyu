
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0




function checkExam(array1, array2) {
    var score = 0;
      for (var i = 0; i < array2.length; i++){
          if (array2[i] === ""){
             score += 0
          } else if (array1[i] === array2[i]){
              score += 4
          } else if (array1[i] !== array2[i]){
             score -= 1
          }
      } 
        if (score >= 0){
          return score;
        } else {
          return 0
        }
   }


   const checkExam = (array1, array2) => {
    let result = array2.reduce(
      (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
  }

  function checkExam(arr1, arr2) {
    let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c+4 : c-1) : c, 0);
    return result < 0 ? 0 : result;
  }

  function checkExam(array1, array2) {
    const arr = array2.map((el,i)=> array1[i] === el ? 4 : el === '' ? 0 : -1)
    return arr.reduce((a,b)=> a+b, 0) > 0 ? arr.reduce((a,b)=> a+b, 0) : 0
  }
   /*
   input: array of str
   output: num
   goal: return a sum of student score
   rule/constrait:
     -arr are the same length
     -(4) pt for correct ans
     -(-1) pt for incorrect ans
     -(0) pt for blank ans
     -return 0 for score < 0
   example:
     -checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
   pscode:
     -
     -will need to reduce
     -
   */ 