// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for all possible characters
var allPossibleSpecialChar = ["!", "#", "$", "%", "&", "*", "+", "-", "?", "@"];
var allPossibleUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var allPossibleLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var allPossibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//emplty array to store my character options
var allPossibleOptions = [];

//variable for my password length question
var passwordLength;

//function to determine if it is prompt, confirm, or alert
function generatePrompts(question, type, characterSet) {
  var answer;
  if (type === "prompt") {
    answer = prompt(question);
  } else if (type === "confirm") {
    answer = confirm(question);
    if (answer === true) {
      allPossibleOptions = allPossibleOptions.concat(characterSet);
    }
  } else {
    answer = alert(question);
  }
  return answer;
}

//function to create password options
function createPassword() {
  //clears array each time the function runs
  allPossibleOptions = [];
  //intial prompt to get password length
  passwordLength = generatePrompts(
    "How long do you want your password to be?",
    "prompt"
  );
  //verifying password is within the length requirements
  if (passwordLength < 8) {
    generatePrompts("password must be at least 8 characters long.");
    createPassword();
  } else if (passwordLength > 128) {
    generatePrompts("password must be no more than 128 characters.");
    createPassword();
  }

  //confirm types of characters user would like to include
  var askPrompts = function () {
    generatePrompts(
      "Would you like to include special characters in your password?",
      "confirm",
      allPossibleSpecialChar
    );
    generatePrompts(
      "Would you like to include numbers in your password?",
      "confirm",
      allPossibleNumbers
    );
    generatePrompts(
      "Would you like to include lowercase letetrs in your password?",
      "confirm",
      allPossibleLowerCase
    );
    generatePrompts(
      "Would you like to include uppercase letters in your password?",
      "confirm",
      allPossibleUpperCase
    );
  };

  askPrompts();
  writePassword();
}

//function to randomly create password from the allPossibleOptions array
function generatePassword() {
  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var returnedChar =
      allPossibleOptions[Math.floor(Math.random() * allPossibleOptions.length)];
    password.push(returnedChar);
  }

  return password.join("");
}

//function to generate my password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
