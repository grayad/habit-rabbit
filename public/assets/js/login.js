if (window.location.pathname === "/") {
  var emailInputEl = document.getElementById("emailInput");
  var passwordInputEl = document.getElementById("passwordInput");
  var loginBtnEl = document.getElementById("logIn");
  var createAcctBtn = document.getElementById("createAccount");
}

// function to post new user to db on form submit
const addUser = (user) =>
  fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

var loginHandler = function () {
  console.log(">>>login button clicked");
};

var createAcctHandler = function () {
  console.log(">>>create account button clicked");

  // get values from inputs and trim any leading/trailing spaces
  var userEmail = emailInputEl.value.trim();
  var userPW = passwordInputEl.value.trim();

  let newUser;

  if ((userEmail, userPW)) {
    newUser = {
      email: userEmail,
      password: userPW,
    };
    console.log(newUser);
  } else {
    // if any inputs left blank
    alert("Please complete all fields.");
  }

  addUser(newUser).then(() => {
    document.location.replace("/home");
  });
};

createAcctBtn.addEventListener("click", createAcctHandler);
loginBtnEl.addEventListener("click", loginHandler);
