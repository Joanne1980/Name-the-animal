// open rules and player name modal on window load


window.addEventListener('load', function () {
    this.setTimeout(
        function open(event) {
            document.querySelector('#start-modal').style.display = "block";
        }, 100);
});

// take OPTIONAL player name, close modal and display player name in 'Name' window - code adapted from Keith Paterson https://www.youtube.com/watch?v=KB6Yg5hNrqc

let playerName = document.querySelector('#playerName');
let name = document.querySelector('#name');
let enterName = document.querySelector('.button');

enterName.addEventListener('click', () => {
const modal = document.querySelector('#start-modal');
modal.style.display = 'none';

name.innerHTML = playerName.value;
});

//hit enter key to close modal 
//document.getElementById("answer-box").addEventListener("keydown", function(event){
    //if (event.key === "Enter")