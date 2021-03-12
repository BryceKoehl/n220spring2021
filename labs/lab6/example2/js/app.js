//1 - Animated Object
let circles = [
    {x: 100, y: 100, r:75, c:"#f5b700"}
]
 
 function setup(){
    createCanvas(1000, 1000)
    background(0);
 }
 
 function draw() {
    background(0);

    //for(initialize variable equal to 0, WHILE variable is less than or equal to the array length, add one to variable)
    

    for(i = 0; i < circles.length; i++) {
        console.log(i)
        fill(circles[i].c);
        circle(circles[i].x,circles[i].y,circles[i].r)
        circles[i].y += 5;
        circles[i].x += 1;
        
        if(circles[i].y >= 1000) {
            circles[i].y = 10;
        }

        if(circles[i].x >= 1000) {
            circles[i].x = 10;
        }
        }

        
 }

 