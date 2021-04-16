//1 - Neapolitan

xCord = 0;
yCord = 0;
let colorArray = [ "#f5a9d0", "#ede6d1", "#785631", "#fcba03" ];


function setup() {
  createCanvas(400, 375);
  	background(45);
  
  for( let i = 0; i < 3; i++) {
    fill(colorArray[i]);
    rect(0, yCord, 400, 125);
	yCord = yCord + 125;
  }
}


