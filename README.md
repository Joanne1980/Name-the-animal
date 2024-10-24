# Name The Animal
Live site link : https://joanne1980.github.io/Name-the-animal/

![picture alt](/docs/On%20load%20modal%20of%20published%20game.png "Loading page for game")


## Overview
A multiple choice quiz to teach children about animals.

### Purpose
The purpose of this project is to develop an interactive quiz aimed at pre-schoolers to have fun whilst learning about animals.   

## User Stories

### Must-Have User Stories
- **User Story 4:** As a preschooler
I want to find my way around a game on my own
So I don't need an adults help.  
  **Acceptance Criteria:** Make the game easy to follow so its easy for the player.

- **User Story 5:** As a I want the game to be educational
So my child learns through play.
  **Acceptance Criteria:** making the game educational for all players to learn

- **User Story 6:** As a I want the game to be fun
So I enjoy playing it.
  **Acceptance Criteria:** Making the game interesting and fun for players of all ages

- **User Story 7:**  As a parent,
I want the game to be appropriate for my child
So they are only seeing age appropriate content.
 **Acceptance Criteria:** Submit age to make the game suitable for the age group of the player.

- **User Story 9:**  As a site owner
I would like the game to be accessible
So its open to a wider audience as possible
 **Acceptance Criteria:** Images with alt text/ pass wave test for accessibility. Appropriate font a size for readability.

- **User Story 11:** As a site owner
I would like the player to add their age
So the game can be appropriate for their age group 
  **Acceptance Criteria:** Adding an age field on pop up modal at the start of the game for player/parent to add age to make the game appropriate for age.

### Should-Have User Stories
- **User Story 8:**  As a site owner
I would like to see a count down timer
so the game is more challenging for the older children 
 **Acceptance Criteria:**
Timer to appear on game screen and cease when time hits zero.

- **User Story 12:**  As the site owner
I would like the game to have different categories
So the game is more interesting and challenging for player
 **Acceptance Criteria:**
 Adding different categories i.e animal sounds, habitat, offspring to make game more challenging for player.

 - **User Story 13:**  As a site owner
I would like the game to have different categories
So it allows for future expansion of the game
 **Acceptance Criteria:**
Categories are being added to give some choice to the game and make it more interesting.

### Could-Have User Stories
- **User Story 10:**  As a  a site owner
I would like for the player to be able to add their name
 **Acceptance Criteria:**
So it personalises the game for the player, and gives opportunity for future leader board/multiplayer results.

## Design Decisions

### Wireframes
Wanted a design that was intuitive for pre-schoolers and therefore made use of graphics more than text. 
Designed mobile first with the following wireframes:
![picture alt](/docs/wireframe1.png "index page layout for animal sound quiz")

![picture alt](/docs/wireframe1a.png "index page code requirements for animal sound quiz")
![picture alt](/docs/wireframe2.png "page layout for animal group name quiz")
![picture alt](/docs/wireframe3.png "page layout for animal home quiz")
![picture alt](/docs/wireframe4.png "page layout for animal offspring quiz")


Because this quiz is based on animals that live in the natural world our starting idea 
for a colour theme was to have blues and greens to represent nature i.e. fields, sky and sea.
The following colour theme was generated using Adobe color. 
![picture alt](/docs/AdobeColor-Name-the-Animals.jpeg "Generated colour theme from AdobeColor")
![picture alt](/docs/Adobe%20color%20-%20No%20conflicts.jpg "Colour theme colour blind check result")
To achieve enough contrast between the background and foreground it was decided that for the majoriy of content to use either:
- background colour of hex a1c7de with a text colour of rgb 1, 70, 1
- background colour of hex 7cdbb0 with a text colour of navy
- border colour of hex db8176

![picture alt](/docs/contrast%20passed.png "Lighthouse accessibility check of foreground and background contrast")

It was decided to keep the look of the page very simple and easy to read for young children.
No fancy decorative fonts were chosen for this reason. 

