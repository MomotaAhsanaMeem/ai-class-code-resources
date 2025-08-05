function startListening() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    
    recognition.onresult = function(event) {
        document.getElementById("output").innerText = event.results[0][0].transcript;
    };
    
    recognition.start();
}

function speakText() {
    let text = document.getElementById('output').value;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
