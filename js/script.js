//window loads
//window.addEventListener('load', init);

//available levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 2
}

//global vars
const e = document.getElementById("difLevel");
let currentLevel;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const intensity = document.querySelector('#level');

//words array
const words = [
    'rameal',
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
    'aunt',
    'shape',
    'successfully',
    'primarily',
    'cleverly',
    'reproachfully',
    'awkwardly',
    'bedroom',
    'writer',
    'can',
    'pizzas',
    'step',
    'leather',
    'linen',
    'sticks',
    'channel',
    'sheep',
    'stretch',
    'arithmetic',
    'brick',
    'sneeze',
    'observe',
    'subtract',
    'gather',
    'welcome',
    'attack',
    'psychedelic',
    'thoughtful',
    'vivacious',
    'permissible',
    'scrawny',
    'brawny',
    'quizzical',
    'aboard',
    'considering',
    'opposite',
    'excluding',
    'cunabula',
    'deontology',
    'velation',
    'multifid',
    'temporicide',
    'uromastix',
    'kentledge',
    'aculeiform',
    'xoanon',
    'gasiform',
    'palmary',
    'idiograph',
    'cathead',
    'dilettante',
    'green',
    'daffy',
    'adaptable',
    'incredible',
    'incredible',
    'chivalrous',
    'hesitant',
    'inquisitive',
    'earsplitting',
    'lamentable',
    'hypnotic',
    'domineering',
];

//init game
function init(event) {
    let selectElement = event.target;
    let value = selectElement.value;
    const intensityLevel = value;
    if (value === 'easy') {
        currentLevel = 11;
    } else if (value === 'medium') {
        currentLevel = 6;
    } else if (value === 'hard') {
        currentLevel = 3;
    }
    seconds.innerHTML = currentLevel - 1;
    intensity.innerHTML = intensityLevel;
    //load word from array
    showWord(words);
    //input match
    wordInput.addEventListener('input', startMatch)
        //call countdown
    setInterval(countdown, 1000);
    //check if game is over
    setInterval(checkStatus, 50);
    time = currentLevel;
    countdown(time);
    startMatch(time);
}
//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel;
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