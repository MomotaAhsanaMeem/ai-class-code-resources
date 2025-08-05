let canvas;
var speech = window.webkitSpeechRecognition;     //api call
var recognition = new speech()

function start() {
    var text = document.getElementById('text');
    text.innerText = "System is listening, please say the shape to draw";
    recognition.start();
}

function setup() {
    canvas = createCanvas(500,500)
    canvas.center()
}

function clearCanvas() {
    var text = document.getElementById('text');
    text.innerText = "Screen Cleared";
    background("white");
}

recognition.onresult = function (event) {
    console.log(event)
    var shape = event.results[0][0].transcript;
    shape = shape.toLowerCase();
    shape = shape.replaceAll('.','');
    console.log(shape)

    if (shape === 'circle') {
        var text = document.getElementById('text');
        text.innerText = "Circle is drawn";
        draw_circle();
    }

    if (shape === 'red circle') {
        var text = document.getElementById('text');
        text.innerText = shape+" is drawn";
        fill('red')
        draw_circle()
    }

    if (shape === 'green circle') {
        var text = document.getElementById('text');
        text.innerText = shape+" is drawn";
        fill('green')
        draw_circle()
    }

    if (shape === 'blue circle') {
        var text = document.getElementById('text');
        text.innerText = shape+" is drawn";
        fill('blue')
        draw_circle()
    }

    if (shape === 'yellow background') {
        var text = document.getElementById('text');
        text.innerText = shape+" is drawn";
        background("yellow")
    }

    if (shape === 'black background') {
        var text = document.getElementById('text');
        text.innerText = shape+" is drawn";
        background("black")
    }

    if (shape === 'clear') {
        var text = document.getElementById('text');
        text.innerText = "Screen Cleared";
        background("white")
    }
}

function draw_circle() {
    strokeWeight(4);
    stroke('red');
    circle(250,250,110)
}