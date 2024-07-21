#!/usr/bin/env node

const { Command } = require('commander');
const generateUniqueWord = require('./index'); 

const program = new Command();

program
    .version('1.0.0')
    .option('-l, --length <number>', 'length of the word', '6')
    .parse(process.argv);

const options = program.opts();
const length = parseInt(options.length);

if (isNaN(length) || length <= 0) {
    console.error('Please provide a valid number for the length of the word.');
    process.exit(1);
}

(async () => {
    try {
        const word = await generateUniqueWord(length);
        console.log(word);
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
})();
