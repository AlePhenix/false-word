const { program } = require('commander');
const generateUniqueWord = require('./index');

program
    .option('-l, --length <number>', 'length of the word', '6');

program.parse(process.argv);

const options = program.opts();

const word = generateUniqueWord(parseInt(options.length));

console.log(word);
