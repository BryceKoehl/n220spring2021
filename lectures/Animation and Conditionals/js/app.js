// let spices = 0;
// function draw() {
// 	spices = spices + 1;
// 	console.log(spices);
// }

let xPos = 1;
let yPos = 40;

let xSpeed = 1 ;
let ySpeed = 1 ;

function setup(){
    createCanvas(400, 300,)
}

function draw() {
    //background(62, 237, 108)
    xPos = xPos + xSpeed ;
    yPos = yPos + ySpeed ;

    if(keyIsDown(LEFT_ARROW)) {
        xSpeed = -1
    }

    if(keyIsDown(RIGHT_ARROW)) {
        xSpeed = 1
    }

    if(keyIsDown(UP_ARROW)) {
        ySpeed = -1
    }

    if(keyIsDown(DOWN_ARROW)) {
        ySpeed = 1
    }

    // ySpeed = ySpeed + .84;

    // var myBool =  xPos < 100;
    // console.log(myBool)

    // fill(19,71,26)
    

    // if(xPos > 100)
    // if(keyIsDown(LEFT_ARROW)) {
    //     fill(235, 64, 52)
    //     // console.log("Greater than!")

    // } else {
    //     fill(19,71,26)
    // }

	circle(xPos, yPos, 30);
}
