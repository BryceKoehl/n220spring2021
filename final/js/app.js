//REFERENCES
showWord = document.getElementById("showWord");
showPrompt = document.getElementById("showPrompt");
space = document.getElementById("space");

//array for word choices
let words = ["orange", "wail", "obsolete", "royal", "sun", "space", "dusty", "place", "exchange", "plate", "pin"];
randomChoice = words[Math.floor(Math.random() * words.length)]; //randomly pulls a word from the array
console.log(randomChoice);

//variables
let totalCorrect = 0;
let totalIncorrect = 0;
let blanks = [];

let splitWord = randomChoice.split(''); //splits chosen word into characters
//DisplayWord.InnerHTML = randomChoice;
showWord.innerHTML = "Hangman";
console.log(splitWord);

// reset the page
function reset() {
    location.reload();
}

for (i = 0; i < splitWord.length; i++) {
    var blank = document.createElement("div"); //creates buttons
    blank.classList.add("space");
    blank.style.left = 700 + i * 50 + "px";
    space.appendChild(blank);
    blanks.push(blank);
}
//console.log(blanks);

//array for letters
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generates letters on the page
for (i = 0; i < letters.length; i++) {
    let button = document.createElement("button"); //creates buttons
    button.innerHTML = letters[i]; //assigns a letter to each button of the array
    button.classList.add("buttons");
    let buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);

    button.addEventListener("click", asClicked); //listens for an event
    button.addEventListener("click", filterText); //listens for event with a different function to Invoke


    function asClicked(event) { //when the mouse is clicked
        let choice = event.target.innerHTML; //choice is equal to the event.target.innerHTML (aka: a,b,c,etc)
        event.target.disabeld = true; //disables the selection of a letter after it has been selected once
        //console.log(event.target.innerHTML);
    }

    function filterText(event) { //when the mouse is clicked
        //IF IT IS A MATCH
        let splitChoice = randomChoice.split('');
        console.log("TESTING: " + splitChoice);

        let found = false;

        for (i = 0; i < randomChoice.length; i++) {
            if (event.target.innerHTML == splitChoice[i]) {
                showPrompt.innerHTML = (event.target.innerHTML + " is in the word");
                totalCorrect += 1;
                found = true;
                console.log(totalCorrect);
                //if you win
                blanks[i].innerHTML = event.target.innerHTML;
                if (totalCorrect >= randomChoice.length) {
                    showPrompt.innerHTML = ("You win!");
                    break;
                }
            }
        }

        //if it's not a match
        if (!found) {
            showPrompt.innerHTML = (event.target.innerHTML + " is not in the word");
            totalIncorrect += 1;
            //console.log(totalIncorrect);
            if (totalIncorrect == 6) {
                showPrompt.innerHTML = ("You lose, click reset to try again!");
            } else if (totalIncorrect >= 6) {
                location.reload();
            }
        }
    }

}


//P5
function setup() {
    createCanvas(1375, 500);
    background(35, 61, 88);
    //rectMode(CENTER);
}

function draw(event) {
    background(35, 61, 88);
    noStroke();
    fill(255, 255, 255);
    rect(150, 50, 150, 20);
    rect(175, 70, 20, 380);
    rect(120, 450, 200, 20);

    if (totalIncorrect == 1) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
    } else if (totalIncorrect == 2) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
    } else if (totalIncorrect == 3) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230, 200, 60, 20); //left arm
    } else if (totalIncorrect == 4) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230, 200, 60, 20); //left arm
        fill(155, 177, 255);
        rect(310, 199, 60, 20); //right am
    } else if (totalIncorrect == 5) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230, 200, 60, 20); //left arm
        fill(155, 177, 255);
        rect(310, 199, 60, 20); //right am
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(400, -117, 20, 90); //left leg
    } else if (totalIncorrect == 6) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230, 200, 60, 20); //left arm
        fill(155, 177, 255);
        rect(310, 199, 60, 20); //right am
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(400, -117, 20, 90); //left leg
        fill(155, 177, 255);
        rect(405, -123, 90, 20); //right leg
    }
}
