let blanks = [];

const startButton = document.getElementById("startButton");


startButton.addEventListener('click', ()=> {
    fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=30")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        // let newLib = {}
        // newLib["blanks"] = data.blanks
        // blanks.push(newLib)
        // render()
    })
    // console.log(blanks)
    // .catch((err) => {
    // console.log(err)
})