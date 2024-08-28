const area = document.querySelector("#text-box");
const button = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const area_v2 = document.querySelector("#text_box_v2");

let currentUtterance = null;
let synth = window.speechSynthesis;
let isSpeaking = false;
let isPaused = false;

const textToSpeech = (paragraph, button) => {
    const text = paragraph.textContent;

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
    } else {
        if (text) {
            if (currentUtterance) {
                synth.cancel();
            }

            currentUtterance = new SpeechSynthesisUtterance(text)
            currentUtterance.onend = () => {
                isSpeaking = false;
                isPaused = false;
                button.textContent = "play"
                currentUtterance = null;
            };

            synth.speak(currentUtterance);
            isSpeaking = true;
            isPaused = false;
            button.textContent = "pause";
        }
    }
};

button.addEventListener("click", () => textToSpeech(area, button));
button_2.addEventListener("click", () => textToSpeech(area_v2, button_2));
