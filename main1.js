img = "";
status = "";

function preload(){
 img = loadImage('image1.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Water Bottle", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 100, 350);
}
function home(){
    window.location="index.html";
}