// Assignment Code
var generateBtn = document.querySelector("#generate");

//empty arrays for variables
let allPossibleSpecialChar = ["!", "#", "$", "%", "&", "*", "+", "-", "?", "@"];
let allPossibleUpperCase = ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let allPossibleLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let allPossibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let allPossibleOptions = [];

function userPrompt() {
  var passwordLength = prompt("How long do you want your password to be?");

  if (passwordLength < 8) {
    alert("password must be at least 8 characters long.")
    userPrompt();
  } else if (password > 128) {
    alert("password must be no more than 128 characters.")
  }

  let specialCharacters = function(){
    confirm("Would you like to include special characters in your password?")
    if (specialCharacters) {
      allPossibleOptions = allPossibleOptions.concat(allPossibleSpecialChar); 
    }
    console.log(allPossibleOptions);
  };
  
  let upperCase = function() {
    confirm("Would you like to include uppercase letters in your password?");
    if(upperCase) {
      allPossibleOptions = allPossibleOptions.concat(allPossibleUpperCase);
    }
    console.log(allPossibleOptions);
  };
  
  let lowerCase = function() {
    confirm("Would you like to include lowercase letters in your password?");
    if (lowerCase) {
      allPossibleOptions = allPossibleOptions.concat(allPossibleLowerCase);
    }
    console.log(allPossibleOptions);
  };
  
  let num = function() {
    confirm("Would you like to include numners in your password?");
    if (num) {
      allPossibleOptions = allPossibleOptions.concat(allPossibleNumbers)
    }
    console.log(allPossibleOptions);
  };
  specialCharacters();
  upperCase();
  lowerCase();
  num();

};
userPrompt();





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
