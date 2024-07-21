const fs = require('fs');
const path = require('path');

async function loadWordList() {
    const { default: wordListPath } = await import('word-list');
    const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
    return wordArray;
}

function generateRandomWord(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        word += chars[randomIndex];
    }
    return word;
}

async function isWordInEnglish(word) {
    const wordArray = await loadWordList();
    return wordArray.includes(word);
}

async function generateUniqueWord(length = 6) {
    let word;
    do {
        word = generateRandomWord(length);
    } while (await isWordInEnglish(word));
    return word;
}

// Exporta la función
module.exports = generateUniqueWord;
