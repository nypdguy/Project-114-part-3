leftEyeX=0;
leftEyeY=0;

function preload(){
    eye_image = loadImage('https://i.postimg.cc/x8bPttkQ/OIP.jpg');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(eye_image, leftEyeX, leftEyeY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x - 15;
        leftEyeY = results[0].pose.leftEye.y - 15;
        console.log("leftEye x = " + results[0].pose.leftEye.x);
        console.log("leftEye y = " + results[0].pose.leftEye.y);
    }
}