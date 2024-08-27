const area = document.querySelector("#text-box");
const button = document.querySelector("button");


const area_v2 = document.querySelector("#text_box_v2");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = area.getHTML();

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }
};

button.addEventListener("click", textToSpeech);
