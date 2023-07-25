const startButton = document.getElementById('play-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-grid')
const questionElement = document.getElementById('question')

let shuffledQuestions, currentQuestionIndex

function startGame() {
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {

  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {


 questionElement.innerText = question.question
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
    }