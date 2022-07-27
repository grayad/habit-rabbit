if (window.location.pathname === "/create-habit") {
  var habitInputEl = document.getElementById("habitName");
  var typeInputEl = document.getElementById("habitType");
  var daysInputEl = document.getElementById("targetDays");
  var formBtnEl = document.getElementById("createHabit");
}

// function to post new habit to db on form submit
const addHabit = (habit) =>
  fetch("/api/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  });

var formSubmitHandler = function () {
  // get values from inputs and trim any leading/trailing spaces
  var habitName = habitInputEl.value.trim();
  var habitType = typeInputEl.value.trim();
  var habitDays = daysInputEl.value.trim();

  let newHabit;

  if ((habitName, habitType, habitDays)) {
    newHabit = {
      name: habitName,
      type: habitType,
      target_days: habitDays,
    };
    console.log(newHabit);
  } else {
    // if any inputs left blank
    alert("Please complete all fields.");
  }

  addHabit(newHabit).then(() => {
    alert("Habit added! Click View Habits to see all of your habits.");
  });
};

formBtnEl.addEventListener("submit", formSubmitHandler);

if (window.location.pathname === "/login") {
  var emailInputEl = document.getElementById("emailInput");
  var passwordInputEl = document.getElementById("passwordInput");
  var loginBtnEl = document.getElementById("logIn");
  var createAcctBtn = document.getElementById("createAccount");

  createAcctBtn.addEventListener("submit", createAcctHandler);
  loginBtnEl.addEventListener("submit", loginHandler);
}

var loginHandler = function () {
  console.log(">>>login button clicked");
};

var createAcctHandler = function () {
  console.log(">>>create account button clicked");
};
