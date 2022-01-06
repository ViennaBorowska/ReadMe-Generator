//Packages
const inquirer = require('inquirer');
const fs = require('fs');

//Questions for user input
const questions = require('./questions')

inquirer
  .prompt(questions)

  .then((questions) => {
// Get name for filename
    const filename = `${questions.name.toLowerCase().split(' ').join('')}.md`;

// Function to write README file
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });




//Function to initialize app
function init() {}

// Function call to initialize app
init();
