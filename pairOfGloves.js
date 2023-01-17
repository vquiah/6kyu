// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
    let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
    let pairs = 0;
    for (let i=1;i<arr.length;i++){
      if (arr[i-1]===arr[i]){
        pairs++
        i++
      }
    }
    return pairs
 }

 function numberOfPairs(gloves) {
    let counter = 0;
    let copyGloves = [...gloves].sort();
    for (let i = 0; i < copyGloves.length; i++) {
        if (copyGloves[i] === copyGloves[i+1]) {
            counter++;
            copyGloves.splice(i, 2)
            i--;
        }
    }
    return counter;
}