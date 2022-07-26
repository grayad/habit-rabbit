
if (window.location.pathname === '/create-habit') {
var habitInputEl = document.getElementById('habitName');
var typeInputEl = document.getElementById('habitType');
var daysInputEl = document.getElementById('targetDays');
var formBtnEl = document.getElementById('createHabit');
var cardsEl = document.getElementById('card-section');
}

const getHabits = () =>
    fetch('/api/habits', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
// const addHabit = (habit) =>
//     fetch('/api/habits', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(habit),
//     });

// var formSubmitHandler = function() {
//     // get values from inputs and trim any leading/trailing spaces
//     var habitName=habitInputEl.value.trim();
//     var habitType=typeInputEl.value.trim();
//     var habitDays=daysInputEl.value.trim();

//     let newHabit;

//     if(habitName, habitType, habitDays) {
//         newHabit = {
//             name: habitName,
//             type: habitType,
//             target_days: habitDays
//         };
//         console.log(newHabit);
//     } else {
//         // if any inputs left blank
//         alert("Please complete all fields.")
//     }

//     addHabit(newHabit).then(() => {
//         getAndRenderHabits();
//     });
// }

const renderHabits = async (habits) => {
    let jsonHabits = await habits.json();
    console.log(jsonHabits);

    for(i=0; i<jsonHabits.length; i++) {
        // create html elements
        var habitCard = document.createElement('div');
        habitCard.className= 'card';
        var cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        var cardTitle = document.createElement('h4');
        cardTitle.innerText = jsonHabits[i].name;

        // append to page
        cardContainer.append(cardTitle);
        habitCard.append(cardContainer);
        cardsEl.append(habitCard);
    }
}

// Gets habits from the db and renders them to the page
const getAndRenderHabits = () => getHabits().then(renderHabits);

getAndRenderHabits();

// formBtnEl.addEventListener("click", formSubmitHandler);