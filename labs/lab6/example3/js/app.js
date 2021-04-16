//1 - Animated Object
let circles = [
    {x: 100, y: 100, r:75, c:"#edf7a1"},
    {x: 200, y: 200, r:40, c:"#b0d986"},
    {x: 300, y: 300, r:25, c:"#59d9d0"},
    {x: 400, y: 400, r:15, c:"#c09ef7"},
    {x: 500, y: 500, r:10, c:"#f7a1b6"}
    
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
        circles[i].y += 20;
        circles[i].x += 5;

        if(circles[i].y >= 1000) {
            circles[i].y = 10;
        }

        if(circles[i].x >= 1000) {
            circles[i].x = 10;
        }
 }
}
 