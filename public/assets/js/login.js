if (window.location.pathname === "/") {
  var emailInputEl = document.getElementById("emailInput");
  var passwordInputEl = document.getElementById("passwordInput");
  var loginBtnEl = document.getElementById("logIn");
  var createAcctBtn = document.getElementById("createAccount");
}

var loginHandler = function () {
  console.log(">>>login button clicked");
};

var createAcctHandler = function () {
  console.log(">>>create account button clicked");
};

createAcctBtn.addEventListener("click", createAcctHandler);
loginBtnEl.addEventListener("click", loginHandler);
