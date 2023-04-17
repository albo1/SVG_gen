const inquirer = require('inquirer');
const fs = require('fs');
const makeShape = require('./lib/shapes');
const MaxLengthInputPrompt = require('inquirer-maxlengt-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [ 
    {
        type: ''
    }
]