


var generateBtn = document.querySelector("#generate");
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var space = [];
var choices;
var alpha2 = alpha.map(toUpper);

var generateBtn = addEventListener("click", function () {
    passWordGenerate = generatePassword();
    document.BtnElementById("password").placeholder = passWordGenerate;
});

var toUpper = function (x) {
  return x.toUpperCase();
};

// Function to generate a password
function generatePassword() {
    var enter = parseInt(prompt("How many symbols would you like your password? Select between 8 and 128"));
    if (!enter) {
        alert("Select a value between 8-128");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Password must be at least 8 characters and no longer than 128"));

    } else {
        var confirmNumber = confirm("Would you like your password to contain numbers?");
        var confirmsymbol = confirm("Would you like your password to contain special symbols?");
        var confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
        var confirmLowercase = confirm("Would you like your password to Lowercase letters?");
    };
  }