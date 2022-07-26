
if (window.location.pathname === '/create-habit') {
var habitInputEl = document.getElementById('habitName');
var typeInputEl = document.getElementById('habitType');
var daysInputEl = document.getElementById('targetDays');
var formBtnEl = document.getElementById('createHabit');
}

var formSubmitHandler = function() {
    console.log(">>>button clicked")
}

formBtnEl.addEventListener("submit", formSubmitHandler);