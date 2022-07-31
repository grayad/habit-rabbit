var nameH3El = document.getElementById("welcome-msg");

const getUserID = (email) =>
  fetch("/api/users/email/" + email).then(data => {
    return data.json();
  }).then(returnData => {
    userID = returnData.id;
    return returnData.id;
})

function addEventListener() {
    const username = localStorage.getItem('name')
    nameH3El.innerHTML =  `Welcome, ${username}!`

    let uId;
    getUserID(localStorage.getItem("email"))
    .then(id => {
      console.log("ID: " + id);
      uId = id;
      localStorage.setItem("user_id", uId);
    }) 

};

window.addEventListener('load', addEventListener);