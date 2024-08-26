const area = document.querySelectorAll(".text-box");
const button = document.querySelectorAll("button");
let isSpeaking = false;
let currentUtterance = null;

button.forEach((button, index) => {
    button.addEventListener("click", () => {
        textToSpeech(textBoxes[index], button);
    });
});

const textToSpeech = (textBox, button) => {
    const synth = window.speechSynthesis;
    const text = textBox.innerText;


    if (text.length > 50) {
        if (synth.speaking) {
            if (isSpeaking) {
                button.innerText = "resume";
                synth.pause();
                isSpeaking = false;
            } else {
                button.innerText = "pause";
                synth.resume();
                isSpeaking = true;
            }
        } else {
            currentUtterance = new SpeechSynthesisUtterance(text);
            synth.speak(currentUtterance);
            isSpeaking = true;
            button.innerText = "pause";
        }
    } else {
        if (!synth.speaking) {
            currentUtterance = new SpeechSynthesisUtterance(text);
            synth.speak(currentUtterance);
            isSpeaking = true;
            button.innerText = "pause";
        }
    }
};
