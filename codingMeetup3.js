//  DESCRIPTION:
//  You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
 
//  Your task is to return:
 
//  true if at least one Ruby developer has signed up; or
//  false if there will be no Ruby developers.
//  For example, given the following input array:
 
//  var list1 = [
//    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
//  ];
//  your function should return true.
 
//  Notes:
 
//  The input array will always be valid and formatted as in the example above.


function isRubyComing(list) {
    let res = list.some(a=>a.language == 'Ruby')
    if(res){
      return true
    }else{
      return false
    }
    }
  
  
  /*
  input: array of objects
  output: boolean
  goal: return true if one Ruby dev signed up and false if no ruby dev signed up
  rules/constraits: inout array will always be valid
  questions:
  example: 
    var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];
  will return true
  
  psuedocode:
    filter thru the array of object
    use some() method
  
  */ 