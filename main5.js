img = "";
status = "";

function preload(){
 img = loadImage('image.jpg');
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
    text("Rubic's Cube", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function nextScreen(){
    window.location="index1.html";
}
function nextScree1(){
    window.location="index2.html";
}
function nextScreen2(){
    window.location="index3.html";
}
function nextScreen3(){
    window.location="index4.html";
}
function nextScreen4(){
    window.location="index5.html";
}
function home(){
    window.location="index.html";
}