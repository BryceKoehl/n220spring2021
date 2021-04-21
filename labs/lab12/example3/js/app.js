//3 - flash cards
answer = document.getElementById("answer");

function getAnswer(event) {
   var answer = event.target.getAttribute("data-answer");
   dvAnswer.innerHTML = answer;
}