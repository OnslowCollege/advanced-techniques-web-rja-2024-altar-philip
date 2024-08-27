const area = document.querySelector("#text-box");
const button = document.querySelector("#button_1");


const button_2 = document.querySelector("#button_2");
const area_v2 = document.querySelector("#text_box_v2");

const textToSpeech = (paragraph) => {
    const synth = window.speechSynthesis;
    const text = paragraph.textContent;

    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
};

button.addEventListener("click", () => textToSpeech(area));
button_2.addEventListener("click", () => textToSpeech(area_v2));
