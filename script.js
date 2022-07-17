// Global variables
var generateBtn = document.querySelector("#generate");
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var space = [];
var toUpper = function (x) {
    return x.toUpperCase();
};
// Converts the lower case string to the upper case
var alpha2 = alpha.map(toUpper);
// On click event listener to trigger the promts password generator
var generateBtn = addEventListener("click", function () {
    passWordGenerate = generatePassword();
    document.getElementById("password").placeholder = passWordGenerate;
});
// Function to generate password. 
function generatePassword() {
    
  enter = parseInt(prompt("How many characters would you like your password to have? Enter a number between 8 and 128"));
    if (!enter) {
        alert("Select a value between 8-128.");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Password must be at least 8 characters and no longer than 128"));
    } else {
        confirmNumber = confirm("Would you like your password to contain numbers?");
        confirmsymbol = confirm("Would you like your password to contain special symbols?");
        confirmUppercase = confirm("Would you like your password to contain uppercase letters?");
        confirmLowercase = confirm("Would you like your password to contain lowercase letters?");
    };

// This goes through all of the possible combinations
    if (!confirmsymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must select at least one option.");
    }    else if (confirmsymbol && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = symbol.concat(number, alpha, alpha2);
    }    else if (confirmsymbol && confirmNumber && confirmUppercase) {
        choices = symbol.concat(number, alpha2);
    }    else if (confirmsymbol && confirmNumber && confirmLowercase) {
        choices = symbol.concat(number, alpha);
    }    else if (confirmsymbol && confirmLowercase && confirmUppercase) {
        choices = symbol.concat(alpha, alpha2);
    }    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }    else if (confirmsymbol && confirmNumber) {
        choices = symbol.concat(number);
    }     else if (confirmsymbol && confirmLowercase) {
        choices = symbol.concat(alpha);
    }     else if (confirmsymbol && confirmUppercase) {
        choices = symbol.concat(alpha2);
    }    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);
    }     else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);
    }     else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }    else if (confirmsymbol) {
        choices = symbol;
    }    else if (confirmNumber) {
        choices = number;
    }    else if (confirmLowercase) {
        choices = alpha;
    }    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var selections = choices[Math.floor(Math.random() * choices.length)];
        password.push(selections);
    }

    var passWordGenerate = password.join("");
    UserInput(passWordGenerate);
    return passWordGenerate;
    };

function UserInput(passWordGenerate) {
    document.getElementById("password").textContent = passWordGenerate;
};


