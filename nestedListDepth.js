// A nested list (or array in JavaScript) is a list that apears as a value inside another list,

// [item, item, [item, item], item]
// in the above list, [item, item] is a nested list.

// Your goal is to write a function that determines the depth of the deepest nested list within a given list.
// return 1 if there are no nested lists. The list passed to your function can contain any data types.

// A few examples:

// arrayDepth([true]) // returns 1

// arrayDepth([]) // returns 1

// arrayDepth([2, "yes", [true, false]]) // returns 2

// arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]) // returns 6

// arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]) // returns 2

const arrayDepth = array =>
  array.reduce((acc, i) => (Array.isArray(i) ? arrayDepth(i) + 1 : acc), 1);