var video;
var poseNet;
var noseX = 0;
var noseY = 0;
var eyelX = 0;
var eyelY = 0;
var eyerX = 0;
var eyerY = 0;

function preload() {
    eyes = loadImage('https://i.postimg.cc/nrNbtCQs/mask-removebg-preview.png')
}

function setup() {
  canvas = createCanvas(600, 600);
//   canvas.center()
  video = createCapture(VIDEO);
  video.hide()
  poseNet = ml5.poseNet(video,modelReady)
  poseNet.on('pose',gotposes)
}

function modelReady() {
  console.log("Model is Loaded")
}

function gotposes(poses) {
    if (poses.length > 0) {
        let nx = poses[0].pose.keypoints[0].position.x-180;
        let ny = poses[0].pose.keypoints[0].position.y-80;
        noseX = lerp(noseX,nx,0.5)
        noseY = lerp(noseY,ny,0.5)

        let elx = poses[0].pose.keypoints[1].position.x;
        let ely = poses[0].pose.keypoints[1].position.y;
        eyelX = lerp(eyelX,elx,0.5)
        eyelY = lerp(eyelY,ely,0.5)
    }
}

function draw() {
    let d = dist(noseX,noseY,eyelX,eyelY)
    image(video,0,0,500,400);
    image(eyes,noseX,noseY,170,150);
}