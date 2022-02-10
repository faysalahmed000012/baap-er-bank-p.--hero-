document.getElementById("submitBtn").addEventListener("click", function () {
  const emailField = document.getElementById("userEmail");
  const email = emailField.value;
  // user passowrd
  const passowrdField = document.getElementById("userPassword");
  const passowrd = passowrdField.value;
  if (email == "sontan@baap.com" && passowrd == "secret") {
    window.location.href = "banking.html";
  } else {
    alert("E-mail or Password invalid");
  }
});
