var capturedImage = "";
var camera = false
Webcam.set(
    {
        width: 350,
        height: 300,
        image_format: 'png',
        png_quality: 90
    }
)

function toggle_camera(){
    var cameraElement = document.getElementById("camera");
    if (!camera){               //if camera === false
        Webcam.attach('#camera')
        camera = true;
        document.getElementById("toggle").innerText = "Turn Off Camera"
    }
    else{                       // camera === true
        Webcam.reset();
        camera = false;
        document.getElementById("toggle").innerText = "Turn On Camera"
    }
}

function displayImage(data){
    document.getElementById('result').innerHTML="<img id='image' src='" + data + "'/>";
}

function capture_image(){
    Webcam.snap(displayImage);
}

function delete_image(){
    document.getElementById('result').innerHTML = '';
}

// model configure
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0WfyQvZjdK/model.json',modelLoaded)
console.log(classifier)
function modelLoaded(){
    alert("Model Loaded!")
}

function detect(){
    var img = document.getElementById('image');
    classifier.classify(img, gotResult);
    if (!img) {
        alert("Please capture an image first!");
    }
}

function gotResult(results, error) {
    if (error) {
        console.error("Classification error:", error);
    }
    else{
        console.log(results)
        document.getElementById('obj_name').innerHTML = results[0].label
        document.getElementById('obj_accuracy').innerHTML = (results[0].confidence*100).toFixed(2) + "%"
    }
}
