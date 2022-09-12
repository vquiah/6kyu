// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


const encryptThis = function(text) {
    if(text === '') {return '';
       }else {
           let s = text.split(' ');
           let x = s.map(element => {
               let a = element.split('');
               a[0] = element.charCodeAt(0);
               [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
               return a.join('');});
         return x.join(' ');
       }
   }
   /*
   input: str
   output: str
   goal: encrypt each word in my message
     -the first letter must be converted to its ASCII code
     -the second letter must be switched with the last letter
   rules/constraits:
     -letters will be seperated by space
     -there are no speacial characters in input
   question:
     -will the word ever be 1 letter or empty?
   example:
   encryptThis("Hello") === "72olle"
   psuedo:
     - split words with a space separator
     -grab the first letter via slice and convert it to ASCII- will need a variable to hold it
     -
   */ 