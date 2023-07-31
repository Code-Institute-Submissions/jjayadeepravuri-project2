const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionContainerElement = document.getElementById('question-container');
const scores = document.getElementById('score');
let shuffledQuestions, currentQuestionIndex;
const totalQuestions = 10;
const counterDisplay = document.getElementById("questionCounter");


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextquestion();
});


questionCounter++;
counterDisplay.innerText = `${questionCounter}/${totalQuestions}`;
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    questionCounter = 0;
    setNextquestion();
}


function setNextquestion() {


    questionCounter++;
    counterDisplay.innerText = `${questionCounter}/${totalQuestions}`;
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild);
    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}



const questions = [
    {
        question: 'Swedish megastars ABBA won the 1974 Eurovision Song Contest with which song?',
        answers: [
            { text: 'waterloo', correct: true },
            { text: 'Money Money Money', correct: false },
            { text: 'Mama Mia', correct: false },
            { text: 'Dancing Queen', correct: false },
        ]
    },
    {
        question: 'What is Kebnekaise',
        answers: [
            { text: 'Swedens Tallest Mountain', correct: true },
            { text: 'A Swedish delicacy', correct: false },
            { text: 'Swedens longest river', correct: false },
            { text: 'A Famous Swedish coffee', correct: false }
        ]
    },

    {
        question: 'Which of these is the name of a pastry traditionally eaten in Sweden on the 13th of December?',
        answers: [
            { text: 'Semla', correct: false },
            { text: 'Vaniljbulle', correct: false },
            { text: 'Solskensbulle', correct: false },
            { text: 'Lussekatt', correct: true }
        ]
    },

    {
        question: 'Which of the following famous Vikings was NOT from Sweden?',
        answers: [
            { text: 'Ragnar lothbrok', correct: false },
            { text: 'Björn Ironside', correct: false },
            { text: 'Leif Eriksson', correct: true },
            { text: 'Ivar the Boneless', correct: false }
        ]
    },

    {
        question: 'Which of the following is the name of Swedens national anthem?',
        answers: [
            { text: 'Du unga, du vackra', correct: false },
            { text: 'Du gamla, du fria', correct: true },
            { text: 'Du ramlar, du fisar', correct: false },
            { text: 'Du fulla, du fulla', correct: false }
        ]
    },

    {
        question: 'What is the most popular drink in Sweden?',
        answers: [
            { text: 'coffee', correct: true },
            { text: 'Glühwein', correct: false },
            { text: 'Kiisseli', correct: false },
            { text: 'Loka', correct: false }
        ]
    },

    {
        question: 'What do Swedes do when they meet for a fika',
        answers: [
            { text: 'Getting drunk', correct: false },
            { text: 'Handicrafts', correct: false },
            { text: 'Touch each other in a sensual way', correct: false },
            { text: 'Having a coffee and maybe some pastry', correct: true }
        ]
    },

    {
        question: 'Alfred Nobel is known for this invention…',
        answers: [
            { text: 'Dynamite', correct: true },
            { text: 'Matches', correct: false },
            { text: 'Ball Bearing', correct: false },
            { text: 'Hexagonal wrench', correct: false }
        ]
    },

    {
        question: 'What is the national animal of Sweden?',
        answers: [
            { text: 'Fox', correct: false },
            { text: 'Deer', correct: false },
            { text: 'Moose', correct: true },
            { text: 'Bear', correct: false }
        ]
    },

    {
        question: 'What date is the national day of Sweden celebrated?',
        answers: [
            { text: '6 July', correct: false },
            { text: '6 October', correct: false },
            { text: '6 May', correct: false },
            { text: '6 June', correct: true }
        ]
    },

];




















































