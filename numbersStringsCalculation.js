



// DESCRIPTION:
// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

// So what to do?

// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

// Easy example:
// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)
// First there are some static tests, later on random tests too...




function calculateString(st) {
    const validCharacterString = "0123456789+-*/.";
    const expression = st.split("").filter((character) => validCharacterString.includes(character) === true).join("");
    var result = eval(expression);
    result = Math.round(result).toString();
    return result;
  }

  or

  function calculateString(st){
    let eq = st.split('').filter(char => !isNaN(Number(char)) || char === '.' || char === '+' || char === '-' || char === '*' || char === '/').join('')
    return String(Math.round(eval(eq)))
    // filter st, only accepting numbers, periods, and arithmetic operator
    // split filtered st into two integers, and one operator
    // perform operation
    // return result, rounded to int, in string format
}