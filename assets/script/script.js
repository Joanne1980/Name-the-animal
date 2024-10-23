let playerName = document.querySelector('#playerName');
let nameEntered = document.querySelector('#nameEntered');
let enterName = document.querySelector('.username-tick');

playerName.addEventListener('click', () => {
const modal = document.querySelector('#startModal');
modal.style.display = 'none';

nameEntered.innerHTML = playerName.value;
});


// To create questions in sequential order for animal sounds 
const animalSound = {
  bear:"bear_snd",
  bee:"bee_snd",
  cat:"cat_snd",
  cow:"cow_snd",
  crow:"crow_snd",
  dog:"dog_snd",
  dolphin:"dolphin_snd",
  donkey:"donkey_snd",
  dove:"dove_snd",
  duck:"duck_snd",
  elephant:"elephant_snd",
  frog:"frog_snd",
  goat:"goat_snd",
  goose:"goose_snd",
  gull:"gull_snd",
  horse:"horse_snd",
  lion:"lion_snd",
  mouse:"mouse_snd",
  owl:"owl_snd",
  parrot:"parrot_snd",
  pig:"pig_snd",
  pigeon:"pigeon_snd",
  rattlesnake:"rattlesnake_snd",
  rooster:"rooster_snd",
  seal:"seal_snd",
  sheep:"sheep_snd",
  whale:"whale_snd",
  wolf:"wolf_snd"
  };
  
const animals= ["bear", "bee", "cat", "cow", "crow", "dog", "dolphin", "donkey",
  "dove", "duck", "elephant", "frog", "goat", "goose", "gull", "horse",
  "lion", "mouse", "owl", "parrot", "pig", "pigeon", "rattlesnake", "rooster", "seal", "sheep", "whale","wolf"]; 
// Note - if we want to reuse the animals array for the next levels additional animals may need adding and not all animals present 
// will have values in their corresponding objects therefore an include check will be needed.

  let questionNum = 0;
  let totalQuestions=animals.length;

  while (questionNum < totalQuestions){
          let a = (animals[questionNum]);            
          let questionSound = (animalSound[a]);
          console.log(questionSound);
          // this will need to trigger linking of audio file to the play sound image as opposed to loggin to console. 
          //need code block to diplay incorrect options and 1 correct option in random order at same time as play sound is presented. Store correct and incorrect options as temp variables
          
          //listen for player to select answer then compare to correct/expected answer
          let (playerAnswer = correctAnswer)
          if (condition){

          };
          // listen for Next button (or timeer) to trigger next question. 
      questionNum++;
  }
  

  // setting up of variables we may need to for next categories of quiz
  const animalGroups {
  ant:"army",
  badger:"cete",
  bee:"colony",
  cat:"clowder",
  camel:"caravan",
  cow:"herd",
  crow:"murder",
  dog:"pack",
  dolphin:"pod",
  donkey:"drove",
  duck:"brace",
  elephant:"herd",
  emu:"mob",
  fish:"school",
  flaminogo:"flamboyance",
  frog:"army",
  giraffe:"tower",
  goat:"herd",
  goose:"gaggle",
  grasshopper:"cloud",
  gull:"colony",
  hippo:"thunder",
  lion:"pride",
  monkey:"troop",
  owl:"parliament",
  parrot:"pandemonium",
  rattlesnake:"rhumba",
  rhino:"crash",
  rooster:"flock",
  seal:"herd",
  sheep:"flock",
  whale:"pod",
  wolf:"pack"
  };
  
  const animalBabies {
  bear:"cub",
  bee:"pupa",
  cat:"kitten",
  cow:"calf",
  dog:"puppy",
  dolphin:"calf",
  dove:"squab",
  duck:"duckling",
  elephant:"calf",
  frog:"tadpole",
  goat:"kid",
  goose:"gosling",
  gull:"chick",
  horse:"foal",
  kangaroo:"joey",
  lion:"cub",
  mouse:"pup",
  owl:"owlet",
  pig:"piglet",
  rattlesnake:"snakelet",
  rooster:"chick",
  seal:"pup",
  sheep:"lamb",
  swan:"cygnet",
  whale:"calf",
  wolf:"pup"
  };
  
  const animalHome {
  ant:"hill",
  badger:"sett",
  bear:"den",
  bee:"hive",
  cat:"cattery",
  cow:"shed",
  dog:"kennel",
  dove:"cote",
  horse:"stable",
  lion:"den",
  mouse:"hole",
  owl:"nest",
  pig:"sty",
  pigeon:"nest",
  rabbit:"burrow",
  rooster:"roost",
  sheep:"pen",
  wolf:"den"
  };
  
// Array of animal pictures and corresponding sound filenames
const animals = ['bear', 'bee', 'cat', 'cow', 'dog'];
    
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
         message.innerText = 'Correct! You win!';
         message.style.color = 'green';
     } else {
         message.innerText = `Wrong! The correct answer was ${correctAnimal}.`;
         message.style.color = 'red';
     }

     // Start a new game after 3 seconds
     setTimeout(startGame, 3000);
 }

 // Start the game on page load
 window.onload = startGame;
