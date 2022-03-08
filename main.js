status = "";

function preload(){
video=createVideo("vid.mp4");
}
function setup(){
canvas= createCanvas(480,380);
canvas.center();
video.hide();
}
function draw(){
image(video, 0,0,480,380);

}
function start_video(){
    object_detector= ml5.objectDetector("cocoSSD",modelLoaded);
    document.getElementById(status).innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}