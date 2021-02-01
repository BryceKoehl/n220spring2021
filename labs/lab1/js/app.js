function setup(){
    createCanvas(800, 800);

    var maainFill = "#ce6a6b"
    var dot =  "#212e53"
    var mainCircle = "#4a919e"
    var outerStroke = "#bed3c3"
    var lines = "##9D98AE"


    //base circles
    fill(maainFill)
    strokeWeight(2)
    circle(400,400,300)
    

   
    //main circles
    fill(mainCircle)
    stroke(lines)
    strokeWeight(10)
    strokeWeight(1)
    //1 
    circle(400,160,50)
    //2
    circle(610,190,50)
    //4
    circle(620,600,50)
    //5
    circle(400,660,50)
    //6
    circle(230,570,50)
    //7
    circle(145,400,50)



    //removes the circles outside the circle
    noFill()
    strokeWeight(95)
    stroke(outerStroke)
    circle(400,400,350)



    // return stroke and fill to proper colors
    fill(outerStroke)
    stroke(0,0,0)
    strokeWeight(1)



    //one circle's stroke goes outside base circle
    fill(mainCircle)
    stroke(lines)
    //3
    circle(690,400,50)



    //small circles
    fill(outerStroke)
    stroke(dot)
    //3
    circle(190,190,15)
    //2
    circle(520,125,15)
    //1
    circle(370,200,15)



    //dots
    fill(dot)
    circle(400,190,3)
    circle(430,170,3)
    circle(660,400,3)
    circle(680,430,3)
    circle(640,570,3)
    circle(595,575,3)
    circle(590,620,3)
    circle(260,590,3)
    circle(250,545,3)
    circle(210,545,3)
    

    //lines
    stroke(lines)
    strokeWeight(5)
    line(450,695,600,240);
    line(190,380,565,210);
    line(185,370,560,200);
    
    
      

    //outer circle
    noFill()
    strokeWeight(2)
    stroke(0,0,0)
    circle(400,400,350)



}