### Accessibility Considerations
As mentioned in the design section above, colours were tested through lighthouse for accessibility.
Images appear dynamically on the page making it difficult to add alt text, a future enhancement would be 
to investigate how to ensure a description was added for screen readers for the images that appear dynamically. 

## Features Implementation

### Core Features (Must-Haves User Stories)
- **User Story 4 - Easy to follow game :** 
Game built. Modal on load deliberately does enforce input so that a pre-schooler could click on the play button without needed to type name and age. 
Questions implemented through the use of graphics and audio -  play button for sound and animal pictures for multiple choice answer. 
Even if the child cant read the answer text below they can see it is green when correct, red when it's incorrect. 
A timer was put in place that automatically presented the next question to the player after they have submitted an answer. 

- **User Story 5 - making the game educational for all players to learn:** 
Image and audio assets used to create the question and answers.
Text appears to tell the player right answer if they select the wrong answer to help them learn. 

- **User Story 6 - Making the game interesting and fun for players of all ages:** 
Bright colours implemented
Bright AI generated animal vectors used
Intuitive navigation 
Variety of questions to cycle through 

- **User Story 11: Adding an age field on pop up modal at the start of the game for player/parent to add age**  
The age input was implemented in the pop up modal on page load. 
The MVP did not do anything with this as the first level of the game produced for the MVP was for pre-schoolers and all the content appropriate for that age group.

### Optional Features (Could-Haves)
- **User Story 10 Player Name 1:** 
Implemented a form in pop up modal to ask for user name. Made this optional because MVP was based at pre-schoolers. Having player name on screen helps personalise the experience for the player and offer future development oppotunity eg leaderboards
Name entered was to be displayed on game screen but a fix is needed in the code to get this fully working. 

## Testing and Validation

### Testing Results
Manual testing of the game was ongoing throughout the development process. 

Screen responsive testing through dev tools found that the animal images overflowed their game container on smaller screens. 
This resolved by changing the bootstrap structure and adding d-flex justify-content-center to the row. We then did hit some responsiveness issues again but ran out of time to address these. 

Issues were faced with getting the modal to work on the index page. The modal worked from the game.html using it's own game.js 
file but when the code from the game.js was brought into the main js file it failed. 
The solution was to link the index file to the game.js and game.css

Manual test results 
- Test on page load that modal is presented - pass
- Test that user can press play on modal and enter game without having to enter details - pass
- Test that if user does enter their age that they can only enter a valid number - pass 
- Test this if the user enters a name the name is displayed on the game screen -fail.
- Test play button plays animal sound - pass
- Test click on animal gives player a correct or incorrect message - pass
- Test that player is automatically taken to the next question after answering - pass
- Test that the correct answer image appears in random order and not always in the same position for each question - pass
- Test that player remains on same question until an answer is selected - pass
- Test that player can replay the question sound multiple times before answering - pass
- Test that player can pause the sound - pass
- Test that player can select answer whilst sound clip is still playing - pass
- Test that if player selects answer whilst sound clip is still playing the timer to move to next question is triggered at point of answer and doesn't wait until clip finishes playing - pass
- Test score field is updated - fail. Resolution  - removed the score field from the page and put feature back into backlog for a future dev iteration. This is the MVP with initial target audience of pre-schoolers and the focus on helping them learn about animals so this was not seen as essential at this stage in the games developemnt. 
- Test that the player is not presented with the same question during a level unless they restart the game - fail. Future enhancement required to fix this.

- https://wave.webaim.org/ to be used to check colour contrast for accessibility. Only error was the developed by link in the footer and would fixed if we had more time.
Please see a snippet of the WAVE report below:
![picture alt](/docs/WAVE.png "WAVE reoirt")

The game was tested for it's responsiveness using dev tools.
Unfortunately we hit an issue with overflow of the images again on the smaller screens without time to re-fix. This would need to be looked at in another iteration of development. 

Please see below a screenshot for a device width of 1008px to emulate tablet devices:
![picture alt](/docs/game%20page%20on%20table%201088%20width.png "Laptop view")


### Validation
- https://jsfiddle.net/ was used in some cases to unit test code chunks worked as expected before adding to project

