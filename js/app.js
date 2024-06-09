// Assignment 1 | COMP1073 Client-Side JavaScript
// variables
var wordArrays = {
    nouns: ["Cat", "Dog", "Elephant", "Lion", "Tiger"],
    verbs: ["Runs", "Jumps", "Swims", "Flies", "Climbs"],
    adjectives: ["over the big", "under the Small", "very Fast over the", "too Slow under the", "very tired"],
    nouns2: ["wall", "tree", "hill", "stone", "cave"],
    places: ["in the Forest", "in the Desert", "in the Ocean", "in the Mountain", "in the River"]
};

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var outputText = document.getElementById('outputText');
//functions
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}
// this function gets random word from the array list
function getRandomWord(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}
//This function is used to update the display area 
//with the generated text whenever new words are added or removed.

function updateOutputText() {
    outputText.textContent = textToSpeak;
}
// this function display the words
function updateDisplayArea(word) {
    var displayArea = document.getElementById('displayArea');
    displayArea.textContent += word + " ";
}

// event listeners
// this event listener is for buttons 1-5 
document.querySelectorAll('.circle-button[data-category]').forEach(button => {
    button.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        var randomWord = getRandomWord(wordArrays[category]);
        textToSpeak += randomWord + " ";
        updateOutputText();
        updateDisplayArea(randomWord);

        // Speaker animation
        var speakerImage = document.querySelector('.speaker img');
        speakerImage.classList.add('animate');
        setTimeout(() => {
            speakerImage.classList.remove('animate');
        }, 1000);
    });
});
// this event listener is for button surprise
document.getElementById('generateStoryButton').addEventListener('click', function() {
    speakNow(textToSpeak);
});
// this event listener is for reset button
document.getElementById('resetButton').addEventListener('click', function() {
    textToSpeak = '';
    updateOutputText();
    document.getElementById('displayArea').textContent = '';
});

// Get all buttons
var buttons = document.querySelectorAll('.circle-button');

// Add click event listeners to each button
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Add the 'clicked' class when the button is clicked
        button.classList.add('clicked');

        // Remove the 'clicked' class after 200 milliseconds (adjust as needed)
        setTimeout(function() {
            button.classList.remove('clicked');
        }, 200);
    });
});
