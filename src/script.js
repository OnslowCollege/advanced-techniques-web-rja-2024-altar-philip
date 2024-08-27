const area = document.querySelector(".text-box");
const button = document.querySelector("button");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = area.Value;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }
};

button.addEventListener("click", textToSpeech);
