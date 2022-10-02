// DESCRIPTION:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    return str.replace(/\d+/g,v=>String.fromCharCode(v*1)).split(' ')
   .map(v=>v.length>2?v.slice(0,1)+v.slice(-1)+v.slice(2,-1)+v.slice(1,2):v).join` `
 }; 
 /*
 input: str
 output: str
 goal: decipher a message
 rules/constriats:
   -the second and last letters are switch
   -the first letter is replaced by it charCode
     -string will contain int
   -results will only have letters and spaces, no other special chars
 question:
   -will i get an exmty str
 example:
   decipherThis('72olle 103doo 100ya'); // 'Hello good day'
 */ 

   const decipherThis = text => text
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];

        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ')
    