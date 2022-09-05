const correctAnswers = ["B", "B", "A", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const span = document.querySelector("span");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  scrollTo(0, 0);
  //   span.textContent = `${score}%`;
  result.removeAttribute("class", "d-none");

  let output = 0;
  const timer = setInterval(() => {
    span.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
