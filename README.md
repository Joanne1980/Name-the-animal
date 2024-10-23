# Name The Animal

Live site link : https://joanne1980.github.io/Name-the-animal/

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
Discuss how accessibility guidelines were adhered to, including colour contrast and alt text for images.  

## Features Implementation

### Core Features (Must-Haves User Stories)
- **Feature 1:** Description of the implemented feature.
- **Feature 2:** Description of the implemented feature.

 Document all the must-have features you implemented, explaining how they align with the user stories and acceptance criteria.

### Advanced Features (Should-Haves)
- **Feature 1:** Description of the implemented feature.
- **Feature 2:** Description of the implemented feature.

Include any advanced features you implemented: Should User Stories Implementation & Any Advanced Features. Explain how these features enhance user experience and their alignment with the acceptance criteria.

### Optional Features (Could-Haves)
- **Feature 1:** Description of the implemented feature (if any).
- **Feature 2:** Description of the implemented feature (if any).

(Include any could-have features that were implemented or considered) 

## Testing and Validation

### Testing Results
Summarize the results of testing across different devices and screen sizes.  
Mention any issues found and how they were resolved.  
- https://wave.webaim.org/ to be used to check colour contrast for accessibility
- https://jsfiddle.net/ used to unit test code chuncks work as expected before adding to project

### Validation
Discuss the validation process for HTML and CSS using W3C and Jigsaw validators.  
Include the results of the validation process.  JSHint for JavaScript
Include any errors or warnings encountered and how they were resolved.

- https://validator.w3.org/#validate_by_input used to validate html
- https://jigsaw.w3.org/css-validator/ used to validate css
- 

## Deployment

### Deployment Process
Briefly describe the deployment process to GitHub Pages or another cloud platform.  
Mention any specific challenges encountered during deployment.  

## Tablet and Mobile Views, Responsiveness example

## Reflection on Development Process

### Successes
Great teamwork that played to each others strengths. Collaborated well during the ideation phase and were able to start devoping relatively quickly with a clear plan of what we wanted to achieve. Any issues faced were solved as a group and helped us learn. 


### Challenges
The team faced some merge conflicts when we started coding. This was a great learning opportunity on how to resolve the conflict in gitpod without overwriting each others work. The need for clear communication and ownership of tasks was the take-away. Having a more detailed breakdown of tasks in our project board with the team member assigned to each should help avoid future conflicts.


### Final Thoughts
Provide any additional insights gained during the project and thoughts on the overall process.  


## Credits
- README template from Brian O Grady (github Mrbrianojee), Programme Director at Code Institute.
- https://www.Pexels.com used for Animal vectors 
- https://freeanimalsounds.org/downloads/ used for animal sounds
- https://pixabay.com/ used for animal sounds
- https://convertio.co/ used for converting audio and image files
- https://color.adobe.com/ was used to generate a color pallette 


## Code Attribution
Properly attribute any external code sources used in the project (excluding GitHub Copilot-generated code).  


## Future Improvements
Briefly discuss potential future improvements or features that could be added to the project.  
These could be Could user story features you didn’t have time to implement or improvements based on testing feedback.