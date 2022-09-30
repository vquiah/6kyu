// DESCRIPTION:
// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    return num.toString().
      replace(/([13579])/g,'-$1-'). // dashes around odd digits
      replace(/\-+/g,'-'). // replace multiple dashes by one dash
      replace(/^\-/,''). // remove starting dash
      replace(/\-$/,''); // remove ending dash
}


function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
  };