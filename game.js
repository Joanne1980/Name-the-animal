// open rules and player name modal on window load


window.addEventListener('load', function () {
    this.setTimeout(
        function open(event) {
            document.querySelector('#start-modal').style.display = "block";
        }, 100);
});

// take OPTIONAL player name, close modal and display player name in 'Name' window - code adapted from Keith Paterson https://www.youtube.com/watch?v=KB6Yg5hNrqc

let username = document.querySelector('#username');
let nameEntered = document.querySelector('#nameEntered');
let enterName = document.querySelector('.username-tick');

enterName.addEventListener('click', () => {
const modal = document.querySelector('#start-modal');
modal.style.display = 'none';

nameEntered.innerHTML = username.value;
});
