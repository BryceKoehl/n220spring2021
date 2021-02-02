// 2 - Puck Slide

function setup() {
    createCanvas(400, 300);
  }

  function draw() {
    background(0);
    background(0);
    if (mouseX < 200) {
        fill(50, 158, 252);  // Right
    }
    if (mouseX > 200) {
        fill(252, 53, 50);  // Left
    }

    //inverts the cricle
    // mouseX = 400 - mouseX;
    // mouseY = 300 - mouseY;

    //tells whther or not the circle is on the left or right side fo the canvas
    // var myBool =  xPos < 100;
    // console.log(myBool)

    circle(mouseX, mouseY, 30);
  }



