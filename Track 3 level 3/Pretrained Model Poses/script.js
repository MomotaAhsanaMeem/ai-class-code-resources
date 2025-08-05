let video;
let poseNet;
var noseX = 0;
var noseY = 0;
var eyelX = 0;
var eyelY = 0;
var eyerX = 0;
var eyerY = 0;

function setup() {
    createCanvas(400,400);
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    poseNet = ml5.poseNet(video,modelReady)
    poseNet.on('pose',gotPoses);
}

function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
        let nx = poses[0].pose.keypoints[0].position.x;
        let ny = poses[0].pose.keypoints[0].position.y;
        noseX = lerp(noseX,nx,0.5)
        noseY = lerp(noseY,ny,0.5)

        let elx = poses[0].pose.keypoints[1].position.x;
        let ely = poses[0].pose.keypoints[1].position.y;
        eyelX = lerp(eyelX,elx,0.5)
        eyelY = lerp(eyelY,ely,0.5)
        
        let erx = poses[0].pose.keypoints[2].position.x;
        let ery = poses[0].pose.keypoints[2].position.y;
        eyerX = lerp(eyerX,erx,0.5)
        eyerY = lerp(eyerY,ery,0.5)
    }
}

function modelReady() {
    alert("Model Loaded!")
}

function draw() {
    image(video, 0, 0);
    let d = dist(noseX,noseY,eyelX,eyelY);
    noseY = noseY-3;
    fill("red");
    ellipse(noseX,noseY,d)

    eyelY = eyelY-3
    fill("white");
    ellipse(eyelX,eyelY,d)
    fill("black");
    ellipse((eyelX+1.5),(eyelY+1.5),(d-20))

    eyerY = eyerY-3;
    fill("white");
    ellipse(eyerX,eyerY,d)
    fill("black");
    ellipse((eyerX+1.5),(eyerY+1.5),(d-20))
}