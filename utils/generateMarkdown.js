// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NO LICENSE") {
    return `<img src="http://img.shields.io/badge/license-${license}-blue.svg"></img>`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NO LICENSE") {
    return `* [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NO LICENSE") {
    return `## License 
        This project is licensed under ${license}`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description 
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${data.install}
## Usage 
${data.usage}
${renderLicenseSection(data.license)}
## Contributing 
${data.contributors}
## Tests
${data.test}
## Questions
If you have any questions about this projects, please contact me directly at ${
    data.email
  }. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