- https://validator.w3.org/#validate_by_input  was used to validate html. The HTML issues we faced and resolved were: Removing p tags from around an ul;  Removing type attribute in favicon links;  Removing duplicate class attribute in a couple of places and putting value inside a single class definition.

The final html validator result passed without issue and can be seen below:
![picture alt](/docs/html%20validator%20pass.png "html validator result")


- https://jigsaw.w3.org/css-validator/ was used to validate css. Both CSS code files passed the validator first time without issue, giving the result below in both cases:
![picture alt](/docs/CSS%20Validator%20of%20style.css%20file.png "html validator result")

- https://jshint.com/ used to validate Java Script. No issues needed resolving. The results can be seen below:
![picture alt](/docs/JShint%20for%20script.js%20file.webp "JS validator result")
![picture alt](/docs/JShint%20for%20Game.js%20file.webp "JS validator result")

- Dev tools lighthouse report summary :
![picture alt](/docs/Lighthouse%20report%20summary.png "Lighthouse Report summary")


## Deployment

### Deployment Process
GitHub was used to deploy the website. These were the steps taken to achieve this:  

1. Login to GitHub account.
2. Navigate to the project repository
3. Click the Settings button near the top of the page.
4. In the left-hand menu, find and click on the Pages button.
5. In the Source section, choose 'main' from the drop-down, and select branch menu.
6. Select 'root' from the drop-down folder menu.
7. Click 'Save' and after a few moments the project was  made live and a link is visible at the top of the page.


## Reflection on Development Process

### Successes
Worked as a team using each others strengths. Collaborated well during the ideation phase and were able to start devoping relatively quickly with a clear plan of what we wanted to achieve.  Issues faced  helped us learn. 


### Challenges
The team faced some merge conflicts when we started coding. This was a great learning opportunity on how to resolve the conflict in gitpod without overwriting each others work. 
Communication was a challenge and not always knowing everyone was working in the code.


### Final Thoughts
Following conflicts of code and duplication of effort it highlighted how important clear communication and ownership of tasks is when coding collaboratively. 
Going forward into another hackathon a more detailed breakdown of tasks on the project board and clear ownership of tasks should help avoid conflicts.
Writing out use cases in pseudo code and breaking down into programmable features as a group before going off to code would have resulted in a better distribution of code effort. 


## Credits
- README template from Brian O Grady (github Mrbrianojee), Programme Director at Code Institute.
- https://www.Pexels.com used for Animal vectors 
- https://freeanimalsounds.org/downloads/ used for animal sounds
- https://pixabay.com/ used for animal sounds
- https://convertio.co/ used for converting audio and image files
- https://arapahoelibraries.org/blogs/post/names-for-groups-of-animals/  
- https://www.orchidsinternationalschool.com/blog/child-learning/animals-and-their-homes
- https://color.adobe.com/ was used to generate a color pallette 
- Tutorial republic - modal information
- https://getbootstrap.com/ 
- https://github.com/amylour/irish_wildlife_matchup/blob/main/index.html modified modal code from here
- https://www.w3schools.com/ for general coding help
- https://www.youtube.com/@KevinPowell channel for modal  video
- https://stackoverflow.com/questions/74766348/ how-to-make-img-within-div-to-shuffle-randomly 


## Future Improvements
- Fix responsiveness and fit game content to viewport so user does not have to scroll. 
Take the name entered in the modal and display it on the game page.  
- Implement the remaining game categories that were designed in the wireframes to meet our should have user stories 12 and 13.
- Improve the styling
- Add descriptions for screen readers for the images that appear dynamically.
- Add checks to avoid the same question being presented to the player unless they restart the game.
- The answer text could include the image of the correct answer if the player gets the answer wrong. 
- When selected change boder colour around the correct image to green.
- When selected change border colour around the incorrect image to red. 
- Implement feature to use the player age to determine the level of difficulty of questions in each category. 
- Add our should have feature from user story 8 for a timer for the older age categories so they have to answer each question within a set time.
- Keep score of correct answers and display on game screen.
- Add sound. 
- Add fun facts pop ups at the end of each game.