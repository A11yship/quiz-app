export default function Answer(answerButton, answer) {
  let showAnswer = false;

  answerButton.addEventListener('click', () => {
    showAnswer = !showAnswer;

    if (showAnswer) {
      answerButton.innerText = 'Verberge Antwort';
      answer.classList.remove('card_answer--hidden');
    } else {
      answerButton.innerText = 'Zeige Antwort';
      answer.classList.add('card_answer--hidden');
    }
  });
}
