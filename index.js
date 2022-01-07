//Packages
const inquirer = require("inquirer");
const fs = require("fs");

//Function to generate ReadMe
const generateReadMe = ({ title, license, description, install, usage, contributors, test, email, github}) =>
`# ${title}
<img src="http://img.shields.io/badge/license-${license}-blue.svg">

## Description 
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${install}
## Usage 
${usage}
## License 
This project is licensed under ${license}
## Contributing 
${contributors}
## Tests
${test}
## Questions
If you have any questions about this projects, please contact me directly at ${email}. You can view more of my projects at https://github.com/${github}.
`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter installation steps!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'NO LICENSE'],
        default: ["MIT"],
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    }, 
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    }
  
])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);
    // Function to write README file
    fs.writeFile("README.md", readMeContent, (err) =>
      // when the README has been created & catch errors
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// Call to initialise function
//generateReadMe();