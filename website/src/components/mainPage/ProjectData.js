import BorderRadius from './Border-Radius.PNG';
import Calculator from './Calculator.jpg';
import BookFinder from './Book-Finder.JPG';
import GradeParticipation from './grade-participation.JPG';
import ChoreBot from './Chore-Bot.JPG';
import calculator from './calculator.gif';
import bookFinder from './bookFinder.gif';
import borderRadius from './border-radius-previewer.gif';
import gradeParticipation from './gradeParticipation.gif';
import choreBot from './choreBot.gif';
import Musicon from './Musicon.jpg';
import musiconGif from './musiconGif.gif';

  export default  [
    {
        title: 'Chore Bot Game',
        imageUrl: ChoreBot,
        description: 'In this game, the user must select one of three doors while trying to avoid the chore bot who hides behind one of the doors. This application is built in raw javascript (no libraries), and it manipulates DOM elements to display different images onto the HTML, canvas element.',
        gifUrl: choreBot,
        sourceLink: 'https://github.com/thomasdefilippis/Chore-Bot-Game'
    },

    {
        title: 'Book-Finder App',
        imageUrl: BookFinder,
        description: 'Developed with React and Material UI, this application fetches data from the google books API and extracts ten books from the returned json object. The application grabs the users text input for Author and/or Title and use them to manipulate the queries parameters on the API url.',
        gifUrl: bookFinder,
        sourceLink: 'https://github.com/thomasdefilippis/Book-Finder-App'
    },

    {
        title: 'Chrome Calculator Extension',
        imageUrl: Calculator,
        description: 'A calculater loaded as a web extension into the chrome browser. Developed in React, this app deals with the order of operations by sorting the given string into two arrays: a numbers array, and an operations array. After that, it loops through the arrays and determines which operations to perform first.',
        gifUrl: calculator,
        sourceLink: 'https://github.com/thomasdefilippis/React-JS-Calculator'
    },
    

    {
        title: 'Grade Particpation App',
        imageUrl: GradeParticipation,
        description: 'A React application that loops through 15 questions per student and collects the overall score, averaging it at the end. As I was previously a teacher. I created this app to speed up participation grades. ',
        gifUrl: gradeParticipation,
        sourceLink: 'https://github.com/thomasdefilippis/Student-Participation-Grader'
    },

    {
        title: 'Border-Radius Previewer',
        imageUrl: BorderRadius,
        description: 'Built in React, this app allows the user to manipulate the border radius of a div element to create a wide variety of shapes.',
        gifUrl: borderRadius,
        sourceLink: 'https://github.com/thomasdefilippis/Border-Radius-Previewer'
    },

    {
        title: 'Musicon Website',
        imageUrl: Musicon,
        description: 'A demo music website developed in handlebarsjs. This website uses a template from handlebars to display musical instruments that are available for sale.',
        gifUrl: musiconGif,
        sourceLink: 'https://github.com/thomasdefilippis/Musicon'
    }
]

