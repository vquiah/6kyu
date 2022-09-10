// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equala

function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
             s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
  }
  /*
  input: str
  output: true or false
  rules/req:
    -compare two str using their ASCII character code
    -treat all letters are uppercase
    -if str char is not a letter treat it as empty
    -can have null, treat it as empty
    
  questions:
    -will it always be letters? no, them treat it as empty
    -is it case sensitive? yes, treat it all as uppercase
    -can either agr be empty/null? yes, treat it as empty
    
  example:
    "AD", "BC"  -> true
    "AD", "DD"  -> false
    
  psuedocode:
  -turn str agru to UpperCase
  -check for nonletters, return empty
  -compare ASCII 
  */ 