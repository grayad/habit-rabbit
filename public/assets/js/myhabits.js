
async function home() {
  document.location.replace('/home');
}


async function createHabit() {
  document.location.replace('/create-habit');
}


async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    document.location.replace('/');
}

document.querySelector('#home').addEventListener('click', home);
document.querySelector('#create_habit').addEventListener('click', createHabit);
document.querySelector('#logout').addEventListener('click', logout);