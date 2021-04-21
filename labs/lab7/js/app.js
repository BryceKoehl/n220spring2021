// 2 - Bounce off Rectangle

let circleX = 0;
let circleY = 100;

let speedX = 2;
let speedY = 2;

let rectX = 300;
let rectY = 555;
let rectH = 30;
let rectW = 200;

function setup(){
    createCanvas(900,600);
}


function draw(){
    background(220);
    fill(255);
    rect(mouseX, rectY, rectW, rectH);
    fill(232,14,14);
    circle(circleX, circleY, 25);
    circleX = circleX + speedX;
    circleY = circleY + speedY;

    if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
        speedY = speedY *-1;
    }

    if ((circleX >= 600) && (circleY >= 600)){
        circleX = 0;
        circleY = 100;
        speedY = 3;
    }
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    fill(255)
    var colliding = false;

    if((circleX > rectX) && (circleX < rectX + rectW)) {
        if((circleY > rectY && circleY < rectY + rectH)){
            return true;
        }
    }
}





