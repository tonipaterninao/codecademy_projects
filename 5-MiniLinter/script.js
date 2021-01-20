let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// save words in the story string as an array of words
const storyWords = story.split(' ');

// Log the number of words in the story 
console.log(`Number of words in the story: ${storyWords.length}`);

// Filter out unnecessary words
let betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word);
})

// Count the number of overused words
const numOverused = storyWords.reduce((total, currentWord) => {
    // check whether current word is in overused words array
    isOverused = overusedWords.includes(currentWord);
    // If value is true add to total counts (true = 1)
    return total + isOverused;
}, 0)

console.log(`Number of overused words: ${numOverused}`)

// Count the number of sentences using forEach
let numSentences = 0;
storyWords.forEach(word => {
    // check the last character
    const lastChar = word[word.length - 1];
    if ( lastChar === '.' || lastChar === '!') {
        numSentences++
    }
})
console.log(`Number of sentences: ${numSentences}`);

// Count sentences with split?

//// Create regex 
const re = /\.|!/;
//// Split and filter out empty strings
const sentences = story.split(re).filter(s => s !== '');
console.log(`Number of sentences (found with split regex): ${sentences.length}`);

// Log the improved text without unnecessary words
// console.log('Edited story without unnecessary words:');
// console.log(`"${betterWords.join(' ')}"`);

// Find the word that appears the greatest number of times
function findMostUsedWord(arr){

    const wordCount = {};
    // Count the number of times each word is used
    maxCount = 0;

    arr.forEach(word => {
        
        // remove punctuation
        word = word.replace(/\W/g, '').toLowerCase()
        if (word) {
            if (! Object.keys(wordCount).includes(word)){
                wordCount[word] = 0;
            }
            wordCount[word]++
            if (wordCount[word] > maxCount){ maxCount = wordCount[word] };
        }
    })
    // Find the most used word
    const countVals = Object.values(wordCount)
    const countIndex = countVals.findIndex(val => val === maxCount)
    const maxWord = Object.keys(wordCount)[countIndex];

    return maxWord
}
console.log(`The word you used the most is: "${findMostUsedWord(storyWords)}"`);

// Replace every other overused word with something else
// and remove every other overused word
let counter = 0;
let evenBetterWords = []
betterWords.forEach(word => {
    if (overusedWords.includes(word)){
        if (counter % 2) {
            evenBetterWords.push(word)
        } else {
            const newWords = ['quite', 'honestly', ', like,'];
            const randInt = Math.floor(Math.random() * newWords.length);
            const newWord = newWords[randInt];
            evenBetterWords.push(newWord)
        }
    } else {
        evenBetterWords.push(word)
    }
    counter++
})
console.log('Your text after removing and replacing some overused words:')
console.log(`"${evenBetterWords.join(' ')}"`)