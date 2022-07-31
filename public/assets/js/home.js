var nameH3El = document.getElementById("welcome-msg");

async function addEventListener(event) {
    // event.preventDefault();
    
    const username = localStorage.getItem('name')
    nameH3El.innerHTML =  `Welcome, ${username}!`
    // localStorage.removeItem('name');
};

window.addEventListener('load', addEventListener);