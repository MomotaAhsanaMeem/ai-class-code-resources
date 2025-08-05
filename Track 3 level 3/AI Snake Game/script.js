let canvas;
let poseNet;
let video;

function setup() {
    canvas = createCanvas(600,600)
    canvas.center()
    background("white")
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}