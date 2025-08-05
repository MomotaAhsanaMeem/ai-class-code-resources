// Set up elements
const startListeningButton = document.getElementById("start-listening");
const output = document.getElementById("output");
const videoElement = document.getElementById("webcam");
const takePhotoButton = document.getElementById("take-photo");
const deletePhotoButton = document.getElementById("delete-photo");
const photo = document.getElementById("photo");

// Initialize SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Start listening for speech
startListeningButton.addEventListener("click", () => {
    recognition.start();
});

// Display the recognized speech
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = "You said: " + transcript;

    // If "capture photo" is said, take a photo
    if (transcript.toLowerCase().includes("capture photo")) {
        takePhoto();
    }
};

// Initialize and start the webcam
Webcam.attach('#webcam');

// Capture a photo when the button is clicked
takePhotoButton.addEventListener("click", () => {
    Webcam.snap((data_uri) => {
        photo.src = data_uri;
    });
});

// Delete photo when the delete button is clicked
deletePhotoButton.addEventListener("click", () => {
    photo.src = ""; // Clears the photo
    output.textContent = "Photo deleted.";
});












