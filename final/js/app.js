//2 - Color Mixer
let dvRect = document.getElementById("rect");
let dvCurrentColor = document.getElementById("currentColor");

let red = 0;
let green = 0;
let blue = 0;



function addColor(event) {
    //get the color
    let getColor = event.target.getAttribute("data-color");
    //get the amount of color
    let getWeight = event.target.getAttribute("data-weight");

    if(getColor == "red") {
        if(getWeight == 1){
            red += 1;   
        } else if(getWeight == 5){
            red += 5;   
        } else if(getWeight == 10){
            red += 10;   
        }
    } 

    if(getColor == "green") {
        if(getWeight == 1){
            green += 1;   
        } else if(getWeight == 5){
            green += 5;   
        } else if(getWeight == 10){
            green += 10;   
        }
    } 

    if(getColor == "blue") {
        if(getWeight == 1){
            blue += 1;   
        } else if(getWeight == 5){
            blue += 5;   
        } else if(getWeight == 10){
            blue += 10;   
        }
    } 
    endColor = "rgb(" + red + "," + green + "," + blue + ")";
    dvCurrentColor.innerHTML ="currentColor " + endColor;
    dvRect.style.backgroundColor = endColor;
}

