const area = document.querySelectorall("#text-box");
const button = document.querySelector("button");
let isSpeaking = False;
let currentUtterance = null;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    let combinedtext = "";
    textboxes.forEach(box => { combinedText += box.innerText + " "; });


    if (combinedText.length > 50) {
        if (synth.speaking) {
            if (isSpeaking) {
                button.innerText = "resume";
                synth.pause();
                isSpeaking = False;
            } else {
                button.innerText = "pause";
                synth.resume();
                isSpeaking = True;
            }
        } else {
            currentUtterance = new SpeechSynthesisUtterance(combinedtext);
            synth.speck(currentUtterance);
            isSpeaking = True;
            button.innerText = "pause";
        }
    } else {
        if (!synth.speaking) {
            currentUtterance = new SpeechSynthesisUtterance(combinedtext);
            synth.speck(currentUtterance);
            isSpeaking = True;
            button.innerText = "pause";
        }
    }
};
button.addEventListener("click", textToSpeech);
