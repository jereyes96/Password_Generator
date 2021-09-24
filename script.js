// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  var lenght= 10
  charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-+(){}[]?><"
  retVal= "";
  for (var i=0, n= charset.lenght; i< lenght; ++i){
    retVal += charset.chartAt(Math.floor(Math.random() * n));
  }
}
  

    




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




