// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_";
var type = [false, false, false, false]; //This is an array that will store the inputs for the types 
/*
type[0] is for lowercase
type[1] is for uppercase
type[2] is for numbers
type[3] is for special
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  length = validLength(); //Valid Length input from the user.  
  wantLowercase();
  wantUppercase();
  wantNumbers();
  wantSpecial();
  return newPassword(length);
}

/*------------------------------ INPUT FUNCTIONS w/ VALIDATION ----------------------------------------------------*/
function validLength(){
  var lengthInput;

  while(true){//This loop runs until user enters valid length 
    lengthInput = prompt("Enter a length for your password (at least 8 characters and at most 128 characters): ");
    if(lengthInput >= 8 && lengthInput <= 128){// Checks for input that is in the range of (8-128)
      break;
    }
   else{// Invaild User Input Alert
     alert("Length is not valid");
   }
  }
  return lengthInput;
}

function wantLowercase(){//This will return true or false
  var lowercaseInput = confirm("Do you want your password to have lowercase letters? \r\n Click OK for 'Yes'. Click Cancel for 'No'");   
  console.log(`The user said: ${lowercaseInput}`); 
  type[0] = lowercaseInput;  
}

function wantUppercase(){//This will return true or false
  var uppercaseInput = confirm("Do you want your password to have uppercase letters? \r\n Click OK for 'Yes'. Click Cancel for 'No'");   
  console.log(`The user said: ${uppercaseInput}`); 
  type[1] = uppercaseInput;  
}

function wantNumbers(){//This will return true or false
  var numberInput = confirm("Do you want your password to have numbers? \r\n Click OK for 'Yes'. Click Cancel for 'No'");  
  console.log(`The user said: ${numberInput}`); 
  type[2] = numberInput;  
}

function wantSpecial(){//This will return true or false
  var specialInput = confirm("Do you want your password to have special characters? \r\n Click OK for 'Yes'. Click Cancel for 'No'");  
  console.log(`The user said: ${specialInput}`);
  type[3] = specialInput;  
}
/*----------------------------- END OF INPUT FUNCTIONS W/ VALIDATION ------------------------------*/

function newPassword(length){
  let mashedArray = ""; //This is for mashing together the other type arrays into one
  let newArray = ""; //This will be the password that is returned

  // False is 0. True is 1. In the form [lowercase] [uppercase] [numbers] [special]
  if(!type[0] && !type[1] && !type[2] && type[3]){ //0001
    return mashedPassword(length, 0, special, newArray); 
  }
  else if(!type[0] && !type[1] && type[2] && !type[3]){ //0010
    return mashPassword(length, 0, numbers, newArray);
  }
  else if(!type[0] && !type[1] && type[2] && type[3]){ //0011
    mashedArray = numbers + special;
    newArray += numbers[random(numbers.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(!type[0] && type[1] && !type[2] && !type[3]){ //0100
    return mashPassword(length, 0, uppercase, newArray);
  }
  else if(!type[0] && type[1] && !type[2] && type[3]){ //0101
    mashedArray = uppercase + special;
    newArray += uppercase[random(uppercase.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(!type[0] && type[1] && type[2] && !type[3]){ //0110
    mashedArray = uppercase + numbers;
    newArray += uppercase[random(uppercase.length)];
    newArray += numbers[random(numbers.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(!type[0] && type[1] && type[2] && type[3]){ //0111
    mashedArray = uppercase + numbers + special;
    newArray += uppercase[random(uppercase.length)];
    newArray += numbers[random(numbers.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 3, mashedArray, newArray);
  }
  else if(type[0] && !type[1] && !type[2] && !type[3]){ //1000
    return mashPassword(length, 0, lowercase, newArray);
  }
  else if(type[0] && !type[1] && !type[2] && type[3]){ //1001
    mashedArray = lowercase + special;
    newArray += lowercase[random(lowercase.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(type[0] && !type[1] && type[2] && !type[3]){ //1010
    mashedArray = lowercase + numbers;
    newArray += lowercase[random(lowercase.length)];
    newArray += numbers[random(numbers.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(type[0] && !type[1] && type[2] && type[3]){ //1011
    mashedArray = lowercase + numbers + special;
    newArray += lowercase[random(lowercase.length)];
    newArray += numbers[random(numbers.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 3, mashedArray, newArray);
  }
  else if(type[0] && type[1] && !type[2] && !type[3]){ //1100
    mashedArray = lowercase + uppercase;
    newArray += lowercase[random(lowercase.length)];
    newArray += uppercase[random(uppercase.length)];
    return mashPassword(length, 2, mashedArray, newArray);
  }
  else if(type[0] && type[1] && !type[2] && type[3]){ //1101
    mashedArray = lowercase + uppercase + special;
    newArray += lowercase[random(lowercase.length)];
    newArray += uppercase[random(uppercase.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 3, mashedArray, newArray);
  }
  else if(type[0] && type[1] && type[2] && !type[3]){ //1110
    mashedArray = lowercase + uppercase + numbers;
    newArray += lowercase[random(lowercase.length)];
    newArray += uppercase[random(uppercase.length)];
    newArray += numbers[random(numbers.length)];
    return mashPassword(length, 3, mashedArray, newArray);
  }
  else if(type[0] && type[1] && type[2] && type[3]){ //1111
    mashedArray = lowercase + uppercase + numbers + special;
    newArray += lowercase[random(lowercase.length)];
    newArray += uppercase[random(uppercase.length)];
    newArray += numbers[random(numbers.length)];
    newArray += special[random(special.length)];
    return mashPassword(length, 4, mashedArray, newArray);
  }
  else{// 0000 false false false false 
    return mashPassword(length, 0, lowercase, newArray);
  }
}

function mashPassword(length, start, mashedArray, newArray){
  /*This takes in the length of the array, the index you wish to start at,
   the array with the characters you selected, and the string that will be 
   concatenated and returned as the final password  */
  for(var i = start; i < length; i++){
    newArray += mashedArray[random(mashedArray.length)];
  }
  return newArray 
}

function random(n){
  console.log( `Length of array: ${n}`)
  var x = Math.floor(Math.random() * n);
  console.log(`Random(): ${x}`);
  return x;
}
