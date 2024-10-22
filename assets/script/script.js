// const startModal = document.getElementById('startModal')
// const myInput = document.getElementById('myInput')

// startModal.addEventListener('shown.bs.modal', () => {
  // myInput.focus()
// });
let playerName = document.querySelector('#playerName');
let nameEntered = document.querySelector('#nameEntered');
let enterName = document.querySelector('.username-tick');

playerName.addEventListener('click', () => {
const modal = document.querySelector('#startModal');
modal.style.display = 'none';

nameEntered.innerHTML = playerName.value;
});
