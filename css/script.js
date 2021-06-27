document.querySelectorAll(".btn-email")[0].addEventListener("click", validate);

// Get the borderColor of the input
let borderColor = document.getElementById("mail");
let myBorderColor = window.getComputedStyle(borderColor).borderColor;

function validate() {
  let email = document.getElementById("mail").value;
  if (validateEmail(email)) {
    document.getElementById("mail").style.border = "1px solid";
    document.getElementById("mail").style.borderColor = "#f96262";
    return true;
  };
  document.getElementById("mail").style.border = "1px solid";
  document.getElementById("mail").style.borderColor = "#f96262";
  document.querySelector(".checker").style.visibility = "visible";
  document.querySelector("i").style.visibility = "visible";
  return false;
};

// To Check the validiy of the email Address
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
