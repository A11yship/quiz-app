console.clear();

//Change the bookmark status

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const emptyBookmark = document.querySelector('[data-js="bookmark-img-empty"]');
const fullBookmark = document.querySelector('[data-js="bookmark-img-full"]');

bookmarkButton.addEventListener("click", () => {
  emptyBookmark.classList.toggle("card_bookmark__img--hidden");
  fullBookmark.classList.toggle("card_bookmark__img--hidden");
});

//Hidde/show answer

const answerButton = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card_answer");
  if (answerButton.textContent.trim() == "Verberge Antwort") {
    answerButton.textContent = "Zeige Antwort";
  } else if (answerButton.textContent.trim() == "Zeige Antwort") {
    answerButton.textContent = "Verberge Antwort";
  }
});

console.log([answerButton]);
