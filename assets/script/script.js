 
// Array of animal pictures and corresponding sound filenames

const animals= ["bear", "bee", "cat", "cow", "crow", "dog", "dolphin", "donkey",
    "dove", "duck", "elephant", "frog", "goat", "goose", "gull", "horse",
    "lion", "mouse", "owl", "parrot", "pig", "pigeon", "rattlesnake", "rooster", "seal", "sheep", "whale","wolf"];     
 const imgPath = './assets/images/';
 const soundPath = './assets/audio/';

 let correctAnimal = '';

 // Function to shuffle the array and get a subset
 function getRandomSubset(arr, subsetSize) {
     const shuffled = arr.sort(() => 0.5 - Math.random()); // Shuffle the array
     return shuffled.slice(0, subsetSize); // Return the subset
 }

 // Function to start the game
 function startGame() {
     // Pick a random animal for the sound
     correctAnimal = animals[Math.floor(Math.random() * animals.length)];

     // Set the sound source
     const soundElement = document.getElementById('animalSound');
     soundElement.src = `${soundPath}${correctAnimal}.mp3`;

     // Select 3 random animals (including the correct one)
     const randomAnimals = getRandomSubset(animals.filter(animal => animal !== correctAnimal), 2);
     randomAnimals.push(correctAnimal); // Ensure the correct animal is included

     // Shuffle the selected pictures to randomize their display order
     const shuffledAnimals = getRandomSubset(randomAnimals, 3);

     // Clear previous images and message
     const imageContainer = document.getElementById('imageContainer');
     imageContainer.innerHTML = '';
     document.getElementById('message').innerText = '';

     // Display the 3 random images
     shuffledAnimals.forEach(animal => {
         const imgElement = document.createElement('img');
         imgElement.src = `${imgPath}${animal}.webp`; // Update path accordingly
         imgElement.alt = animal;
         imgElement.addEventListener('click', () => checkAnswer(animal)); // Add click event for guessing
         imageContainer.appendChild(imgElement);
     });
 }

 // Function to check if the selected image matches the correct animal
 function checkAnswer(selectedAnimal) {
     const message = document.getElementById('message');
     if (selectedAnimal === correctAnimal) {
         message.innerText = 'Well done, that is correct.';
         message.style.color = 'green';
     } else {
         message.innerText = `Better luck next time, the correct answer was ${correctAnimal}.`;
         message.style.color = 'red';
     }

     // Start a new game after 4 seconds
     setTimeout(startGame, 4000);
 }

 // Start the game on page load
 window.onload = startGame;



 // setting up of variables we may need to for next categories of quiz
 