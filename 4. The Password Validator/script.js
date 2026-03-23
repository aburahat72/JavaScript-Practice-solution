let password = "Auogfhfhfh@321";
let Uppercase = false;
let Lowercase = false;
let Number = false;
let SpecialCharacter = false;

if (password.length < 8) {
  console.log("Invalid password: Password must be at least 8 characters long.");
} else{
    for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      Uppercase = true;
    } else if (password[i] >= "a" && password[i] <= "z") {
      Lowercase = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      Number = true;
    } else if (
      password[i] == "@" ||
      password[i] == "#" ||
      password[i] == "$" ||
      password[i] == "%"
    ) {
      SpecialCharacter = true;
    }
  }
  if (Uppercase && Lowercase && Number && SpecialCharacter) {
    console.log("password is valid");
  } else {
    console.log("password is invalid required missing chracters");
  }
}
