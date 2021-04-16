var words = document.getElementById("words");
var output = document.getElementById("output");

function check() {
    var badWordCount = 0;
    var badWordsPresent = false
    var wordsArray = words.value.split(" ");
    words.value = "";
    
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] == "tires") {
            badWordCount +=1;
            badWordsPresent = true;
        }
        if (wordsArray[i] == "clear") {
            badWordCount +=1;
            badWordsPresent = true;
        }
        if (wordsArray[i] == "water") {
            badWordCount +=1;
            badWordsPresent = true;
        }
    }
    if (badWordsPresent == true) {
        output.innerHTML = "There were bad words present. Bad word count: " + badWordCount;
    }
    else {
        output.innerHTML = "No bad words present.";
    }
}