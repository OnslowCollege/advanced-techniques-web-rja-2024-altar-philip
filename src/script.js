const area = index.querySelector("#text-box");
const button = index.querySelector("button");
let isSpeaking = True;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = area.innerText;


    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }

    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "paused";
            synth.resume();
            isSpeaking = False;
        } else {
            button.innerText = "resume";
            synth.pause();
            isSpeaking = True;
        }
    }

};
button.addEventListener("click", textToSpeech);
