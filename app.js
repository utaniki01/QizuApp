const quizData = [
  {
    question: "日本の首都は？",
    choices: ["大阪", "東京", "名古屋", "福岡"],
    answer: "東京"
  },
  {
    question: "2 + 2 は？",
    choices: ["3", "4", "5", "6"],
    answer: "4"
  }
];
let currentIndex = 0;
let score = 0;
function showQuiz() {
  const q = quizData[currentIndex];

  document.getElementById("question").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => checkAnswer(choice);

    choicesDiv.appendChild(btn);
  });
}
function checkAnswer(selected) {
  const correct = quizData[currentIndex].answer;

  if (selected === correct) {
    score++;
    document.getElementById("result").textContent = "正解！";
  } else {
    document.getElementById("result").textContent = "不正解...";
  }
}
function nextQuiz() {
  currentIndex++;

  if (currentIndex < quizData.length) {
    document.getElementById("result").textContent = "";
    showQuiz();
  } else {
    showResult();
  }
}
function showResult() {
  document.getElementById("quiz-container").innerHTML =
    `<h2>スコア: ${score} / ${quizData.length}</h2>`;
}
document.getElementById("nextBtn").addEventListener("click", nextQuiz);
showQuiz();
