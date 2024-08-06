document.getElementById('speak-button').addEventListener('click', () => {
    const textArea = document.getElementById('text-to-speak');
    const text = textArea.value;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in this browser.');
    }
});