//window loads
window.addEventListener('load', init);

//available levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 2
}
const dificulty = {
    level1: 'Easy',
    level2: 'Medium',
    level3: 'Hard'
}

//global vars
const currentLevel = levels.easy;
const intensity = document.querySelector('#level');
const intensityLevel = dificulty.level1;
let time = 10;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//words array
const words = [
    'hat',
    'river',
    'joker',
    'government',
    'aboriginal',
    'flippant',
    'abundant',
    'languid',
    'aberrant',
    'purpose',
    'smooth',
    'weigh',
    'expansion',
    'disastrous',
    'spurious',
    'embarrass',
    'measure',
    'unnatural',
    'aberrant',
    'broad',
    'mourn',
    'disagreeable',
    'depressed',
    'thirsty',
    'ambitious',
    'disgusting',
    'bustling',
    'befitting',
    'plausible',
];

//init game
function init() {
    seconds.innerHTML = currentLevel;
    intensity.innerHTML = intensityLevel;
    //load word from array
    showWord(words);
    //input match
    wordInput.addEventListener('input', startMatch)
        //call countdown
    setInterval(countdown, 1000);
    //check if game is over
    setInterval(checkStatus, 50);
}
//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

//countdown
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}