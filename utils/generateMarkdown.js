// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = "No license provided"

  if(data.license == "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

  return `# ${data.title}
  README Generator

  ${license}
## Description 

When creating an open source project on GitHub, it is important to have a quality README with information about the project.
I created this command-line application with the purpose of dynamially generating a good readme.md file.
I created the application to be invoked with the command node index.js.
Once the command is run the application prompts the user for their GitHub username and questions about their project. The application takes the GitHub username input and makes a call to the GitHub API to retrieve the users email and profile image.

## Table of Contents 
  Table of Contents
  Description
  Installation
  Usage
  License
  Contributors
  Test
  Questions
  Repository Link
  Github Info

## Installation

Simply clone the code into your repo and install dependencies with 'npm i' command in terminal, then run the program with the command 'node index.js'.


## Usage 

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions, contact Priti Patel on GitHub.

`;
}

module.exports = generateMarkdown;
