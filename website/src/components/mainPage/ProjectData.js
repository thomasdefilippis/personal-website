import BorderRadius from './Border-Radius.PNG';
import Calculator from './Calculator.jpg';
import BookFinder from './Book-Finder.JPG';
import GradeParticipation from './grade-participation.JPG';
import calculator from './calculator.gif';
import bookFinder from './bookFinder.gif';
import borderRadius from './border-radius-previewer.gif';
import gradeParticipation from './gradeParticipation.gif';

export default [
    {
        title: 'Chrome Calculator Extension',
        imageUrl: Calculator,
        description: 'A calculater loaded as a web extension into the chrome browser. Developed in React, this app deals with the order of operations by sorting the given string into two arrays: a numbers array, and an operations array. After that, it loops through the arrays and determines which operations to perform first.',
        gifUrl: calculator,
        sourceLink: 'https://github.com/thomasdefilippis/React-JS-Calculator'
    },

    {
        title: 'Book-Finder App',
        imageUrl: BookFinder,
        description: 'Developed with React and Material UI, this application fetches data from the google books api and extracts ten books from the returned json object. The application grabs the users text input for Author and/or Title and use them to manipulate the queries parameters on the api url',
        gifUrl: bookFinder,
        sourceLink: 'https://github.com/thomasdefilippis/Book-Finder-App'
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
    }
]