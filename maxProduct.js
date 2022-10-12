function adjacentElementsProduct(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length -1; i++) {
      if (array[i] * array[i + 1] > max) max = array[i] * array[i + 1];
    }
    return max;
  }

  function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    for (let i = 1; i < array.length - 1; i++) {
      max = Math.max(max, array[i] * array[i + 1])
    }
    return max
  }

  function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i)=>n*array[i-1]).slice(1));
  }
  /*
  input: array of num, 
  output: single num
  goal: take given array of int, find the max product ( multiplication)
        from two adjacent nums in the array
  rules/constriats: 
      -pos int or mixed? mixed
      -empty array? No, at least 2
      -
  example:
    adjacentElementsProduct([1, 2, 3]); ==> return 6
      2 * 3 = 6
  pcode: 
  sort the array @asce
  slice the last two and reduce it 
  
  */ 