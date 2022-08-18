// DESCRIPTION:
// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

function solve(str){
    let len = str.length;
           let count = 0;
          
           for (let i = 0; i < len; i++)
           {
               let r = str[i];
                 console.log(r)
               if (r % 2 !== 0)
                   count += (i + 1);
           }
          
           return count;
   };
   
   /*
   inout: 
     -string of int
   output:
     -RETURN # of odd-num substrings that can be formed
     -a num
   Rules / Requirements:
   
    -#s can't be rearranged
   
   Exampes / Test Cases:
     "1341" ===>  1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
    
     
   Questions / Implicit Reqs:
   - will the input always be a string? -- yes
   - will the input string always be provided? -- yes
   - will the input string ever be an empty string? -- no
   - will the input string only contain num? -- yes
   
   */
