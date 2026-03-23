let password = "AbuRahat321";

let hasUppercase = false;
let hasLowercase = false;
let hasDigit = false;

if (password.length < 8) {
  console.log("Invalid Password - Must be at least 8 characters long");
} else {

  for (let i = 0; i < password.length; i++) {

    if (password[i] >= "A" && password[i] <= "Z") {
      hasUppercase = true;

    } else if (password[i] >= "a" && password[i] <= "z") {
      hasLowercase = true;

    } else if (password[i] >= "0" && password[i] <= "9") {
      hasDigit = true;
    }

    // Optional optimization
    if (hasUppercase && hasLowercase && hasDigit) {
      break;
    }
  }

  if (hasUppercase && hasLowercase && hasDigit) {
    console.log("Password is valid ✅");
  } else {
    console.log("Invalid Password - Missing required character type ❌");
  }
}