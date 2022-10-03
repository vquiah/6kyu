// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string
function maskify(cc) {
    if(cc.length<5){
      return cc
    }else{
     
      let a = cc.slice(0,-4)
      let b = cc.slice(-4)
      let r = ''
     for(let o of a){
       console.log(o.replace(o, '#'))
       r += o.replace(o, '#') 
     }
      return r + b
    }
  
  }

  function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }
  /*
  input: str
  output: str
  goal: change all characters except for last 4 into #
  rules/contraits:
    -input can be empty
    -specail char counts
    -input can be num
  question: 
  exampel:
    'Happy'===>'#appy'
  pcode:
  if 
    cc.length < 5 return as is
      else 
        
  slice 
  
  */ 