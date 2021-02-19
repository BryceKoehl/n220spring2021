// 2 - Dripping water
let ay = [];
let yCord = 0;


function setup() {
    frameRate(10);
    createCanvas(400, 400);
    background(50);
  
  }


function draw() {
    clear();


    for ( i = 0 ; i<1000; i++){
        fill(190, 213, 250, 250);
        circle(150,yCord,50);
        
    }
    yCord = yCord+100;
             


}







