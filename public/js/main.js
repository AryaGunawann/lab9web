// Inputs
var txtemail = document.getElementById("email");
var txtpass = document.getElementById("password");

// Button
var button = document.getElementById("button");

// Listners
txtemail.addEventListener("mouseenter", email_enter);
txtemail.addEventListener("mouseout", email_exit);

txtpass.addEventListener("mouseenter", pass_enter);
txtpass.addEventListener("mouseout", pass_exit);

button.addEventListener("mouseenter", butt_enter);
button.addEventListener("mouseout", butt_exit);
button.addEventListener("click", butt_ok);

// Doom
function email_enter() {
  txtemail.style.backgroundColor = "#DCDCDC";
}
function email_exit() {
  txtemail.style.backgroundColor = "#F5F5F5";
}

function pass_enter() {
  txtpass.style.backgroundColor = "#DCDCDC";
}
function pass_exit() {
  txtpass.style.backgroundColor = "#F5F5F5";
}

function butt_enter() {
  button.style.backgroundColor = "#A9A9A9";
}
function butt_exit() {
  button.style.backgroundColor = "#F5F5F5";
}

// Doom login
function butt_ok() {
  var email = String(txtemail.value);
  var password = String(txtpass.value);

  window.alert(`E-mail: ${email} / Password: ${password}`);
}
