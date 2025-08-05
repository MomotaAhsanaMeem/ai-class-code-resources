// Attach the webcam feed to the #webcam div
Webcam.attach('#webcam');

// Select elements
const takeSelfieButton = document.getElementById("take-selfie");
const photo = document.getElementById("photo");
const saveLink = document.getElementById("save-link");
const deletePhotoButton = document.getElementById("delete-photo");

// Function to take a selfie after a delay
takeSelfieButton.addEventListener("click", () => {
    takeSelfieButton.textContent = "Get ready! Taking selfie in 3 seconds...";
    setTimeout(() => {
        Webcam.snap((dataUri) => {
            // Display the photo
            photo.src = dataUri;

            // Set up the save link
            saveLink.href = dataUri;
            saveLink.style.display = "inline"; // Show the link
        });
        takeSelfieButton.textContent = "Take Selfie (3s delay)";
    }, 3000); // 3-second delay
});

// Delete photo when the delete button is clicked
deletePhotoButton.addEventListener("click", () => {
    photo.src = ""; // Clears the photo
    output.textContent = "Photo deleted.";
});