let classifier;
const startButton = document.getElementById('startButton');
const resultLabel = document.getElementById('result_label');
const resultConfidence = document.getElementById('result_confidence');

function startClassification() {
  startButton.disabled = true;
  resultLabel.textContent = "Requesting microphone access...";
  
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
      resultLabel.textContent = "Loading model...";
      
      classifier = ml5.soundClassifier(
        'https://teachablemachine.withgoogle.com/models/qjf6O8NKD/model.json',
        { probabilityThreshold: 0.7 },
        modelReady
      );
    })
    .catch(err => {
      console.error("Error accessing microphone:", err);
      resultLabel.textContent = "Microphone access denied. Please allow access.";
      startButton.disabled = false;
    });
}

function modelReady() {
  resultLabel.textContent = "Listening...";
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    resultLabel.textContent = "Error occurred. Try again.";
    startButton.disabled = false;
    return;
  }
  
  const result = results[0];
  console.log("Detected:", result.label, "Confidence:", result.confidence);

  // Update UI
  resultLabel.textContent = `Detected: ${result.label}`;
  resultConfidence.textContent = `Confidence: ${(result.confidence * 100).toFixed(1)}%`;

  // Highlight the correct image
  document.querySelectorAll('.alien').forEach(img => img.classList.remove('active'));
  
  if (result.label === "Clap") {
    document.getElementById("alien1").classList.add('active');
  } else if (result.label === "Snap") {
    document.getElementById("alien2").classList.add('active');
  } else if (result.label === "Talking") {
    document.getElementById("alien3").classList.add('active');
  } else {
    document.getElementById("alien4").classList.add('active');
  }
}

// Event listener
startButton.addEventListener('click', startClassification);