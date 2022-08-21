// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


function parse( data ) {  
    var v = 0, ret = []
    for (var c of data) {
      switch (c) {
        case 'i' : v++;         break;
        case 'd' : v--;         break;
        case 's' : v=v*v;       break;
        case 'o' : ret.push(v); break;
      }
    }
    return ret;
  }


  function parse( data )
{

var response = [];
var num = 0;

data.split("").forEach(function(val) {

if (val == "d") {
  num--;
} else if (val == "i") {
  num ++;
} else if (val == "s") {
  num = num*num;
} else if (val == "o") {
  response.push(num);
}
    
});

return response;
  
}
