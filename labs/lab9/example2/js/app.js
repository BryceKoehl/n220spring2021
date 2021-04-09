//2 - Thats a lot of div

for (var i=0; i<100; i++) {
    let dvRect = document.querySelector("#rect");
    let box = document.createElement('div');
    box.style.float = "left";
    box.style.height = "50px";
    box.style.width = "50px";
    box.style.backgroundColor = randomColor();
    dvRect.appendChild(box); 
}


function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}