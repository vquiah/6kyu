Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.



function sum_pairs (ints, s) {
    // This object will keep track of the numbers seen and their first indexes
    // For an array like [42, 5, 5, 7] we will get { '42': 0, '5': 1, '7': 3 }
    const numbersSeen = {};
  
    for (let i = 0; i < ints.length; i += 1) {
      // For every number...
      const currentNumber = ints[i];
      // Find the pair it needs to add up to "s"
      const pair = s - currentNumber;
  
      // If we've seen the pair before, we have our best set of numbers!
      if (numbersSeen[pair] !== undefined) {
        return [ pair, currentNumber ];
      }
  
      // Otherwise save this number's index if we haven't seen it before
      if (numbersSeen[currentNumber] === undefined) {
        numbersSeen[currentNumber] = i;
      }
    }
  
    // Return "null" if we find nothing after our loop
    return null;
  }