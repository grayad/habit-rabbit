if (window.location.pathname === "/") {
  var emailInputEl = document.getElementById("emailInput");
  var passwordInputEl = document.getElementById("passwordInput");
  var loginBtnEl = document.getElementById("logIn");
  var createAcctBtn = document.getElementById("createAccount");
}

var loginHandler = async function (event) {
  event.preventDefault();

  // get values from inputs and trim any leading/trailing spaces
  var userEmail = emailInputEl.value.trim();
  var userPW = passwordInputEl.value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPW,
    }),
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Failed to login");
  }
};

var createAcctHandler = async function (event) {
  event.preventDefault();

  // get values from inputs and trim any leading/trailing spaces
  var userEmail = emailInputEl.value.trim();
  var userPW = passwordInputEl.value.trim();

  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPW,
    }),
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Failed to sign up");
  }
};

createAcctBtn.addEventListener("click", createAcctHandler);
loginBtnEl.addEventListener("click", loginHandler);
