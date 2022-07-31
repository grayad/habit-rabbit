if (window.location.pathname === "/create-habit") {
  var habitInputEl = document.getElementById("habitName");
  var typeInputEl = document.getElementById("habitType");
  var daysInputEl = document.getElementById("targetDays");
  var formBtnEl = document.getElementById("createHabit");
}

let userID;

// function to post new habit to db on form submit
const addHabit = (habit) =>
  fetch("/api/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
});

const addCount = (count) =>
  fetch("/api/counts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(count),
});

const getUserID = (email) =>
  fetch("/api/users/email/" + email).then(data => {
    return data.json();
  }).then(returnData => {
    userID = returnData.id;
    return returnData.id;
})

const getHabitID = (habitname) =>
  fetch("/api/habits/name/" + habitname).then(data => {
    return data.json();
  }).then(returnData => {
    return returnData.id;
})


var formSubmitHandler = function () {

  let uId;
  let habitId;

  getUserID(localStorage.getItem("email"))
  .then(id => {
    console.log("ID: " + id);
    uId = id;

    var habitName = habitInputEl.value.trim();
    var habitType = typeInputEl.value.trim();
    var habitDays = daysInputEl.value.trim();

    if ((habitName, habitType, habitDays)) {
      return {
        name: habitName,
        type: habitType,
        target_days: habitDays,
        user_id: uId
      };
    } else {
      // if any inputs left blank
      alert("Please complete all fields.");
    }
  }).then((newHabit) => {
    addHabit(newHabit).then(() => {
      console.log(newHabit);
    alert("Habit added! Click View Habits to see all of your habits.");
    return { name: newHabit.name, userID: newHabit.user_id };
  }).then((habitBits) => {
    console.log("habitbits: ");
    console.log(habitBits);
    return getHabitID(habitBits.name)
    .then((habID) => {
      habitId = habID;
      console.log('HabitID: ')
      console.log(habitId);
      return { habit_id : habitId, user_id : uId};
    });
  }).then((count) => {
    console.log('Count:')
    console.log(count);
    addCount(count);
  });
});
}

formBtnEl.addEventListener("click", formSubmitHandler);
