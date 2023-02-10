nose_x =0;
nose_y =0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Model Is Initialized');
}

function draw(){
    image(video,0,0,450,450);
    image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose X is equal to"+nose_x);
        console.log("Nose Y is equal to"+nose_y);
    }
}