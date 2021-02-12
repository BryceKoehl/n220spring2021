// 1 - FizzBuzz

let posX = 20;
let posY = 20;
let posR = 20;
let c = 1;

function setup() {
    createCanvas(1100, 300);
  }

  function draw() {
    // background(0);
    
	while ( c <=25 ) {
    
		if ( c%3 == 0 && c%5==0 ) {
			fill(100, 153, 179);  // blue
			square(posX-20,0, 2*posR);

		}else if ( c%3 == 0 ) {
        	fill(207, 103, 196);  // purple
			circle(posX,posY,posR);

		} else if ( c%5 == 0 ) {
			fill(100, 179, 107);  // green
			square(posX-20,0, 2*posR);

		} else {
			fill(0,0,0);  // black
			circle(posX,posY,posR);
		}
		posX = posX + posR + posR
		c++;
		
	}
  }



