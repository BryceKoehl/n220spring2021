// 3 - World Warp
    
let xPos = 1;
let yPos = 150;

function setup(){
    createCanvas(400, 300,)
}

function draw() {
    //background(62, 237, 108)
    xPos = xPos + 5 ;
    // yPos = yPos + ySpeed ;

   if (xPos >= 400){
       xPos = 0 ;
   }
  
	circle(xPos, yPos, 30);
}
