//available levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 3
}

//global vars
const e = document.getElementById("difLevel");
let currentLevel;
let time = currentLevel;
let score = 0;
let isPlaying;
let hardLevel;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const intensity = document.querySelector('#level');
let instructions = document.querySelector('.instructions');
let card = document.querySelector('.instructionCard');

//words array
const hardWords = [
    'government',
    'aboriginal',
    'disagreeable',
    'successfully',
    'reproachfully',
    'arithmetic',
    'pulchritudinous',
    'superannuated',
    'psychedelic',
    'antediluvian',
    'aermissible',
    'considering',
    'pandemonium',
    'temporicide',
    'aculeiform',
    'inquisitive',
    'septuagenarian',
    'cruciverbalist',
    'callipygian',
    'perissology',
    'earsplitting',
    'absquatulate',
    'domineering',
    'digitigradient',
    'torschlusspanik',
    'anopisthograph',
    'effluvium',
    'verisimilitude',
    'dendrochronology',
    'blesiloquent',
    'abligurition',
    'brobdingnagian',
    'paraphernalia',
    'battologist',
    'Kinnikinnick',
    'transmundane',
    'verticordious',
    'houghmangandy',
    'xylopyrography',
    'spondulicks',
    'finnimbrun',
    'cryptaesthesia',
    'oneirocritical',
    'nudiustertian',
    'perhendinancer',
    'thwarterous',
    'rhyparographer',
    'winklepicker',
    'pandiculation'
];
const words = [
    'euphemism',
    'eloquence',
    'sneaksbies',
    'eloquence',
    'agonistarch',
    'depressed',
    'befitting',
    'plausible',
    'jaculiferous',
    'mammothrept',
    'concinnous',
    'awkwardly',
    'chirography',
    'emmetropia',
    'esquivalience',
    'thoughtful',
    'calamistrate',
    'delitescent',
    'vivacious',
    'deontology',
    'ostrobogulous',
    'gammerstang',
    'agiotage',
    'disgusting',
    'antonomasia',
    'umquhile',
    'tittynope',
    'vomitory',
    'pickpocket',
    'rameal',
    'river',
    'joker',
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
    'yeuk',
    'thirsty',
    'bustling',
    'aunt',
    'shape',
    'primarily',
    'cleverly',
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
    'brick',
    'sneeze',
    'observe',
    'subtract',
    'gather',
    'welcome',
    'attack',
    'scrawny',
    'brawny',
    'quizzical',
    'board',
    'opposite',
    'excluding',
    'cunabula',
    'velation',
    'multifid',
    'uromastix',
    'kentledge',
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
    'lamentable',
    'hypnotic',
    
];

//init game
function init(event) {
    instructions.innerHTML = '';
    card.innerHTML = '';
    let selectElement = event.target;
    let value = selectElement.value;
    let intensityLevel = value;
    if (value === 'easy') {
        currentLevel = levels.easy;
        intensityLevel = 'Easy';
        hardLevel = false;
    } else if (value === 'medium') {
        currentLevel = levels.medium;
        intensityLevel = 'Medium';
        hardLevel = false;
    } else if (value === 'hard') {
        currentLevel = levels.hard;
        intensityLevel = 'Hard';
        hardLevel = true;
    }
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
    time = currentLevel + 1;
    countdown(time);
    startMatch(time);
    showWord(hardLevel) 
    
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

function showWord() {
   
    if(hardLevel){
        const randomIndexHard = Math.floor(Math.random() *hardWords.length);
        currentWord.innerHTML = hardWords[randomIndexHard];
    }else{
        const randomIndex = Math.floor(Math.random() *words.length);
        currentWord.innerHTML = words[randomIndex];
    }
    
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