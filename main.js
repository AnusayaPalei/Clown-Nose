nosex=0;
nosey=0;
mouthx=0;
mouthy=0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/65jKJvM0/Clown-Nose.png');
    clownMouth=loadImage('https://i.postimg.cc/Y9LcHnyf/clown-mouth.png');
}

function setup(){
    canvas= createCanvas(250,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();
    posenet= ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-7;
    nosey=results[0].pose.nose.y-5;
    mouthx=nosex-15;
    mouthy=nosey+23;
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save("filtering.png")
}

function draw(){
    image(video,0,0,250,250);
   // fill(255,0,0);
   // stroke(118, 9, 141);
    //circle(nosex,nosey,20);
    image(clownNose,nosex,nosey,20,20);
    image(clownMouth,mouthx,mouthy,50,15)
}