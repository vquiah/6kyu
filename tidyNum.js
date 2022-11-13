// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

const tidyNumber = (n, str = [...String(n)].sort((a,b)=> a - b).join('')) => str === String(n)
or 

const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    
    return true;
  }



  