var boxHigh = document.querySelector("#uppercase").checked;
var boxLow = document.querySelector("#lowercase").checked;
var boxNum = document.querySelector("#number").checked;
var boxSpec = document.querySelector("#special").checked;
var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password").innerHTML;
var passLength = document.querySelector("#length");
var low = "abcdefghijklmnopqrstuvwxyz";
var high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spec = "!@#$%^&*";
var password = "";
var string = "";

function generateString() {
    if (boxLow = true) {
        string + low;
    };
    if (boxHigh = true) {
        string + high;
    };
    if (boxNum = true) {
        string + num;
    };
    if (boxSpec = true) {
        string + spec;
    };
    console.log(string);
    return string;
};

function generatePassword() {
    for (i = 0; i < length; i++){
    password += string.charAt(
        Math.floor(Math.random() * length));
    };
    return password
};

function writePassword() {
    generateString();
    generatePassword();
    passwordText = password 
    return passwordText
};

generateBtn.addEventListener("click", writePassword)
