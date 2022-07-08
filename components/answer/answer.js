export default function Answer() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach((card) => {
    const answerButton = card.querySelector('[data-js="button-answer"]');
    const answer = card.querySelector('[data-js="answer"]');

    let showAnswer = false;

    answerButton.addEventListener("click", () => {
      showAnswer = !showAnswer;

      if (showAnswer) {
        answerButton.innerText = "Verberge Antwort";
        answer.classList.remove("card_answer--hidden");
      } else {
        answerButton.innerText = "Zeige Antwort";
        answer.classList.add("card_answer--hidden");
      }
    });
  });
}
