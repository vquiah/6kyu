// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){

    /*
    split the x into each word and convert to an array
    if
      x.length < 4, do nothing
    else
      if x.length is even, split x in half and reverse than join
      if x.length is odd, 
    return and join everything back together
    */
    
    return x.split` `.map(v=>{
      if (v.length<4) return v
      let left = v.slice(0,v.length/2).split``.reverse().join``
      let right = v.slice(v.length/2).split``.reverse().join``
      let center = ''
      if (v.length%2!==0){
        right=v.slice(v.length/2+1).split``.reverse().join``
        center=v.slice(v.length/2,v.length/2+1)
      }
      return left+center+right
    }).join` `
  
  }
  
  /*
  input:
    string of words //are they case sensitive?
    
  
  output:
    return each word within the string 'inside out'
      meaning-- innternal letters move out and internal letters move in/center
    if word is even:
      all letters will move
    if word is odd:
      leave middle letter untouched
  
  example:
    for an even word=== 'love'=> 'olev'
    for an odd word === 'man' => 'man'
  */