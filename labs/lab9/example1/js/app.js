//1 - Peak Pixels

let dvRect = document.getElementById("rect");

let h = 100;
let w = 100;

dvRect.style.width = w + "px";
dvRect.style.height = h + "px";
dvRect.style.backgroundColor = "green";

function increase(){
    h = h*1.1;
    w = w*1.1;

    dvRect.style.width = w + "px";
    dvRect.style.height = h + "px";
}


