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
      name: "description",
      message: "Please provide your project's description?"
    },
    // {
    //   type: "input",
    //   name: "Contents",
    //   message: "Please provide Table of Contents?"
    // },
    {
      type: "input",
      name: "instructions",
      message: "Please provide the installation instructions:"
    },
    {
      type: "input",
      name: "projectUsage",
      message: "Please provide the project usage:"
    },
    {
      type: "list",
      name: "license",
      message: "Please provide the project license:",
      choices: ["MIT", "Eclipse"]
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide the project contributing parties:"
    },
    {
      type: "input",
      name: "projectTests",
      message: "Please provide project tests:"
    },
    {
      type: "input",
      name: "username",
      message: "What is your github user name?"
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

    fs.writeFile('README.md', generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Success!');
    });
  });
