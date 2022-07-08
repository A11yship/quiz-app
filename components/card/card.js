const questions = [
  {
    question: "Wie heißt die Hauptstadt von Deutschland?",
    answer: "Berlin",
    tags: ["Deutschland", "Geografie", "Hauptstädte"],
  },
  {
    question: "Wie heißt die Hauptstadt von Frankreich?",
    answer: "Paris",
    tags: ["Frankreich", "Geografie", "Hauptstädte"],
  },
  {
    question: "Wie heißt die Hauptstadt von Ialien?",
    answer: "Rom",
    tags: ["Italien", "Geografie", "Hauptstädte"],
  },
];

const main = document.querySelector("main");

export default function Card() {
  questions.forEach((question) => {
    const card = document.createElement("article");
    card.classList.add("card");
    main.append(card);

    const headline = document.createElement("h2");
    headline.innerText = "Frage";
    headline.classList.add("card_headline");
    card.append(headline);

    const bookmark = document.createElement("button");
    bookmark.classList.add("bookmark__button");
    bookmark.type = "button";
    bookmark.setAttribute("data-js", "bookmark-button");
    card.append(bookmark);

    const bookmarkSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    bookmarkSVG.classList.add("bookmark__svg");
    bookmarkSVG.setAttribute("data-js", "bookmark-svg");
    bookmarkSVG.setAttribute("viewBox", "-2 -2 28 28");
    bookmarkSVG.setAttribute("alt", "Lesezeichen nicht gesetzt");
    bookmark.append(bookmarkSVG);

    const bookmarkPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    bookmarkPath.setAttribute(
      "d",
      "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
    );
    bookmarkSVG.append(bookmarkPath);

    const questionText = document.createElement("p");
    questionText.innerText = question.question;
    card.append(questionText);

    const answerButton = document.createElement("button");
    answerButton.classList.add("regular-button");
    answerButton.innerText = "Zeige Antwort";
    answerButton.type = "button";
    answerButton.setAttribute("data-js", "button-answer");
    card.append(answerButton);

    const answerText = document.createElement("p");
    answerText.innerText = question.answer;
    answerText.classList.add("card_answer", "card_answer--hidden");
    answerText.setAttribute("data-js", "answer");
    card.append(answerText);

    const tagList = document.createElement("ul");
    tagList.classList.add("tag-list");
    card.append(tagList);

    question.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.innerText = tag;
      tagItem.classList.add("tag-item");
      tagList.append(tagItem);
    });
  });
}
