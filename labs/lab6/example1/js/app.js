//1 - Animated Object

var myCircle = {
   r: 100,
	x: 500, 
   y: 500,
   color: [0, 156, 250],
	
  }

function setup(){
   createCanvas(1000, 1000)
   background(0);
}

function draw() {
   background(0);

   fill(myCircle.color);
   circle(myCircle.x,myCircle.y, myCircle.r);

}
