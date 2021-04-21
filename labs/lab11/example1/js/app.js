//1 - it's just average

function math(){

var numbers = document.getElementById("inputNumbers");
var outputSum = document.getElementById("outputSum");
var outputAverage = document.getElementById("outputAverage");


var numbersArray = numbers.value.split(",");
    numbers.value = "";

var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
    let splitString = Number(numbersArray[i]); 
    sum+=splitString;

}

var average = sum / numbersArray.length;
outputSum.innerHTML = "The sum of the array is " + sum;
outputAverage.innerHTML = "The average of the array is " + average;

// console.log(numbers);
// console.log(numbersArray);
// console.log(outputSum);
// console.log(outputAverage);
}


