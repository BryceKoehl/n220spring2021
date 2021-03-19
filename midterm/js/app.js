let circles = [
  {x: 22, r:75, c:"#edf7a1"},
  {x: 124, r:40, c:"#dbe87b"},
  {x: 236, r:25, c:"#b0d986"},
  {x: 338, r:15, c:"#95bd6c"},
  {x: 450, r:10, c:"#59d9d0"},
  {x: 552, r:75, c:"#49c9c0"},
  {x: 664, r:40, c:"#f7a1b6"},
  {x: 766, r:25, c:"#db8499"},
  {x: 878, r:15, c:"#c09ef7"},
  {x: 980, r:10, c:"#a686db"}
  
]

function setup(){
  createCanvas(1000, 1000)
  background(0);
}

function mousePressed(){
  mouseY+=200;
}

function draw() {
  background(0);

  for(i = 0; i < circles.length; i++) {
      // console.log(i)
      fill(circles[i].c);
      circle(circles[i].x,mouseY,10) 
  }
}



