// thoughts:
// when create (POST) a new habit (on form submit),
// package inputs as object and create html by accessing each property (or add to array idea below)

// query to get all current habits and counts (array of objects)?
// then forEach object in the array, run the generateCard function OR use JS to create
// each element with the appropriate classes

const getHabits = () =>
  fetch('/api/habits', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
});

const addHabit = (habit) =>
  fetch('/api/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(habit),
});

const deleteHabit = (id) =>
  fetch(`/api/habits/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
});

const generateCard = habit => {
    return `
    <div class="card">
                <div class="card-container">
                    <h4>${habit.name}</h4>
                    <div class="align">
                        <label for="habitType">Habit Type:</label>
                        <label for="habitType" type="text" id="habitType" >${habit.type}</label>
                    </div>

                    <div class="align">
                        <label for="targetDays">Target #:</label>
                        <label for="targetDays" type="text" id="targetDays" >${habit.targetDays}</label>
                    </div>

                    <div class="align">
                        <label for="daysCompleted">Days Completed:</label>
                        <label for="daysCompleted" type="text" id="daysCompleted" >${habit.count}</label>
                    </div>
                </div>
                <button class="addbutton"><span class="plus">+</span></button>
            </div>
        `
}