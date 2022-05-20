var boxHigh = document.querySelector("#uppercase");
var boxLow = document.querySelector("#lowercase");
var boxNum = document.querySelector("#numbers");
var boxSpec = document.querySelector("#special");
var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password");
var passLength = document.querySelector("#length").value;
var low = "abcdefghijklmnopqrstuvwxyz";
var high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spec = "!@#$%^&*";
var password = "";
var string = "";


function generateString() {
    if (boxLow.checked) {
        string += low;
    };
    if (boxHigh.checked) {
        string += high;
    };
    if (boxNum.checked) {
        string += num;
    };
    if (boxSpec.checked) {
        string += spec;
    };
    console.log(string);
    return string;
};

function generatePassword() {
    if (string === ""){
        window.alert("You must select a box!");
    } else { 
        password = "";
        for (var i = 0; i <= passLength; i++) {
            var randomNumber = Math.round(Math.random() * string.length);
            password += string.charAt(randomNumber);
            console.log(password);
        };
    }

};

function writePassword() {
    generatePassword(generateString());
    passwordText.value = password; 
    return passwordText;
};

generateBtn.addEventListener("click", writePassword)
