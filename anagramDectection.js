// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  //   let t = test.split('').toLowerCase()
  //   let o = original.split('').toLowerCase()
  //   const ans = t.includes(o) ? true : false
  //   return ans
   /* pcode:
    use split to get individual chars
    
  */
  };
  /*
  input: str
  output: str
  goal: return true if the two arguments given are anagrams of each other, false otherwise
  rules/constriats:
    -anagrams are case insensitive
  example:
    -isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT'
    -isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble'
  
  */ 