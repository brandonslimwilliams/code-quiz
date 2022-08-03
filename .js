const sbtn = document.getElementById("startbtn");
const next =document.getElementById("next");
const disappear = document.getElementsById("instructions");
const quiz = document.getElementById('quiz')
const questionIndex = 0
let timer = 60;
let score = 0;
let time = document.getElementById("timer");


var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
      answer: "3.alerts"
    },
    {
    question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
      answer: "3.parentheses"
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
      choices: [ "1.numbers and strings", "2.other arrays",  "3.booleans", "4.all of the above" ],
      answer: "4.all of the above" 
    },  
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        answer: "3.quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1.JavaScript", "2.terminal bash", "3.for loops", "4.console.log"],
        answer: "4.console.log"
    } 
]; 

sbtn.addEventListener("click", startGame);

    
function startGame() {

    sbtn.setAttribute("class", "hidden")

    setTime();

    questionOne();
}    

function setTime () {
time.textContent=timer
let countdown = setInterval(() => {
    time.textContent = ''
    timer--
    time.textContent = timer
    if (time === 0 || questionIndex === questions.length) {
        clearInterval(countdown)
        endGame()
    }
}, 1000);

}
 

function questionOne() {
questionIndex++
quiz.innerHTML = ''
disappear.innerHTML = ''
var questionEl = document.createElement('h1')
questionEl.setAttribute("id", "theQuest");
    quiz.appendChild(questionEl);
    document.getElementById("theQuest").textContent = questions[0].question;
    for(var i=0; i <questions[0].choices.length; i++) {
        var cEle = document.createElement("li");

}
}
      





