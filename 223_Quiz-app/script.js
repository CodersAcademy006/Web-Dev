document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('.start_btn button');
  const quizBox = document.querySelector('.quiz_box');
  const infoBox = document.querySelector('.info_box');
  const submitBtn = document.querySelector('.submit');
  const nextBtn = document.querySelector('.next_btn');
  const previousBtn = document.querySelector('.previous_btn');
  const resultBox = document.querySelector('.result_box');
  
  let currentQuestion = 0;
  let score = 0;
  
  startBtn.addEventListener('click', () => {
    infoBox.style.display = 'none';
    quizBox.style.display = 'block';
    loadQuestion();
  });
  
  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];
      document.querySelector('.quiz_text').innerHTML = q.question;
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    resultBox.querySelector('.score').innerHTML = `Your Score: ${score}/${questions.length}`;
  }
  
  submitBtn.addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
  });
});
