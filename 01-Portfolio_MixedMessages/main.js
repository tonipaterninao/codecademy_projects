/**
 * First Portfolio project
 * Mixed Messages: 
 * Returns a randomized inspirational quote everytime it runs.
 * 
 * Source of the inspirational quotes: http://www.positivityblog.com/quotes-on-education/
 */

// Use fs to read files as input
const fs = require('fs');
const { capitalize } = require('lodash');
// Use lodash to manipulate string
const _ = require('lodash');


// The raw text from the quotes
let quoteText = fs.readFileSync(__dirname + '/QUOTES.txt', 'utf8');

// Create an array of quotes and authors
let textArray = quoteText.split('\n').filter(s => s !== '');

// Even indexes correspond to quotes
// Separate them from authors
let quotesArray = textArray.filter((s, index) => !(index % 2));
let authorArray = textArray.filter((s, index) => index % 2);

// Function to convert strings to sentence case
function sentenceCase(string) {
    // capitalize the first letter after a period
    let stringArr = string.split('.');
    // remove white spaces and capitalize sentences
    capSentence = stringArr.map(_.trim)
    capSentence = capSentence.map(_.capitalize)
    // Join elements of array into single string (and remove trailing whitespace)
    capSentence = _.trim(capSentence.join('. '));

    // replace lower case i for I (the pronoun)
    const res = _.replace(capSentence, /(?<=\s)i(?=\s|,|\.)/, 'I');

    return res;
}

// Convert all quotes to sentence case (as opposed to upper case)
quotesArray = quotesArray.map(sentenceCase);

// Convert all authors to title case
authorArray = authorArray.map(_.toLower).map(_.startCase);

/**
 * I realized I misunderstood the assignment, but I'm gonna catch up
 * the idea is to generate randomized messages, not to pick a message at random and print it (as I initially thought)
 * Now that I have all these quotes, I'm just gonna select 3 quotes at random
 * then pick two or three words from each
 * and stitch them together the best I can
 */

// Parts of the message
let firstPart = '';
let secondPart = '';
let thirdPart = '';

// Select 2 first words
const firstIndex = Math.floor(Math.random() * quotesArray.length); 
firstPart = _.words(quotesArray[firstIndex]).slice(0, 3);

// Select 3 last words
// make sure we select a different quote
let thirdIndex;
do {
    thirdIndex = Math.floor(Math.random() * quotesArray.length);
} while (thirdIndex === firstIndex);

thirdPart = _.words(quotesArray[thirdIndex]).slice(-3);

// The middle words 
let secondIndex;
do {
    secondIndex = Math.floor(Math.random() * quotesArray.length);
} while (secondIndex === firstIndex || secondIndex === thirdIndex);

// Find the middle of the quote
let middleQuote = _.words(quotesArray[secondIndex]);
const middle = Math.floor(middleQuote.length / 2);

// Get the surrounding words of the middle of the quote
secondPart = middleQuote.slice(middle-2, middle+1);

// Join the result
const res = `${firstPart.join(' ')} ${secondPart.join(' ')}, ${thirdPart.join(' ')}.`

console.log(res);


 

