const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Description",
      message: "Please provide your project's description?"
    },
    // {
    //   type: "input",
    //   name: "Contents",
    //   message: "Please provide Table of Contents?"
    // },
    {
      type: "input",
      name: "Instructions",
      message: "Please provide the installation Instructions:"
    },
    {
      type: "list",
      name: "license",
      message: "Please provide the project license:",
      choices: ["MIT", "ISC"]

    },
    {
      type: "input",
      name: "Usage",
      message: "Please provide the project usage:"
    },
    {
      type: "input",
      name: "Contribution",
      message: "Please provide the project contributing parties:"
    },
    {
      type: "input",
      name: "ProjectTests",
      message: "Please provide project tests:"
    },
    {
      type: "input",
      name: "Repository",
      message: "What is your Repository link?"
    },
    {
      type: "input",
      name: "username",
      message: "What is your github user name?"
    },
    {
      type: "input",
      name: "Email",
      message: "Please provide your Email address:"
    }

  ]
  )


  // function to write README file
  .then(function (data) {

    // const filename =
    //   data.title
    //     .toLowerCase()
    //     .split(' ')
    //     .join('') + '.md';

    fs.writeFile('READMEOutput.md', generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Success!');
    });
  });

