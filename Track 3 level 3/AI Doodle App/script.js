let classifier;
let canvas;

function preload() {
    classifier = ml5.imageClassifier('DoodleNet',modelLoaded);
}

function modelLoaded() {
    console.log('Model is Loaded');
}

function setup() {
    canvas = createCanvas(400,400)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
    strokeWeight(15);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function clearCanvas() {
    background("white")
}

function classifyCanvas() {
    if (classifier) {
        classifier.classify(canvas,gotResult);
    }
    else {
        console.log("Classifier is not loaded")
    }
}

function gotResult(result) {
    console.log(result);
    var label = result[0].label;
    var confidence = result[0].confidence;
    document.getElementById('obj_name').innerText = label;
    document.getElementById('obj_acc').innerText = (confidence * 100).toFixed(2) + '%';
    
    var say = new SpeechSynthesisUtterance(result[0].label);
    synth.speak(say);    
}