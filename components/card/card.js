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

    const bookmarkImgEmpty = document.createElement("img");
    bookmarkImgEmpty.classList.add("bookmark__img");
    bookmarkImgEmpty.src = "../../icons/bookmark_border_black_24dp.svg";
    bookmarkImgEmpty.setAttribute("data-js", "bookmark-img-empty");
    bookmarkImgEmpty.alt = "Lesezeichen nicht gesetzt";
    bookmark.append(bookmarkImgEmpty);

    const bookmarkImgFull = document.createElement("img");
    bookmarkImgFull.classList.add("bookmark__img", "bookmark__img--hidden");
    bookmarkImgFull.src = "../../icons/bookmark_black_24dp.svg";
    bookmarkImgFull.setAttribute("data-js", "bookmark-img-full");
    bookmarkImgFull.alt = "Lesezeichen gesetzt";
    bookmark.append(bookmarkImgFull);

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
