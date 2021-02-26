//1 - Click for Random

let color = ['#173F5F', '#20639B', '#3CAEA3', '#f6d55C' , '#ED553B'];

function setup(){
   createCanvas(600, 600);
   fill(255);
}


 function draw(){

    circle(300, 300, 50);
    stroke(10);
    // console.log("hi");

} 

function mousePressed(){
            let x = random(color);
            fill(x);
            circle(300,300,50);
            // console.log("hi");  
    }