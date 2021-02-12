// 2 - Pyramid

let posX = 20;
let posY = 20;

function setup() {
    createCanvas(400, 250);
  }

  function draw() {
    // background(0);
       

    for (r = 1; r <= 4; ++r) {
      for (s = 1; s <= r; ++s) {
        fill(250, 0, 0, 250)
        noStroke()
		    square(posX,posY,50)
        posX = posX + 60
      }
      posY = posY + 60
      posX = 20;		
	}

}








