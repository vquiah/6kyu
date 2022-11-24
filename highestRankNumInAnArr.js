// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
  }


  function highestRank(arr){
    var max = 0;
    var fr = 1;
    var res = 0;
    arr.sort();
  
    for (var i=0; i<arr.length; i++){
      if (arr[i] == arr[i+1]){
         fr++;       
      }
      
      else{
        if (fr>=max){
            res = arr[i];
            max = fr;
            fr = 1;
        }     
        }
    }
    
    return res;
  }