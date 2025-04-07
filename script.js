const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('nextBtn');
const endScreen = document.getElementById('end-screen');

const quizData = [
  {
    question: "When is my birthday?",
    answers: [
      { text: "December 13", correct: false },
      { text: "December 24", correct: false },
      { text: "December 29", correct: true },
      { text: "December 5", correct: false }
    ]
  },
  {
    question: "What is the name of the school where we first meet?",
    answers: [
      { text: "SpringField School of Novaliches", correct: false },
      { text: "Our Lady of Fatima University", correct: true },
      { text: "Sto Niño de Novaliches School", correct: false },
      { text: "Far Eastern University Institute of Technology", correct: false }
    ]
  },
  {
    question: "What is my zodiac sign?",
    answers: [
      { text: "Leo", correct: false },
      { text: "Capricorn", correct: true },
      { text: "Gemini", correct: false },
      { text: "Pisces", correct: false }
    ]
  },
  {
    question: "What is my favorite color?",
    answers: [
      { text: "Red", correct: false },
      { text: "Green", correct: true },
      { text: "Black", correct: false },
      { text: "Grey", correct: false }
    ]
  },
  {
    question: "When is our anniversary?",
    answers: [
      { text: "April 24", correct: false },
      { text: "April 29", correct: false },
      { text: "April 13", correct: true },
      { text: "April 5", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;

function showQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.classList.add('answer');
    btn.addEventListener('click', () => handleAnswerClick(btn, answer.correct));
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  questionElement.classList.remove('hidden');
  endScreen.classList.add('hidden');
}

function handleAnswerClick(button, isCorrect) {
  if (isCorrect) {
    button.classList.add('correct');
    disableButtons();
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        showQuestion();
      } else {
        showEndScreen();
      }
    }, 1000);
  } else {
    button.classList.add('wrong');
    setTimeout(() => {
      button.classList.remove('wrong');
    }, 1000);
  }
}

function disableButtons() {
  const allButtons = answerButtons.querySelectorAll('button');
  allButtons.forEach(btn => btn.disabled = true);
}

function showEndScreen() {
  resetState();
  questionElement.classList.add('hidden');
  endScreen.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  window.location.href = 'babo.html';
});

showQuestion();
