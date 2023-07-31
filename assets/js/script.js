const startButton = document.getElementById('start-btn');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionContainerElement = document.getElementById('question-container');
startButton.addEventListener('click', startGame);


let shuffledQuestions, currentQuestionIndex;

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);


    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;

    console.log('started');

    setNextquestion();

}
function setNextquestion() {
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


function selectAnswer() {

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
            { text: 'A Swedish delicacy', correct: true },
            { text: 'Swedens longest river', correct: true },
            { text: 'A Famous Swedish coffee', correct: true }
        ]
    },

    {
        question: 'Which of these is the name of a pastry traditionally eaten in Sweden on the 13th of December?',
        answers: [
            { text: 'Semla', correct: true },
            { text: 'Vaniljbulle', correct: true },
            { text: 'Solskensbulle', correct: true },
            { text: 'Lussekatt', correct: true }
        ]
    },

    {
        question: 'Which of the following famous Vikings was NOT from Sweden?',
        answers: [
            { text: 'Ragnar lothbrok', correct: true },
            { text: 'Björn Ironside', correct: true },
            { text: 'Leif Eriksson', correct: true },
            { text: 'Ivar the Boneless', correct: true }
        ]
    },

    {
        question: 'Which of the following is the name of Swedens national anthem?',
        answers: [
            { text: 'Du unga, du vackra', correct: true },
            { text: 'Du gamla, du fria', correct: true },
            { text: 'Du ramlar, du fisar', correct: true },
            { text: 'Du fulla, du fulla', correct: true }
        ]
    },

    {
        question: 'What is the most popular drink in Sweden?',
        answers: [
            { text: 'coffee', correct: true },
            { text: 'Glühwein', correct: true },
            { text: 'Kiisseli', correct: true },
            { text: 'Loka', correct: true }
        ]
    },

    {
        question: 'What do Swedes do when they meet for a fika',
        answers: [
            { text: 'Getting drunk', correct: true },
            { text: 'Handicrafts', correct: true },
            { text: 'Touch each other in a sensual way', correct: true },
            { text: 'Having a coffee and maybe some pastry', correct: true }
        ]
    },

    {
        question: 'Alfred Nobel is known for this invention…',
        answers: [
            { text: 'Dynamite', correct: true },
            { text: 'Matches', correct: true },
            { text: 'Ball Bearing', correct: true },
            { text: 'Hexagonal wrench', correct: true }
        ]
    },

    {
        question: 'What is the national animal of Sweden?',
        answers: [
            { text: 'Fox', correct: true },
            { text: 'Deer', correct: true },
            { text: 'Moose', correct: true },
            { text: 'Bear', correct: true }
        ]
    },

    {
        question: 'What date is the national day of Sweden celebrated?',
        answers: [
            { text: '6 July', correct: true },
            { text: '6 October', correct: true },
            { text: '6 May', correct: true },
            { text: '6 June', correct: true }
        ]
    },

];
    
       


















































];