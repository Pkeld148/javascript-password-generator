// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","?","@","[","]","^","_","`","{","|","}","~","]"];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generatePassword(){
 
  var allChosenCharacters = [];
  var finalPassword = [];

  characterLength = prompt("How many characters long would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 Digits");
  console.log(characterLength);

    if (characterLength > 7 && characterLength < 129) {
    } else {
      return "Please choose password length between 8 and 128 digits! \nPress the button to try again!";
    }

  confirmLowerCase = confirm("Would you like to have lowercase letters as part of your password?");
  if (confirmLowerCase) {
    allChosenCharacters = allChosenCharacters.concat(lowerCase);
  }

  confirmUpperCase = confirm("Would you like to have UPPERCASE letters as part of your password?");
  if (confirmUpperCase) {
    allChosenCharacters = allChosenCharacters.concat(upperCase);
  }

  confirmNumbers = confirm("Would you like to have numbers as part of your password?");
  if (confirmNumbers) {
    allChosenCharacters = allChosenCharacters.concat(numbers);
  }

  confirmSpecialCharacters = confirm("Would you like to have special characters as part of your password? \nExamples: !'*+,-./:;<=>?@^_`{|}~");
  if (confirmSpecialCharacters) {
   allChosenCharacters = allChosenCharacters.concat(specialCharacters);
  }

  console.log(allChosenCharacters);
 

 for (i = 0 ; i < characterLength ; i++) {
   var rand = getRandomInt(allChosenCharacters.length);
  finalPassword.push(allChosenCharacters[rand])
 }


  return finalPassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
