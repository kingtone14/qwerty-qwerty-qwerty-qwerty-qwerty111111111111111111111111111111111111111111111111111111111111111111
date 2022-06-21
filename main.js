
noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = creatCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    posNet = ml5.posNet(video, modelLoaded);
    posNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    Save('myFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}