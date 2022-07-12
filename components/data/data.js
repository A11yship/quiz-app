import Card from "../card/card.js";

export default async function LoadData() {
  try {
    const respone = await fetch("https://opentdb.com/api.php?amount=20");
    const data = await respone.json();
    const rawQuestionArray = data.results;
    console.log(rawQuestionArray);
    const questionArray = rawQuestionArray.map((item) => {
      //console.log(item.question);

      return { question: item.question, answer: "a", tags: ["a", "b", "c"] };
    });

    console.log(questionArray);
    Card(questionArray);
  } catch (error) {
    console.error(error.message);
  }
}
