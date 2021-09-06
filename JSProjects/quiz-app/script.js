const quizData = [
  {
    question: "how old is florin",
    a: "10",
    b: "15",
    c: "30",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming languagein 2019",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the president if US",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "what dows HTML stand for ?",
    a: "Hypertext Markup Language",
    b: "Cascading Style sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "what year was JavaScript lanuched ?",
    a: "2020",
    b: "2019",
    c: "2018",
    d: "none of the above",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerE1s.forEach((answerE1) => {
    answerE1.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //   :show results
      quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</button> 
      `;
    }
  }
});
