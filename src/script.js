const area = document.querySelector("p2");
const button = document.querySelector("button");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = area.value;

    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace)
};

button.addEventListener("click", textToSpeech);
