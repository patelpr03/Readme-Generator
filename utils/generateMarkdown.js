// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseChoice = "No license provided"
  if (license == "MIT") {
    licenseChoice = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license == "ISC") {
    licenseChoice = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  return licenseChoice
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `## Tital
  
  ${data.title}
  

## Description 
${data.description}

## Table of Contents 
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Questions](#Questions)
  - [Repository Link](#Repository)
  - [Github Info](#Github)
  - [Badges](#Badges)

## Instructions

${data.Instructions}

## License

${renderLicenseBadge(data.license) }

## Usage 

${data.Usage}

## Contribution

  ${data.Contribution}

  ## Test

  ${data.ProjectTests}

## Questions
Have questions about this project?  
GitHub: https://github.com/${data.github}  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
