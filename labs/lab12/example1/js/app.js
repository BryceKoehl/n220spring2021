//1 - color changer

function changeColor(event) {
    //get the color
    let getColor = event.target.getAttribute("data-color");
 
    if(getColor == "red") {
        left.style.backgroundColor = "#911c0a";
    } 

    if(getColor == "green") {
        middle.style.backgroundColor = "#0a910f";
    } 

    if(getColor == "blue") {
        right.style.backgroundColor = "#0c0a91";
    } 
}


