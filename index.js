const inquirer = require('inquirer');
const fs = require('fs');
const {makeShape} = require('./lib/shapes');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'What letters would you like to use? (max 3 characters)',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What text color would you like to use?',
    },
    {
        type: 'list',
        name: 'shapes',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like your shape to be?',
    }
];

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const createFile = makeShape(data);
            fs.writeFile('./logo.svg', createFile, (err) =>
                err ? console.log(err) : console.log('Successfully Generated logo.svg!'));
        });
};

init();