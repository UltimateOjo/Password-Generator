var generateBtn = document.querySelector("#generate");

function generatePassword(string_length) {
  uppercase = prompt('Do you want uppercase letters? y/n');
  numbers = prompt('Do you want lowercase letters? y/n');
  symbols = prompt('Do you want symbols? y/n');

  var random_string = '';
  var characters = '!@#$%^&*()_+}{:"?><,./;[]=-\|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var noUppercase = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+}{:"?><,./;[]=-\|';
  var noNumbers = '!@#$%^&*()_+}{:"?><,./;[]=-\|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var noSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var noUppercaseOrNummbers = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+}{:"?><,./;[]=-\|';
  var noUppercaseOrSymbols = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var noNumbersOrSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var noUppercaseNumbersOrSymbols = 'abcdefghijklmnopqrstuvwxyz';
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  if (uppercase == 'y' && numbers == 'y' && symbols == 'y') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  }
  else if (uppercase == 'n' && numbers == 'y' && symbols == 'y') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noUppercase.charAt(Math.floor(Math.random() * noUppercase.length))
    }
  }
  else if (uppercase == 'y' && numbers == 'n' && symbols == 'y') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noNumbers.charAt(Math.floor(Math.random() * noNumbers.length))
    }
  }
  else if (uppercase == 'y' && numbers == 'y' && symbols == 'n') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noSymbols.charAt(Math.floor(Math.random() * noSymbols.length))
    }
  }
  else if (uppercase == 'n' && numbers == 'n' && symbols == 'y') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noUppercaseOrNummbers.charAt(Math.floor(Math.random() * noUppercaseOrNummbers.length))
    }
  }
  else if (uppercase == 'n' && numbers == 'y' && symbols == 'n') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noUppercaseOrSymbols.charAt(Math.floor(Math.random() * noUppercaseOrSymbols.length))
    }
  }
  else if (uppercase == 'y' && numbers == 'n' && symbols == 'n') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noNumbersOrSymbols.charAt(Math.floor(Math.random() * noNumbersOrSymbols.length))
    }
  }
  else if (uppercase == 'n' && numbers == 'n' && symbols == 'n') { 
    for (var i, i = 0; i < getRndInteger(8,128);i++) {
        random_string += noUppercaseNumbersOrSymbols.charAt(Math.floor(Math.random() * noUppercaseNumbersOrSymbols.length))
    }
  }
  else{
    window.alert("Invalid input")
  }
 
  return random_string
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);