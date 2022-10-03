// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    s=s.split``
    let arr = []
    
    s.forEach(char => {
      if (char != '#') {
      arr.push(char)    
    } else {
      arr.pop()
    }
    })
    
    return arr.join('')
    
  };