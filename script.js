// Assignment code here

var numbers = "0123456789";
var passLength = document.getElementById("slider");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*";
var box1 = document.getElementById("uppercase");
var box2 = document.getElementById("lowercase");
var box3 = document.getElementById("numbers");
var box4 = document.getElementById("special");
var password = "boobs";

box2.addEventListener("click", addUppercase);
function addUppercase() {}

box3.addEventListener("click", addNumbers);
function addNumbers() {}

box4.addEventListener("click", addSpecial);
function addSpecial() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function writePassword() {
  var password = document.querySelector("#password");
  }

function generatePassword() {
  for (var i = 0; i < passLength; i++) {
    password += characters.charAt(
    Math.floor(Math.random() * passLength.value));
    }
    return password;
}




