// Code your solution here!

function printString(string){
  
  console.log(string.substring(0, 1));
  if (string.length > 1) {
    
    printString(string.substring(1));
  } else {
    return "";
  }
}

function reverseString(string){
  if (string.length > 0) {
    return reverseString(string.substring(1)) + string.substring(0, 1);
    
  } else {
    return string;
  }
}

function isPalindrome(string){
    if (string.length > 1) {
      if (string.substring(string.length - 1) == string.substring(0, 1)){
      
        isPalindrome(string.substring(1, string.length - 1));
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
}

function addUpTo(array, index){
  
  if (index > 0) {
    return addUpTo(array, index - 1) + array[index];
  } else {
    // assumes array has elements
    // added or to account for missing value
    if (array.length > 0)
      return array[0];
    return 0;
  }
}

function maxOf(array){
  if (array.length > 1) {
    let index = array[0] > array[array.length - 1] ? array.indexOf(array[array.length - 1]) : array.indexOf(array[0]);
    let newArray = [...array];
    newArray.splice(index, 1);
    
    return maxOf(newArray);
    
  } else{ 
  return array[0];
  }
}

function includesNumber(array, val){
  // [1, 4, 5, 3], 5 => true
  if (array.length > 1) {
    if (array[0] === val)
      return true;
    return includesNumber(array.splice(0,1), val);
  } else {
    return false;
  }
}