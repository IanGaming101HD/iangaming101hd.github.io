const passwordToCheck = "MySecurePassword";

fetch(`https://your-api-domain.com/api/check-password?password=${passwordToCheck}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.strong) {
      console.log("Password is strong!");
    } else {
      console.log("Password is weak. Please use a stronger password.");
    }
  })
  .catch((error) => {
    console.error("Error checking password:", error);
  });