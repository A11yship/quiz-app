export default function Card() {
  const answerButton = document.querySelector('[data-js="button-answer"]');
  const answer = document.querySelector('[data-js="answer"]');

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("card_answer--hidden");
    if (answerButton.textContent.trim() == "Verberge Antwort") {
      answerButton.textContent = "Zeige Antwort";
    } else if (answerButton.textContent.trim() == "Zeige Antwort") {
      answerButton.textContent = "Verberge Antwort";
    }
  });
}
