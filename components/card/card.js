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

    console.log("Ich bin eine Karte");
  });
}
