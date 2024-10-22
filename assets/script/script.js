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

// setting up of variables we may need to for questions
const animalSound {
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
  parrot:"pandemonium"
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
  