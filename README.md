# Redux Feedback Loop

## Description

_Duration: Weekend Project_

I created an application that allows a user to submit feedback using separate components. The application consists of 7 components that each feature a question and/or text to navigate the user and collect feedback. The application opens with a welcome page that contains a button that the user can click on to take them to the first question. There are 3 questions within this application that the user must answer using only a number between 1-5. They cannot go to the next question without inputing a number. After the quesions are answered, there is a page to leave comments if the user chooses to do so, though they can leave it blank. All information is stored using Redux and is rendered on a review page where the user can review their answers. If satisfied, they can click on a submit button where their responses are then POSTed to a database through the server. The user can also go back and change answers before submitting. Once submitted, a confirmation page will show where the user can click on a button to begin another survey.

Live version deployed on Heroku at: [https://weekend-feedback-loop.herokuapp.com/](https://weekend-feedback-loop.herokuapp.com/)

## Screen Shot

![Home Page](/public/images/feedback1.png)
![Feeling Page](/public/images/feedback2.png)
![Understanding Page](/public/images/feedback3.png)
![Support Page](/public/images/feedback4.png)
![Comments Page](/public/images/feedback5.png)
![Review Page](/public/images/feedback6.png)
![Submit Page](/public/images/feedback7.png)

### Prerequisites

- Node.js
- Postico
- PostgreSQL

## Installation

1. Fork and clone the project from Github
2. Open in text editor of your choice
3. Create a database named `prime_feedback`. Postico was used for this application
4. The data.sql file contains the neccessary information to set up a new table
5. Open terminal and run the command `brew services start postgresql`
6. Open up your editor of choice and run an `npm install` to get neccessary packages
7. Run `npm run server` in your terminal
8. Run `npm run client` in your terminal
9. The `npm run client` command will open up a new browser tab for you!
10. When you are finished, type `control + C` to stop server and client

## Usage

1. On page load, the user is greeted with a welcome page where they have to click on a button to begin the survey
2. The user will then see an input field to describe how they are feeling using a number between 1-5. The `NEXT` button takes them to the next question
3. The next question is to describe how well they are understanding the material. In addition to the `NEXT` button, there is also a `GO BACK` button in case
the user wants to go back and change their answer to the previous question
4. The following question asks the user how supported they feel. This page also features a `NEXT` and `GO BACK` button
5. If the user wants to leave any comments, they can leave them on this page. The `NEXT` button will send them to a final review page or they can again go   back to change any previous answers
6. The user's answers to the previous 4 questions will be displayed here for review. If everything looks good, they can click a `SUBMIT` button or `GO BACK` to change any previous answers
7. Once submitted, the user will see a page that their responses have been submitted and there is also a button that they can click on to do another survey

## Built With

- React
- Redux
- Javascript
- PostgreSQL
- Express.js
- Node.js
- Material-UI
- HTML
- CSS

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equiped and helped me make this application a reality.

## Support
If you have suggestions or issues, please email me at [jmotes2583@gmail.com](www.google.com)