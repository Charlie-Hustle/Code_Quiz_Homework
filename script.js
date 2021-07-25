var questions = [ 
    {
        question: "What does HTML stand for?",
        choices: ["cascading style sheets", "Hyper Text Markup Language", "peanut butter","jelly"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What does HTML stand for?",
        choices: ["cascading style sheets", "Hyper Text Markup Language", "peanut butter","jelly"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What does HTML stand for?",
        choices: ["cascading style sheets", "Hyper Text Markup Language", "peanut butter","jelly"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What does HTML stand for?",
        choices: ["cascading style sheets", "Hyper Text Markup Language", "peanut butter","jelly"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What does HTML stand for?",
        choices: ["cascading style sheets", "Hyper Text Markup Language", "peanut butter","jelly"],
        answer: "Hyper Text Markup Language"
    },
];
var yourTime = document.querySelector("#yourTime");
var startQuizBtn = document.querySelector("#startQuiz");
var quizTitle = document.querySelector("#quizHeader");
var yourQuestion = document.querySelector("#questionDiv");
var yourChoice = document.querySelector("#choiceDiv");
var questionTitle = document.querySelector("#question-title");
var homeDiv = document.querySelector("#home");
var interval;
var timeLeft = 81;
var questionIndex = 0;


startQuizBtn.addEventListener("click", function() {
    interval = setInterval(function(){
        timeLeft--;
        yourTime.textContent = "Timer: " + timeLeft;

        if(timeLeft <= 0){
            clearInterval(interval);
            yourTime.textContent = 'Times up!';
            quizOver();
        }
    },1000);
    getQuestion();
})

function getQuestion(){
var theQuestion = questions[questionIndex];
questionTitle.textContent = theQuestion.question;

yourChoice = "";

theQuestion.choices.forEach(function(choice, i){
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);
     
    choiceBtn.textContent = i + 1 + "." + choice;

    choiceBtn.onclick = clickQuestion;

    yourChoice.appendChild(choiceBtn);
});
}

function clickQuestion(){
  for (const answer of theQuestion.answer){
    const buttonContainer = document.createElement('div');
    const newButtonElement = document.createElement('button');
    newButtonElement.className = 'answer';

    newButtonElement.addEventListener('click', () => {
        if(answer === theQuestion.answer){
            yourChoice.textContent = 'Correct!';
            getQuestion(questionIndex + 1);
        } else{
            yourChoice.textContent = 'Incorrect!';
            getQuestion(questionIndex + 1);
            timeLeft -=10;
        }
    })

    newButtonElement.innerText = answer;
    buttonContainer.append(newButtonElement);
    
  }
}






