

var habitInputEl = document.getElementById('habitName');
var typeInputEl = document.getElementById('habitType');
var daysInputEl = document.getElementById('targetDays');
var formBtnEl = document.getElementById('createHabit');


// const addHabit = (habit) =>
//     fetch('/api/habits', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(habit),
//     });

var formSubmitHandler = function() {
    console.log(">>>button clicked");

    // get values from inputs and trim any leading/trailing spaces
    var habitName=habitInputEl.value.trim();
    var habitType=typeInputEl.value.trim();
    var habitDays=daysInputEl.value.trim();

    if(habitName, habitType, habitDays) {
        const newHabit = {
            name: habitName,
            type: habitType,
            targetDays: habitDays
        };
        console.log(newHabit);
    } else {
        // if any inputs left blank
        alert("Please complete all fields.")
    }

    // addHabit(newHabit).then(() => {

    // })
}

formBtnEl.addEventListener("click", formSubmitHandler);