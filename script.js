var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    answer: "3.alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: [
      "1.quotes",
      "2.curly brackets",
      "3.parentheses",
      "4.square brackets",
    ],
    answer: "3.parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "1.numbers and strings",
      "2.other arrays",
      "3.booleans",
      "4.all of the above",
    ],
    answer: "4.all of the above",
  },
];

var timeContainer = document.getElementById("time");
var score = document.getElementById("score");
var startContent = document.getElementById("startContainer");
var questionIntro = document.getElementById("questions");
var options = document.getElementById("choices");
var instructions = document.getElementsByClassName("instructions");
var startButton = document.querySelector("#start-button");
var results = document.getElementById("results");
var score = 0;
var timer = 60;
var questionIndex = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.setAttribute("class", "hidden");
  

  setTime();

  questionOne();
}

function setTime() {
  timeContainer.textContent = timer;
  let countdown = setInterval(() => {
    timeContainer.textContent = "";
    timer--;
    timeContainer.textContent = timer;
    if (timer === 0 || questionIndex === questions.length) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

function questionOne() {
  questionIndex++;
  questionIntro.innerHTML = "";
  options.innerHTML = "";
  var questionEl = document.createElement("h1");
  questionEl.setAttribute("id", "theQuest");
  questionIntro.appendChild(questionEl);
  document.getElementById("theQuest").textContent = questions[0].question;
  for (var i = 0; i < questions[0].choices.length; i++) {
    var cEle = document.createElement("li");
    cEle.setAttribute("id", questions[0].choices[i]);
    options.appendChild(cEle);
    cEle.append(questions[0].choices[i]);
    cEle.addEventListener("click", function (event) {
      if (event.target.id === questions[0].answer) {
        results.textContent = "Correct!";
        score += 20;
      } else {
        results.textContent = "Incorrect!";
        timer -= 10;
      }
      console.log(score);
      questionTwo();
    });
  }
}
function questionTwo() {
  questionIndex++;
  questionIntro.innerHTML = "";
  options.innerHTML = "";
  var questionEl = document.createElement("h1");
  questionEl.setAttribute("id", "theQuest");
  questionIntro.appendChild(questionEl);
  document.getElementById("theQuest").textContent = questions[1].question;
  for (var i = 0; i < questions[1].choices.length; i++) {
    var cEle = document.createElement("li");
    cEle.setAttribute("id", questions[1].choices[i]);
    options.appendChild(cEle);
    cEle.append(questions[1].choices[i]);
    cEle.addEventListener("click", function (event) {
      if (event.target.id === questions[1].answer) {
        results.textContent = "Correct!";
        score += 20;
      } else {
        results.textContent = "Incorrect!";
        timer -= 10;
      }
      console.log(score);
      questionThree();
    });
  }
}
function questionThree() {
  questionIntro.innerHTML = "";
  options.innerHTML = "";

  var questionEl = document.createElement("h1");
  questionEl.setAttribute("id", "theQuest");
  questionIntro.appendChild(questionEl);
  document.getElementById("theQuest").textContent = questions[2].question;

  for (var i = 0; i < questions[2].choices.length; i++) {
    var cEle = document.createElement("li");
    cEle.setAttribute("id", questions[2].choices[i]);
    options.appendChild(cEle);
    cEle.append(questions[2].choices[i]);
    cEle.addEventListener("click", function (event) {
      if (event.target.id === questions[2].answer) {
        results.textContent = "Correct!";
        score += 20;
      } else {
        results.textContent = "Incorrect!";
        timer -= 10;
      }
      console.log(score);
      questionIndex++;
    });
  }
}

function endGame() {
  questionIntro.innerHTML = "";
  options.innerHTML = "";
  var questionEl = document.createElement("h1");
  questionEl.textContent = "Game Over! Please type your name to see your score";
    
  questionEl.className = "myQuest";
  questionIntro.append(questionEl);


  var input = document.createElement("input");
  input.setAttribute("placeholder", "Type Your Name");
  choices.append(input);
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit"
  choices.append(submitBtn)

  submitBtn.addEventListener('click', function() {
    var player = {
        name: input.value,
        yourScore: score
    }

    var storage = JSON.parse(localStorage.getItem('highScore'))
    if (storage === null) {
        storage = []
    }
    storage.push(player)
    localStorage.setItem('highScore', JSON.stringify(storage))
    window.location.href = 'highscore.html'
})

console.log("Game over!"); 
}

  
   
