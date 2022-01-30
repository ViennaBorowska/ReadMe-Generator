//Packages & imports
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//Questions Array
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter installation steps!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter a usage description!');
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: [
      'MIT',
      'GNU',
      'APACHE 2.0',
      'GPL 3.0',
      'BSD 3',
      'ISC',
      'NO LICENSE',
    ],
    default: ['MIT'],
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please choose a license!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//Function to build HTML with user imput & confirm in terminal
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Successfully created README.md!');
    writeToFile('My-README/README.md', generateMarkdown({ ...answers }));
  });
}

// Call to initialise function
init();
