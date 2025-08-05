// Select the elements
const speechOutput = document.getElementById("speech-output");

// Initialize the SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configure recognition properties
recognition.continuous = true; // Keeps recognition running continuously
recognition.interimResults = true; // Shows partial results as you speak
recognition.lang = "en-US"; // Set the language

// Handle start listening button click
function startListening(){
    recognition.start();
    speechOutput.placeholder = "Listening...";
};

// Handle stop listening button click
function stopListening(){
    recognition.stop();
    speechOutput.placeholder = "Stopped.";
};

// Display the recognized speech in the textarea
recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    speechOutput.value = transcript;
};

// Handle errors if any
recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    speechOutput.placeholder = "An error occurred. Please try again.";
};

function speakText() {
    let text = document.getElementById('speech-output').value;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}




