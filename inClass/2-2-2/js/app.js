function setup() {
    createCanvas(400, 300);
  }

  function draw() {
    background(0);
    fill (240, 123, 55);
    mouseX = 400 - mouseX;
    mouseY = 300 - mouseY;

    circle(mouseX, mouseY, 30);
  }

  //   if (mouseX < 200) {
  //     mouseX = 400 - mouseX
  //     fill (50, 158, 252);  // Right
  //   }
  //   if (mouseX > 200) {
  //     mouseX = 400 + mouseX
  //       fill (252, 53, 50);  // Left
  //     }

  //     circle(mouseX, mouseY, 30);
  // }

  //240, 123, 55