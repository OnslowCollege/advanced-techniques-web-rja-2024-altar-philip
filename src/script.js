const area = document.querySelector("#text-box");
const button = document.querySelector("button");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = area.innerText;

    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace)
};

button.addEventListener("click", textToSpeech);
