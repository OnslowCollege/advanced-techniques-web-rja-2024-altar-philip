
const area = document.querySelector("#text-box");
const button = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const area_v2 = document.querySelector("#text_box_v2");

// setting up all the changing state throughout the code within the textToSpeech constant
let currentUtterance = null;
let synth = window.speechSynthesis;
let isSpeaking = false;
let isPaused = false;

const textToSpeech = (paragraph, button) => {
    const text = paragraph.textContent;

    // checking if the text is being read out and if isPaused is false setting the synth to being resumed and changing the buttons context to displaying a paused option if its not then its snyth to being pause and changes the display of the button to being resume and changes the state of isPaused
    if (synth.speaking) {
        if (isPaused) {
            synth.resume();
            button.textContent = "pause";
        } else {
            synth.pause();
            button.textContent = "resume";
            isPaused = true;
            return;
        }
        // if the synth's is not speaking than it sets up a new speechsynthesis of text and changes the states of weither its in a changed state back to being false instead of true and changes the display text in the button back to its orginal state of text-to-speech
    } else {
        if (text) {
            if (currentUtterance) {
                synth.cancel();
            }

            currentUtterance = new SpeechSynthesisUtterance(text)
            currentUtterance.onend = () => {
                isSpeaking = false;
                isPaused = false;
                button.textContent = "Text-To-Speech"
                currentUtterance = null;
            };
            // setting currentUtterance to being spoken and changes the state of isSpeaking to true and the display of the text to being pause again
            synth.speak(currentUtterance);
            isSpeaking = true;
            isPaused = false;
            button.textContent = "pause";
        }
    }
};

button.addEventListener("click", () => textToSpeech(area, button));
button_2.addEventListener("click", () => textToSpeech(area_v2, button_2));
